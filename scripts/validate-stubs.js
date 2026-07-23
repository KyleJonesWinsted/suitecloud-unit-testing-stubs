#!/usr/bin/env node
'use strict';

/**
 * Validates that each stub's module-level symbols (methods, .promise variants,
 * objects, enums) match the members documented on the module's Oracle docs page.
 *
 * Usage:
 *   node scripts/validate-stubs.js            # validate every stub
 *   node scripts/validate-stubs.js llm task   # validate specific stubs
 *
 * Exit code 0 when everything matches (modulo ALLOW), 1 otherwise.
 *
 * The docs check is heuristic: it scans the page text for `<alias>.<member>`
 * tokens, so prose that mentions a removed or unrelated member can produce a
 * false "docs-only" entry. Treat failures as prompts to look, not gospel.
 */

const https = require('https');
const path = require('path');

const DOCS_BASE = 'https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/';

// stub file name (without .js) -> docs page + the alias the docs use for members
const MODULES = [
  { stub: 'action', alias: 'action', page: 'section_1510761537.html' },
  { stub: 'auth', alias: 'auth', page: 'section_4296360422.html' },
  { stub: 'cache', alias: 'cache', page: 'section_4642573343.html' },
  { stub: 'certificate', alias: 'certificate', page: 'section_1543432423.html' },
  { stub: 'certificateControl', alias: 'certificateControl', page: 'section_1547247950.html' },
  { stub: 'clientCertificate', alias: 'clientCertificate', page: 'section_1543986321.html' },
  { stub: 'compress', alias: 'compress', page: 'section_158584507367.html' },
  { stub: 'config', alias: 'config', page: 'section_4261803800.html' },
  { stub: 'crypto', alias: 'crypto', page: 'section_4358549582.html' },
  { stub: 'currency', alias: 'currency', page: 'section_4358551775.html' },
  { stub: 'currentRecord', alias: 'currentRecord', page: 'section_4625600928.html' },
  { stub: 'dataset', alias: 'dataset', page: 'article_158946741680.html' },
  { stub: 'datasetLink', alias: 'datasetLink', page: 'article_162609851226.html' },
  { stub: 'dialog', alias: 'dialog', page: 'section_4497725142.html' },
  { stub: 'documentCapture', alias: 'documentCapture', page: 'article_8134325498.html' },
  { stub: 'email', alias: 'email', page: 'section_4358552361.html' },
  { stub: 'encode', alias: 'encode', page: 'section_4369847722.html' },
  { stub: 'error', alias: 'error', page: 'section_4243798608.html' },
  { stub: 'file', alias: 'file', page: 'section_4205693274.html' },
  { stub: 'format', alias: 'format', page: 'section_4388721627.html' },
  { stub: 'http', alias: 'http', page: 'section_4296361104.html' },
  { stub: 'https', alias: 'https', page: 'section_4418229131.html' },
  { stub: 'i18n', alias: 'format', page: 'section_1543861741.html' },
  { stub: 'keyControl', alias: 'keyControl', page: 'section_1557413213.html' },
  { stub: 'llm', alias: 'llm', page: 'article_9123730083.html' },
  { stub: 'log', alias: 'log', page: 'section_4574548135.html' },
  { stub: 'machineTranslation', alias: 'machineTranslation', page: 'article_3151132758.html' },
  { stub: 'message', alias: 'message', page: 'section_4497735093.html' },
  { stub: 'pgp', alias: 'pgp', page: 'article_5095832176.html' },
  { stub: 'piremoval', alias: 'piremoval', page: 'section_156173791240.html' },
  { stub: 'plugin', alias: 'plugin', page: 'section_4558176297.html' },
  { stub: 'portlet', alias: 'portlet', page: 'section_4473510730.html' },
  { stub: 'productionCharges', alias: 'productionCharges', page: 'article_1110531599.html' },
  { stub: 'query', alias: 'query', page: 'section_1510275060.html' },
  { stub: 'random', alias: 'random', page: 'section_13113107585.html' },
  { stub: 'recognition', alias: 'recognition', page: 'section_1554472720.html' },
  { stub: 'record', alias: 'record', page: 'section_4267255811.html' },
  { stub: 'recordContext', alias: 'recordContext', page: 'section_158627324548.html' },
  { stub: 'recordView', alias: 'recordView', page: 'section_1532341950.html' },
  { stub: 'redirect', alias: 'redirect', page: 'section_4424286105.html' },
  { stub: 'render', alias: 'render', page: 'section_4412042824.html' },
  { stub: 'restlet', alias: 'restlet', page: 'article_4130555042.html' },
  { stub: 'runtime', alias: 'runtime', page: 'section_4296359529.html' },
  { stub: 'search', alias: 'search', page: 'section_4345764122.html' },
  { stub: 'serverWidget', alias: 'serverWidget', page: 'section_4321345532.html' },
  { stub: 'sftp', alias: 'sftp', page: 'section_4617004932.html' },
  { stub: 'suiteAppInfo', alias: 'suiteAppInfo', page: 'article_160236086332.html' },
  { stub: 'task', alias: 'task', page: 'section_4345787858.html' },
  { stub: 'transaction', alias: 'transaction', page: 'section_4413162576.html' },
  { stub: 'translation', alias: 'translation', page: 'section_1538666156.html' },
  { stub: 'url', alias: 'url', page: 'section_4358552918.html' },
  { stub: 'util', alias: 'util', page: 'section_4569538303.html' },
  { stub: 'workbook', alias: 'workbook', page: 'article_159006350818.html' },
  { stub: 'workflow', alias: 'workflow', page: 'section_4341725558.html' },
  { stub: 'xml', alias: 'xml', page: 'section_4344917661.html' },
];

// Deliberate deviations from the docs: symbol kept in the stub although the
// current docs page does not list it. Keyed by stub name.
const ALLOW_STUB_ONLY = {
  // Documented as `Action.promise(options)` on the object page; the scraper
  // only sees module-prefixed tokens like `action.Action`.
  action: ['Action.promise'],
  crypto: ['Encoding'], // exists at runtime; kept on purpose (see PR #7)
  // Documented as `Macro.promise(options)` on the object page.
  record: ['Macro.promise'],
  // The chat/executePrompt aliases' promise variants are documented in prose
  // ("promise versions of these methods are also available"), not as
  // `llm.<name>.promise` tokens the scraper can see.
  llm: ['chat.promise', 'chatStreamed.promise', 'executePrompt.promise', 'executePromptStreamed.promise'],
};

// Docs tokens that are prose artifacts, not module members.
const IGNORE_DOCS_TOKENS = new Set(['prototype', 'promise', 'com', 'js', 'html']);

function fetchPage(url, redirects) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers: { 'User-Agent': 'stub-validator' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location && redirects > 0) {
        res.resume();
        resolve(fetchPage(new URL(res.headers.location, url).href, redirects - 1));
        return;
      }
      if (res.statusCode !== 200) {
        res.resume();
        reject(new Error('HTTP ' + res.statusCode));
        return;
      }
      let body = '';
      res.setEncoding('utf8');
      res.on('data', (c) => { body += c; });
      res.on('end', () => resolve(body));
    });
    req.setTimeout(30000, () => req.destroy(new Error('timeout')));
    req.on('error', reject);
  });
}

function htmlToText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, ' ');
}

function docsSymbols(text, alias) {
  const re = new RegExp('\\b' + alias + '\\.([A-Za-z_$][\\w$]*(?:\\.promise)?)', 'g');
  const found = new Set();
  let m;
  while ((m = re.exec(text)) !== null) {
    const name = m[1];
    if (IGNORE_DOCS_TOKENS.has(name)) continue;
    found.add(name);
  }
  // A bare `x.promise` token only counts if `x` itself is documented.
  for (const name of found) {
    if (name.endsWith('.promise') && !found.has(name.slice(0, -'.promise'.length))) {
      found.delete(name);
    }
  }
  return found;
}

function stubSymbols(stubName) {
  const mod = require(path.join(__dirname, '..', 'stubs', stubName + '.js'));
  const proto = Object.getPrototypeOf(mod);
  const found = new Set();
  for (const key of Object.keys(proto)) {
    found.add(key);
    if (typeof proto[key] === 'function' && typeof proto[key].promise === 'function') {
      found.add(key + '.promise');
    }
  }
  return found;
}

async function validate(entry) {
  const result = { stub: entry.stub, stubOnly: [], docsOnly: [], error: null, skipped: false };
  if (!entry.page) {
    result.skipped = true;
    return result;
  }
  let text;
  try {
    text = htmlToText(await fetchPage(DOCS_BASE + entry.page, 3));
  } catch (e) {
    result.error = 'fetch failed: ' + e.message;
    return result;
  }
  const docs = docsSymbols(text, entry.alias);
  if (docs.size === 0) {
    result.error = 'no `' + entry.alias + '.*` tokens found on page (wrong URL or page layout changed)';
    return result;
  }
  const stub = stubSymbols(entry.stub);
  const allowed = new Set(ALLOW_STUB_ONLY[entry.stub] || []);
  for (const s of stub) {
    if (!docs.has(s) && !allowed.has(s) && !allowed.has(s.replace(/\.promise$/, ''))) {
      result.stubOnly.push(s);
    }
  }
  for (const d of docs) {
    if (!stub.has(d)) result.docsOnly.push(d);
  }
  result.stubOnly.sort();
  result.docsOnly.sort();
  return result;
}

async function main() {
  const requested = process.argv.slice(2);
  let targets = MODULES;
  if (requested.length) {
    targets = MODULES.filter((m) => requested.includes(m.stub));
    const known = new Set(MODULES.map((m) => m.stub));
    for (const r of requested) {
      if (!known.has(r)) {
        console.error('unknown stub: ' + r);
        process.exitCode = 1;
      }
    }
  }

  const results = [];
  const queue = targets.slice();
  const workers = Array.from({ length: 5 }, async () => {
    while (queue.length) {
      const entry = queue.shift();
      results.push(await validate(entry));
    }
  });
  await Promise.all(workers);

  results.sort((a, b) => a.stub.localeCompare(b.stub));
  let failures = 0;
  for (const r of results) {
    if (r.skipped) {
      console.log('SKIP  ' + r.stub + ' (no docs page to validate against)');
    } else if (r.error) {
      failures++;
      console.log('ERROR ' + r.stub + ': ' + r.error);
    } else if (r.stubOnly.length || r.docsOnly.length) {
      failures++;
      console.log('DIFF  ' + r.stub);
      for (const s of r.stubOnly) console.log('        stub-only: ' + s);
      for (const d of r.docsOnly) console.log('        docs-only: ' + d);
    } else {
      console.log('OK    ' + r.stub);
    }
  }
  console.log('\n' + (results.length - failures) + '/' + results.length + ' modules match');
  if (failures) process.exitCode = 1;
}

main();
