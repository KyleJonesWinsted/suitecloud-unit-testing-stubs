module.exports = (function () {

  // N/translation Module Members

  var translation = function() {};

  // Object

  var Handle = function() {};

  var Translator = function() {};

  translation.prototype.Handle = Handle;

  translation.prototype.Translator = Translator;

  // Method

  translation.prototype.get = function(options) {};

  translation.prototype.load = function(options) {};

  translation.prototype.selectLocale = function(options) {};



  // Enum

  function Locale() {
    this.CURRENT = "CURRENT";
    this.COMPANY_DEFAULT = "CURRENT_DEFAULT";
    this.af_ZA = "af_ZA";
    this.ar = "ar";
    this.bg_BG = "bg_BG";
    this.bn_BD = "bn_BD";
    this.bs_BA = "bs_BA";
    this.cs_CZ = "cs_CZ";
    this.da_DK = "da_DK";
    this.de_DE = "de_DE";
    this.el_GR = "el_GR";
    this.en = "en";
    this.en_AU = "en_AU";
    this.en_CA = "en_CA";
    this.en_GB = "en_GB";
    this.en_US = "en_US";
    this.es_AR = "es_AR";
    this.es_ES = "es_ES";
    this.et_EE = "et_EE";
    this.fa_IR = "fa_IR";
    this.fi_FI = "fi_FI";
    this.fr_CA = "fr_CA";
    this.fr_FR = "fr_FR";
    this.gu_IN = "gu_IN";
    this.he_IL = "he_IL";
    this.hi_IN = "hi_IN";
    this.hr_HR = "hr_HR";
    this.hu_HU = "hu_HU";
    this.hy_AM = "hy_AM";
    this.id_ID = "id_ID";
    this.is_IS = "is_IS";
    this.it_IT = "it_IT";
    this.ja_JP = "ja_JP";
    this.kn_IN = "kn_IN";
    this.ko_KR = "ko_KR";
    this.lb_LU = "lb_LU";
    this.lt_LT = "lt_LT";
    this.lv_LV = "lv_LV";
    this.mr_IN = "mr_IN";
    this.ms_MY = "ms_MY";
    this.nl_NL = "nl_NL";
    this.no_NO = "no_NO";
    this.pa_IN = "pa_IN";
    this.pl_PL = "pl_PL";
    this.pt_BR = "pt_BR";
    this.pt_PT = "pt_PT";
    this.ro_RO = "ro_RO";
    this.ru_RU = "ru_RU";
    this.sh_RS = "sh_RS";
    this.sk_SK = "sk_SK";
    this.sl_SI = "sl_SI";
    this.sq_AL = "sq_AL";
    this.sr_RS = "sr_RS";
    this.sv_SE = "sv_SE";
    this.ta_IN = "ta_IN";
    this.te_IN = "te_IN";
    this.th_TH = "th_TH";
    this.tl_PH = "tl_PH";
    this.tr_TR = "tr_TR";
    this.uk_UA = "uk_UA";
    this.vi_VN = "vi_VN";
    this.zh_CN = "zh_CN";
    this.zh_TW = "zh_TW";
  }

  translation.prototype.Locale = new Locale();

  return new translation();
})();