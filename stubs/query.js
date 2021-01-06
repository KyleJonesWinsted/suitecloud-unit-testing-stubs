module.exports = (function () {

  // N/query Module Members

  var query = function () {};

  // Object

  var Column = function() {};

  var Component = function() {};

  var Condition = function() {};

  var Page = function() {};

  var PagedData = function() {};

  var PageRange = function() {};

  var Period = function() {};

  var RelativeDate = function() {};

  var Result = function() {};

  var ResultSet = function() {};

  var Query = function() {};

  var Sort = function() {};

  var SuiteQL = function() {};

  query.prototype.Column = Column;

  query.prototype.Component = Component;

  query.prototype.Condition = Condition;

  query.prototype.Page = Page;

  query.prototype.PagedData = PagedData;

  query.prototype.PageRange = PageRange;

  query.prototype.Period = Period;

  query.prototype.RelativeDate = RelativeDate;

  query.prototype.Result = Result;

  query.prototype.ResultSet = ResultSet;

  query.prototype.Query = Query;

  query.prototype.Sort = Sort;

  query.prototype.SuiteQL = SuiteQL;

  // Method

  query.prototype.create = function(options) {};

  query.prototype.createPeriod = function(options) {};

  query.prototype.createRelativeDate = function(options) {};

  query.prototype["delete"] = function(options) {};

  query.prototype.listTables = function(options) {};

  query.prototype.load = function(options) {};

  query.prototype.load.promise = function(options) {};

  query.prototype.runSuiteQL = function(options) {};

  query.prototype.runSuiteQL.promise = function(options) {};

  query.prototype.runSuiteQLPaged = function(options) {};

  query.prototype.runSuiteQLPaged.promise = function(options) {};

  // Component Object Methods

  Component.prototype.autoJoin = function(options) {};

  Component.prototype.createColumn = function(options) {};

  Component.prototype.createCondition = function(options) {};

  Component.prototype.createSort = function(options) {};

  Component.prototype.join = function(options) {};

  Component.prototype.joinFrom = function(options) {};

  Component.prototype.joinTo = function(options) {};

  // PagedData Object Methods

  PagedData.prototype.iterator = function() {};

  // Query Object Methods

  Query.prototype.and = function(conditions) {};

  Query.prototype.autoJoin = function(options) {};

  Query.prototype.createColumn = function(options) {};

  Query.prototype.createCondition = function(options) {};

  Query.prototype.createSort = function(options) {};

  Query.prototype.join = function(options) {};

  Query.prototype.joinFrom = function(options) {};

  Query.prototype.joinTo = function(options) {};

  Query.prototype.not = function(condition) {};

  Query.prototype.or = function(conditions) {};

  Query.prototype.run = function() {};

  Query.prototype.run.promise = function() {};

  Query.prototype.runPaged = function() {};

  Query.prototype.runPaged.promise = function() {};

  Query.prototype.toSuiteQL = function() {};

  // Result Object Methods

  Result.prototype.asMap = function() {};

  // ResultSet Object Methods

  ResultSet.prototype.asMappedResults = function() {};

  ResultSet.prototype.iterator = function() {};

  // SuiteQL Object Methods

  SuiteQL.prototype.run = function() {};

  SuiteQL.prototype.runPaged = function() {};

  // Enum

  function Aggregate() {
    this.AVERAGE = "AVERAGE";
    this.AVERAGE_DISTINCT = "AVERAGE_DISTINCT";
    this.COUNT = "COUNT";
    this.COUNT_DISTINCT = "COUNT_DISTINCT";
    this.MAXIMUM = "MAXIMUM";
    this.MAXIMUM_DISTINCT = "MAXIMUM_DISTINCT";
    this.MEDIAN = "MEDIAN";
    this.MINIMUM = "MINIMUM";
    this.MINIMUM_DISTINCT = "MINIMUM_DISTINCT";
    this.SUM = "SUM";
    this.SUM_DISTINCT = "SUM_DISTINCT";
  }

  function DateId() {
    this.DAYS_AGO = "dago";
    this.DAYS_FROM_NOW = "dfn";
    this.HOURS_AGO = "hago";
    this.HOURS_FROM_NOW = "hfn";
    this.MINUTES_AGO = "nago";
    this.MINUTES_FROM_NOW = "nfn";
    this.MONTHS_AGO = "mago";
    this.MONTHS_FROM_NOW = "mfn";
    this.QUARTERS_AGO = "qago";
    this.QUARTERS_FROM_NOW = "qfn";
    this.SECONDS_AGO = "sago";
    this.SECONDS_FROM_NOW = "sfn";
    this.WEEKS_AGO = "wago";
    this.WEEKS_FROM_NOW = "wfn";
    this.YEARS_AGO = "yago";
    this.YEARS_FROM_NOW = "yfn";
  }

  function FieldContext() {
    this.CONVERTED = "CONVERTED";
    this.CURRENCY_CONSOLIDATED = "CURRENCY_CONSOLIDATED";
    this.DISPLAY = "DISPLAY";
    this.HIERARCHY = "HIERARCHY";
    this.HIERARCHY_IDENTIFIER = "HIERARCHY_IDENTIFIER";
    this.RAW = "RAW";
  }

  function Operator() {
    this.AFTER = "AFTER";
    this.AFTER_NOT = "AFTER_NOT";
    this.ANY_OF = "ANY_OF";
    this.ANY_OF_NOT = "ANY_OF_NOT";
    this.BEFORE = "BEFORE";
    this.BEFORE_NOT = "BEFORE_NOT";
    this.BETWEEN = "BETWEEN";
    this.BETWEEN_NOT = "BETWEEN_NOT";
    this.CONTAIN = "CONTAIN";
    this.CONTAIN_NOT = "CONTAIN_NOT";
    this.EMPTY = "EMPTY";
    this.EMPTY_NOT = "EMPTY_NOT";
    this.ENDWITH = "ENDWITH";
    this.ENDWITH_NOT = "ENDWITH_NOT";
    this.EQUAL = "EQUAL";
    this.EQUAL_NOT = "EQUAL_NOT";
    this.EXCLUDE_ALL = "MN_EXCLUDE";
    this.EXCLUDE_ANY = "MN_EXCLUDE_ALL";
    this.EXCLUDE_EXACTLY = "MN_EXCLUDE_EXACTLY";
    this.GREATER = "GREATER";
    this.GREATER_NOT = "GREATER_NOT";
    this.GREATER_OR_EQUAL = "GREATER_OR_EQUAL";
    this.GREATER_OR_EQUAL_NOT = "GREATER_OR_EQUAL_NOT";
    this.INCLUDE_ALL = "MN_INCLUDE_ALL";
    this.INCLUDE_ANY = "MN_INCLUDE";
    this.INCLUDE_EXACTLY = "MN_INCLUDE_EXACTLY";
    this.IS = "IS";
    this.IS_NOT = "IS_NOT";
    this.LESS = "LESS";
    this.LESS_NOT = "LESS_NOT";
    this.LESS_OR_EQUAL = "LESS_OR_EQUAL";
    this.LESS_OR_EQUAL_NOT = "LESS_OR_EQUAL_NOT";
    this.ON = "ON";
    this.ON_NOT = "ON_NOT";
    this.ON_OR_AFTER = "ON_OR_AFTER";
    this.ON_OR_AFTER_NOT = "ON_OR_AFTER_NOT";
    this.ON_OR_BEFORE = "ON_OR_BEFORE";
    this.ON_OR_BEFORE_NOT = "ON_OR_BEFORE_NOT";
    this.START_WITH = "START_WITH";
    this.START_WITH_NOT = "START_WITH_NOT";
    this.WITHIN = "WITHIN";
    this.WITHIN_NOT = "WITHIN_NOT";
  }

  function PeriodAdjustment() {
      this.ALL = "ALL";
      this.NOT_LAST = "NOT_LAST";
  }

  function PeriodCode() {
    this.FIRST_FISCAL_QUARTER_LAST_FY = "Q1LFY";
    this.FIRST_FISCAL_QUARTER_THIS_FY = "Q1TFY";
    this.FISCAL_QUARTER_BEFORE_LAST = "QBL";
    this.FISCAL_YEAR_BEFORE_LAST = "FYBL";
    this.FOURTH_FISCAL_QUARTER_LAST_FY = "Q4LFY";
    this.FOURTH_FISCAL_QUARTER_THIS_FY = "Q4TFY";
    this.LAST_FISCAL_QUARTER = "LQ";
    this.LAST_FISCAL_QUARTER_ONE_FISCAL_YEAR_AGO = "LQOLFY";
    this.LAST_FISCAL_QUARTER_TO_PERIOD = "LFQTP";
    this.LAST_FISCAL_YEAR = "LFY";
    this.LAST_FISCAL_YEAR_TO_PERIOD = "LFYTP";
    this.LAST_PERIOD = "LP";
    this.LAST_PERIOD_ONE_FISCAL_QUARTER_AGO = "LPOLQ";
    this.LAST_PERIOD_ONE_FISCAL_YEAR_AGO = "LPOLFY";
    this.LAST_ROLLING_18_PERIODS = "LR18FP";
    this.LAST_ROLLING_6_FISCAL_QUARTERS = "LR6FQ";
    this.PERIOD_BEFORE_LAST = "PBL";
    this.SAME_FISCAL_QUARTER_LAST_FY = "TQOLFY";
    this.SAME_FISCAL_QUARTER_LAST_FY_TO_PERIOD = "TFQOLFYTP";
    this.SAME_PERIOD_LAST_FY = "TPOLFY";
    this.SAME_PERIOD_LAST_FISCAL_QUARTER = "TPOLQ";
    this.SECOND_FISCAL_QUARTER_LAST_FY = "Q2LFY";
    this.SECOND_FISCAL_QUARTER_THIS_FY = "Q2TFY";
    this.THIRD_FISCAL_QUARTER_LAST_FY = "Q3LFY";
    this.THIRD_FISCAL_QUARTER_THIS_FY = "Q3TFY";
    this.THIS_FISCAL_QUARTER = "TQ";
    this.THIS_FISCAL_QUARTER_TO_PERIOD = "TFQTP";
    this.THIS_FISCAL_YEAR = "TFY";
    this.THIS_FISCAL_YEAR_TO_PERIOD = "TFYTP";
    this.THIS_PERIOD = "TP";
  }

  function PeriodType() {
    this.END = "END";
    this.START = "START";
  }

  function RelativeDateRange() {
    this.FISCAL_HALF_BEFORE_LAST = "FHBL";
    this.FISCAL_HALF_BEFORE_LAST_TO_DATE = "FHBLTD";
    this.FISCAL_QUARTER_BEFORE_LAST = "FQBL";
    this.FISCAL_QUARTER_BEFORE_LAST_TO_DATE = "FQBLTD";
    this.FISCAL_YEAR_BEFORE_LAST = "FYBL";
    this.FISCAL_YEAR_BEFORE_LAST_TO_DATE = "FYBLTD";
    this.FIVE_DAYS_AGO = "DAGO5";
    this.FIVE_DAYS_FROM_NOW = "DFN5";
    this.FOUR_DAYS_AGO = "DAGO4";
    this.FOUR_DAYS_FROM_NOW = "DFN4";
    this.FOUR_WEEKS_STARTING_THIS_WEEK = "TWN3W";
    this.LAST_BUSINESS_WEEK = "LBW";
    this.LAST_FISCAL_HALF = "LFH";
    this.LAST_FISCAL_HALF_ONE_FISCAL_YEAR_AGO = "LFHLFY";
    this.LAST_FISCAL_HALF_TO_DATE = "LFHTD";
    this.LAST_FISCAL_QUARTER = "LFQ";
    this.LAST_FISCAL_QUARTER_ONE_FISCAL_YEAR_AGO = "LFQLFY";
    this.LAST_FISCAL_QUARTER_TO_DATE = "LFQTD";
    this.LAST_FISCAL_QUARTER_TWO_FISCAL_YEARS_AGO = "LFQFYBL";
    this.LAST_FISCAL_YEAR = "LFY";
    this.LAST_FISCAL_YEAR_TO_DATE = "LFYTD";
    this.LAST_MONTH = "LM";
    this.LAST_MONTH_ONE_FISCAL_QUARTER_AGO = "LMLFQ";
    this.LAST_MONTH_ONE_FISCAL_YEAR_AGO = "LMLFY";
    this.LAST_MONTH_TO_DATE = "LMTD";
    this.LAST_MONTH_TWO_FISCAL_QUARTERS_AGO = "LMFQBL";
    this.LAST_MONTH_TWO_FISCAL_YEARS_AGO = "LMFYBL";
    this.LAST_ROLLING_HALF = "LRH";
    this.LAST_ROLLING_QUARTER = "LRQ";
    this.LAST_ROLLING_YEAR = "LRY";
    this.LAST_WEEK = "LW";
    this.LAST_WEEK_TO_DATE = "LWTD";
    this.LAST_YEAR = "LY";
    this.LAST_YEAR_TO_DATE = "LYTD";
    this.MONTH_AFTER_NEXT = "MAN";
    this.MONTH_AFTER_NEXT_TO_DATE = "MANTD";
    this.MONTH_BEFORE_LAST = "MBL";
    this.MONTH_BEFORE_LAST_TO_DATE = "MBLTD";
    this.NEXT_BUSINESS_WEEK = "NBW";
    this.NEXT_FISCAL_HALF = "NFH";
    this.NEXT_FISCAL_QUARTER = "NFQ";
    this.NEXT_FISCAL_YEAR = "NFY";
    this.NEXT_FOUR_WEEKS = "N4W";
    this.NEXT_MONTH = "NM";
    this.NEXT_ONE_HALF = "NOH";
    this.NEXT_ONE_MONTH = "NOM";
    this.NEXT_ONE_QUARTER = "NOQ";
    this.NEXT_ONE_WEEK = "NOW";
    this.NEXT_ONE_YEAR = "NOY";
    this.NEXT_WEEK = "NW";
    this.NINETY_DAYS_AGO = "DAGO90";
    this.NINETY_DAYS_FROM_NOW = "DFN90";
    this.ONE_YEAR_BEFORE_LAST = "OYBL";
    this.PREVIOUS_FISCAL_QUARTERS_LAST_FISCAL_YEAR = "PQLFY";
    this.PREVIOUS_FISCAL_QUARTERS_THIS_FISCAL_YEAR = "PQTFY";
    this.PREVIOUS_MONTHS_LAST_FISCAL_HALF = "PMLFH";
    this.PREVIOUS_MONTHS_LAST_FISCAL_QUARTER = "PMLFQ";
    this.PREVIOUS_MONTHS_LAST_FISCAL_YEAR = "PMLFY";
    this.PREVIOUS_MONTHS_SAME_FISCAL_HALF_LAST_FISCAL_YEAR = "PMSFHLFY";
    this.PREVIOUS_MONTHS_SAME_FISCAL_QUARTER_LAST_FISCAL_YEAR = "PMSFQLFY";
    this.PREVIOUS_MONTHS_THIS_FISCAL_HALF = "PMTFH";
    this.PREVIOUS_MONTHS_THIS_FISCAL_QUARTER = "PMTFQ";
    this.PREVIOUS_MONTHS_THIS_FISCAL_YEAR = "PMTFY";
    this.PREVIOUS_ONE_DAY = "OD";
    this.PREVIOUS_ONE_HALF = "OH";
    this.PREVIOUS_ONE_MONTH = "OM";
    this.PREVIOUS_ONE_QUARTER = "OQ";
    this.PREVIOUS_ONE_WEEK = "OW";
    this.PREVIOUS_ONE_YEAR = "OY";
    this.PREVIOUS_ROLLING_HALF = "PRH";
    this.PREVIOUS_ROLLING_QUARTER = "PRQ";
    this.PREVIOUS_ROLLING_YEAR = "PRY";
    this.SAME_DAY_FISCAL_QUARTER_BEFORE_LAST = "SDFQBL";
    this.SAME_DAY_FISCAL_YEAR_BEFORE_LAST = "SDFYBL";
    this.SAME_DAY_LAST_FISCAL_QUARTER = "SDLFQ";
    this.SAME_DAY_LAST_FISCAL_YEAR = "SDLFY";
    this.SAME_DAY_LAST_MONTH = "SDLM";
    this.SAME_DAY_LAST_WEEK = "SDLW";
    this.SAME_DAY_MONTH_BEFORE_LAST = "SDMBL";
    this.SAME_DAY_WEEK_BEFORE_LAST = "SDWBL";
    this.SAME_FISCAL_HALF_LAST_FISCAL_YEAR = "SFHLFY";
    this.SAME_FISCAL_HALF_LAST_FISCAL_YEAR_TO_DATE = "SFHLFYTD";
    this.SAME_FISCAL_QUARTER_FISCAL_YEAR_BEFORE_LAST = "SFQFYBL";
    this.SAME_FISCAL_QUARTER_LAST_FISCAL_YEAR = "SFQLFY";
    this.SAME_FISCAL_QUARTER_LAST_FISCAL_YEAR_TO_DATE = "SFQLFYTD";
    this.SAME_MONTH_FISCAL_QUARTER_BEFORE_LAST = "SMFQBL";
    this.SAME_MONTH_FISCAL_YEAR_BEFORE_LAST = "SMFYBL";
    this.SAME_MONTH_LAST_FISCAL_QUARTER = "SMLFQ";
    this.SAME_MONTH_LAST_FISCAL_QUARTER_TO_DATE = "SMLFQTD";
    this.SAME_MONTH_LAST_FISCAL_YEAR = "SMLFY";
    this.SAME_MONTH_LAST_FISCAL_YEAR_TO_DATE = "SMLFYTD";
    this.SAME_WEEK_FISCAL_YEAR_BEFORE_LAST = "SWFYBL";
    this.SAME_WEEK_LAST_FISCAL_YEAR = "SWLFY";
    this.SIXTY_DAYS_AGO = "DAGO60";
    this.SIXTY_DAYS_FROM_NOW = "DFN60";
    this.TEN_DAYS_AGO = "DAGO10";
    this.TEN_DAYS_FROM_NOW = "DFN10";
    this.THIRTY_DAYS_AGO = "DAGO30";
    this.THIRTY_DAYS_FROM_NOW = "DFN30";
    this.THIS_BUSINESS_WEEK = "TBW";
    this.THIS_FISCAL_HALF = "TFH";
    this.THIS_FISCAL_HALF_TO_DATE = "TFHTD";
    this.THIS_FISCAL_QUARTER = "TFQ";
    this.THIS_FISCAL_QUARTER_TO_DATE = "TFQTD";
    this.THIS_FISCAL_YEAR = "TFY";
    this.THIS_FISCAL_YEAR_TO_DATE = "TFYTD";
    this.THIS_MONTH = "TM";
    this.THIS_MONTH_TO_DATE = "TMTD";
    this.THIS_ROLLING_HALF = "TRH";
    this.THIS_ROLLING_QUARTER = "TRQ";
    this.THIS_ROLLING_YEAR = "TRY";
    this.THIS_WEEK = "TW";
    this.THIS_WEEK_TO_DATE = "TWTD";
    this.THIS_YEAR = "TY";
    this.THIS_YEAR_TO_DATE = "TYTD";
    this.THREE_DAYS_AGO = "DAGO3";
    this.THREE_DAYS_FROM_NOW = "DFN3";
    this.THREE_FISCAL_QUARTERS_AGO = "FQB";
    this.THREE_FISCAL_QUARTERS_AGO_TO_DATE = "FQBTD";
    this.THREE_FISCAL_YEARS_AGO = "FYB";
    this.THREE_FISCAL_YEARS_AGO_TO_DATE = "FYBTD";
    this.THREE_MONTHS_AGO = "MB";
    this.THREE_MONTHS_AGO_TO_DATE = "MBTD";
    this.TODAY = "TODAY";
    this.TODAY_TO_END_OF_THIS_MONTH = "TODAYTTM";
    this.TOMORROW = "TOMORROW";
    this.TWO_DAYS_AGO = "DAGO2";
    this.TWO_DAYS_FROM_NOW = "DFN2";
    this.WEEK_AFTER_NEXT = "WAN";
    this.WEEK_AFTER_NEXT_TO_DATE = "WANTD";
    this.WEEK_BEFORE_LAST = "WBL";
    this.WEEK_BEFORE_LAST_TO_DATE = "WBLTD";
    this.YESTERDAY = "YESTERDAY";
  }

  function ReturnType() {
    this.ANY = "ANY";
    this.BOOLEAN = "BOOLEAN";
    this.CLOBTEXT = "CLOBTEXT";
    this.CURRENCY = "CURRENCY";
    this.DATE = "DATE";
    this.DATETIME = "DATETIME";
    this.DURATION = "DURATION";
    this.FLOAT = "FLOAT";
    this.INTEGER = "INTEGER";
    this.KEY = "KEY";
    this.PERCENT = "PERCENT";
    this.RELATIONSHIP = "RELATIONSHIP";
    this.STRING = "STRING";
    this.UNKNOWN = "UNKNOWN";
  }

  function SortLocale() {
    this.ARABIC = "ARABIC";
    this.ARABIC_ABJ_MATCH = "ARABIC_ABJ_MATCH";
    this.ARABIC_ABJ_MATCH_CI = "ARABIC_ABJ_MATCH_CI";
    this.ARABIC_ABJ_SORT = "ARABIC_ABJ_SORT";
    this.ARABIC_ABJ_SORT_CI = "ARABIC_ABJ_SORT_CI";
    this.ARABIC_CI = "ARABIC_CI";
    this.ARABIC_MATCH = "ARABIC_MATCH";
    this.ARABIC_MATCH_CI = "ARABIC_MATCH_CI";
    this.ASCII7 = "ASCII7";
    this.ASCII7_CI = "ASCII7_CI";
    this.AZERBAIJANI = "AZERBAIJANI";
    this.AZERBAIJANI_CI = "AZERBAIJANI_CI";
    this.BENGALI = "BENGALI";
    this.BENGALI_CI = "BENGALI_CI";
    this.BIG5 = "BIG5";
    this.BIG5_CI = "BIG5_CI";
    this.BINARY = "BINARY";
    this.BINARY_CI = "BINARY_CI";
    this.BULGARIAN = "BULGARIAN";
    this.BULGARIAN_CI = "BULGARIAN_CI";
    this.CANADIAN_M = "CANADIAN_M";
    this.CATALAN = "CATALAN";
    this.CATALAN_CI = "CATALAN_CI";
    this.CROATIAN = "CROATIAN";
    this.CROATIAN_CI = "CROATIAN_CI";
    this.CS_CZ = "CS_CZ";
    this.CZECH = "CZECH";
    this.CZECH_CI = "CZECH_CI";
    this.CZECH_PUNCTUATION = "CZECH_PUNCTUATION";
    this.CZECH_PUNCTUATION_CI = "CZECH_PUNCTUATION_CI";
    this.DANISH = "DANISH";
    this.DANISH_CI = "DANISH_CI";
    this.DANISH_M = "DANISH_M";
    this.DA_DK = "DA_DK";
    this.DE_DE = "DE_DE";
    this.DUTCH = "DUTCH";
    this.DUTCH_CI = "DUTCH_CI";
    this.EBCDIC = "EBCDIC";
    this.EBCDIC_CI = "EBCDIC_CI";
    this.EEC_EURO = "EEC_EURO";
    this.EEC_EUROPA3 = "EEC_EUROPA3";
    this.EEC_EUROPA3_CI = "EEC_EUROPA3_CI";
    this.EEC_EURO_CI = "EEC_EURO_CI";
    this.EN = "EN";
    this.EN_AU = "EN_AU";
    this.EN_CA = "EN_CA";
    this.EN_GB = "EN_GB";
    this.EN_US = "EN_US";
    this.ESTONIAN = "ESTONIAN";
    this.ESTONIAN_CI = "ESTONIAN_CI";
    this.ES_AR = "ES_AR";
    this.ES_ES = "ES_ES";
    this.FINNISH = "FINNISH";
    this.FINNISH_CI = "FINNISH_CI";
    this.FI_FI = "FI_FI";
    this.FRENCH = "FRENCH";
    this.FRENCH_AI = "FRENCH_AI";
    this.FRENCH_CI = "FRENCH_CI";
    this.FRENCH_M = "FRENCH_M";
    this.FR_CA = "FR_CA";
    this.FR_FR = "FR_FR";
    this.GBK = "GBK";
    this.GBK_AI = "GBK_AI";
    this.GBK_CI = "GBK_CI";
    this.GENERIC_M = "GENERIC_M";
    this.GERMAN = "GERMAN";
    this.GERMAN_AI = "GERMAN_AI";
    this.GERMAN_CI = "GERMAN_CI";
    this.GERMAN_DIN = "GERMAN_DIN";
    this.GERMAN_DIN_AI = "GERMAN_DIN_AI";
    this.GERMAN_DIN_CI = "GERMAN_DIN_CI";
    this.GREEK = "GREEK";
    this.GREEK_AI = "GREEK_AI";
    this.GREEK_CI = "GREEK_CI";
    this.HEBREW = "HEBREW";
    this.HEBREW_AI = "HEBREW_AI";
    this.HEBREW_CI = "HEBREW_CI";
    this.HE_IL = "HE_IL";
    this.HKSCS = "HKSCS";
    this.HKSCS_AI = "HKSCS_AI";
    this.HKSCS_CI = "HKSCS_CI";
    this.HUNGARIAN = "HUNGARIAN";
    this.HUNGARIAN_AI = "HUNGARIAN_AI";
    this.HUNGARIAN_CI = "HUNGARIAN_CI";
    this.ICELANDIC = "ICELANDIC";
    this.ICELANDIC_AI = "ICELANDIC_AI";
    this.ICELANDIC_CI = "ICELANDIC_CI";
    this.ID_ID = "ID_ID";
    this.INDONESIAN = "INDONESIAN";
    this.INDONESIAN_AI = "INDONESIAN_AI";
    this.INDONESIAN_CI = "INDONESIAN_CI";
    this.ITALIAN = "ITALIAN";
    this.ITALIAN_AI = "ITALIAN_AI";
    this.ITALIAN_CI = "ITALIAN_CI";
    this.IT_IT = "IT_IT";
    this.JAPANESE_M = "JAPANESE_M";
    this.JA_JP = "JA_JP";
    this.KOREAN_M = "KOREAN_M";
    this.KO_KR = "KO_KR";
    this.LATIN = "LATIN";
    this.LATIN_AI = "LATIN_AI";
    this.LATIN_CI = "LATIN_CI";
    this.LATVIAN = "LATVIAN";
    this.LATVIAN_AI = "LATVIAN_AI";
    this.LATVIAN_CI = "LATVIAN_CI";
    this.LITHUANIAN = "LITHUANIAN";
    this.LITHUANIAN_AI = "LITHUANIAN_AI";
    this.LITHUANIAN_CI = "LITHUANIAN_CI";
    this.MALAY = "MALAY";
    this.MALAY_AI = "MALAY_AI";
    this.MALAY_CI = "MALAY_CI";
    this.NL_NL = "NL_NL";
    this.NO_NO = "NO_NO";
    this.NORWEGIAN = "NORWEGIAN";
    this.NORWEGIAN_AI = "NORWEGIAN_AI";
    this.NORWEGIAN_CI = "NORWEGIAN_CI";
    this.POLISH = "POLISH";
    this.POLISH_AI = "POLISH_AI";
    this.POLISH_CI = "POLISH_CI";
    this.PT_BR = "PT_BR";
    this.PUNCTUATION = "PUNCTUATION";
    this.PUNCTUATION_AI = "PUNCTUATION_AI";
    this.PUNCTUATION_CI = "PUNCTUATION_CI";
    this.ROMANIAN = "ROMANIAN";
    this.ROMANIAN_AI = "ROMANIAN_AI";
    this.ROMANIAN_CI = "ROMANIAN_CI";
    this.RUSSIAN = "RUSSIAN";
    this.RUSSIAN_AI = "RUSSIAN_AI";
    this.RUSSIAN_CI = "RUSSIAN_CI";
    this.RU_RU = "RU_RU";
    this.SCHINESE_PINYIN_M = "SCHINESE_PINYIN_M";
    this.SCHINESE_RADICAL_M = "SCHINESE_RADICAL_M";
    this.SCHINESE_STROKE_M = "SCHINESE_STROKE_M";
    this.SLOVAK = "SLOVAK";
    this.SLOVAK_AI = "SLOVAK_AI";
    this.SLOVAK_CI = "SLOVAK_CI";
    this.SLOVENIAN = "SLOVENIAN";
    this.SLOVENIAN_AI = "SLOVENIAN_AI";
    this.SLOVENIAN_CI = "SLOVENIAN_CI";
    this.SPANISH = "SPANISH";
    this.SPANISH_AI = "SPANISH_AI";
    this.SPANISH_CI = "SPANISH_CI";
    this.SPANISH_M = "SPANISH_M";
    this.SV_SE = "SV_SE";
    this.SWEDISH = "SWEDISH";
    this.SWEDISH_AI = "SWEDISH_AI";
    this.SWEDISH_CI = "SWEDISH_CI";
    this.SWISS = "SWISS";
    this.SWISS_AI = "SWISS_AI";
    this.SWISS_CI = "SWISS_CI";
    this.TCHINESE_RADICAL_M = "TCHINESE_RADICAL_M";
    this.TCHINESE_STROKE_M = "TCHINESE_STROKE_M";
    this.THAI_M = "THAI_M";
    this.TH_TH = "TH_TH";
    this.TR_TR = "TR_TR";
    this.TURKISH = "TURKISH";
    this.TURKISH_AI = "TURKISH_AI";
    this.TURKISH_CI = "TURKISH_CI";
    this.UKRAINIAN = "UKRAINIAN";
    this.UKRAINIAN_AI = "UKRAINIAN_AI";
    this.UKRAINIAN_CI = "UKRAINIAN_CI";
    this.UNICODE_BINARY = "UNICODE_BINARY";
    this.UNICODE_BINARY_AI = "UNICODE_BINARY_AI";
    this.UNICODE_BINARY_CI = "UNICODE_BINARY_CI";
    this.VIETNAMESE = "VIETNAMESE";
    this.VIETNAMESE_AI = "VIETNAMESE_AI";
    this.VIETNAMESE_CI = "VIETNAMESE_CI";
    this.VN_VN = "VN_VN";
    this.WEST_EUROPEAN = "WEST_EUROPEAN";
    this.WEST_EUROPEAN_AI = "WEST_EUROPEAN_AI";
    this.WEST_EUROPEAN_CI = "WEST_EUROPEAN_CI";
    this.ZH_CN = "ZH_CN";
    this.ZH_TW = "ZH_TW";
  }

  function Type() {
    this.ACCOUNT = "account";
    this.ACCOUNTING_BOOK = "accountingbook";
    this.ACCOUNTING_CONTEXT = "accountingcontext";
    this.ACCOUNTING_PERIOD = "accountingperiod";
    this.ALLOCATION_METHOD = "allocationmethod";
    this.ALL_PARSER_PLUGIN = "allparserplugin";
    this.AMORTIZATION_SCHEDULE = "amortizationschedule";
    this.AMORTIZATION_TEMPLATE = "amortizationtemplate";
    this.AUTHORIZATION_CONSENT = "authorizationconsent";
    this.BILLING_CLASS = "billingclass";
    this.BILLING_RATE_CARD = "billingratecard";
    this.BILLING_SCHEDULE = "billingschedule";
    this.BILL_OF_DISTRIBUTION = "billofdistribution";
    this.BILL_RUN = "billrun";
    this.BILL_RUN_SCHEDULE = "billrunschedule";
    this.BIN = "bin";
    this.BOM = "bom";
    this.BOM_REVISION = "bomrevision";
    this.BOM_REVISION_COMPONENT = "bomrevisioncomponent";
    this.BUDGETCATEGORY = "budgetcategory";
    this.BUDGETS = "budgets";
    this.BUDGET_EXCHANGE_RATE = "budgetexchangerate";
    this.BULK_PROC_SUBMISSION = "bulkprocsubmission";
    this.BUNDLE_INSTALLATION_SCRIPT = "bundleinstallationscript";
    this.BUNDLE_INSTALLATION_SCRIPT_DEPLOYMENT = "bundleinstallationscriptdeployment";
    this.BUSINESS_EVENTS_PROCESSING_HISTORY = "businesseventsprocessinghistory";
    this.CALENDAR_EVENT = "calendarevent";
    this.CAMPAIGN_AUDIENCE = "campaignaudience";
    this.CAMPAIGN_CATEGORY = "campaigncategory";
    this.CAMPAIGN_CHANNEL = "campaignchannel";
    this.CAMPAIGN_EMAIL_ADDRESS = "campaignemailaddress";
    this.CAMPAIGN_EVENT = "campaignevent";
    this.CAMPAIGN_FAMILY = "campaignfamily";
    this.CAMPAIGN_OFFER = "campaignoffer";
    this.CAMPAIGN_RESPONSE = "campaignresponse";
    this.CAMPAIGN_SEARCH_ENGINE = "campaignsearchengine";
    this.CAMPAIGN_SUBSCRIPTION = "campaignsubscription";
    this.CAMPAIGN_TEMPLATE = "campaigntemplate";
    this.CAMPAIGN_VERTICAL = "campaignvertical";
    this.CARDHOLDER_AUTHENTICATION = "cardholderauthentication";
    this.CARDHOLDER_AUTHENTICATION_EVENT = "cardholderauthenticationevent";
    this.CATEGORY1099MISC = "category1099misc";
    this.CHARGE = "charge";
    this.CHARGE_RULE = "chargerule";
    this.CHARGE_RUN = "chargerun";
    this.CHARGE_TYPE = "chargetype";
    this.CLASSIFICATION = "classification";
    this.CLIENT_SCRIPT = "clientscript";
    this.CLIENT_SCRIPT_DEPLOYMENT = "clientscriptdeployment";
    this.COMPETITOR = "competitor";
    this.CONSOLIDATED_EXCHANGE_RATE = "consolidatedexchangerate";
    this.CONSOLIDATED_RATE_ADJUSTOR_PLUGIN = "consolidatedrateadjustorplugin";
    this.CONTACT = "contact";
    this.CONTACT_CATEGORY = "contactcategory";
    this.CONTACT_ROLE = "contactrole";
    this.CONTACT_SUBSIDIARY_RELATIONSHIP = "contactsubsidiaryrelationship";
    this.COST_CATEGORY = "costcategory";
    this.COUPON_CODE = "couponcode";
    this.CURRENCY = "currency";
    this.CURRENCY_RATE = "currencyrate";
    this.CUSTOMER = "customer";
    this.CUSTOMER_CATEGORY = "customercategory";
    this.CUSTOMER_MESSAGE = "customermessage";
    this.CUSTOMER_SEGMENT = "customersegment";
    this.CUSTOMER_SUBSIDIARY_RELATIONSHIP = "customersubsidiaryrelationship";
    this.CUSTOM_FIELD = "customfield";
    this.CUSTOM_FIELD_2 = "customfield2";
    this.CUSTOM_GL_PLUGIN = "customglplugin";
    this.CUSTOM_LIST = "customlist";
    this.CUSTOM_RECORD_ACTION_SCRIPT = "customrecordactionscript";
    this.CUSTOM_RECORD_TYPE = "customrecordtype";
    this.CUSTOM_SEGMENT = "customsegment";
    this.CUSTOM_TRANSACTION_TYPE = "customtransactiontype";
    this.DATASET_BUILDER_PLUGIN = "datasetbuilderplugin";
    this.DELETED_RECORD = "deletedrecord";
    this.DEPARTMENT = "department";
    this.DEVICE_ID = "deviceid";
    this.DISTRIBUTION_CATEGORY = "distributioncategory";
    this.DISTRIBUTION_NETWORK = "distributionnetwork";
    this.DOMAIN = "domain";
    this.DUAL = "dual";
    this.EMAIL_CAPTURE_PLUGIN = "emailcaptureplugin";
    this.EMAIL_TEMPLATE = "emailtemplate";
    this.EMPLOYEE = "employee";
    this.EMPLOYEE_LIST = "employeelist";
    this.EMPLOYEE_STATUS = "employeestatus";
    this.EMPLOYEE_SUBSIDIARY_RELATIONSHIP = "employeesubsidiaryrelationship";
    this.EMPLOYEE_TYPE = "employeetype";
    this.ENTITY = "entity";
    this.ENTITY_GROUP = "entitygroup";
    this.ENTITY_SUBSIDIARY_RELATIONSHIP = "entitysubsidiaryrelationship";
    this.EXPENSE_CATEGORY = "expensecategory";
    this.EXPENSE_REPORT_POLICY = "expensereportpolicy";
    this.FAX_TEMPLATE = "faxtemplate";
    this.FILE = "file";
    this.FISCAL_CALENDAR = "fiscalcalendar";
    this.FI_CONNECTIVITY_PLUGIN = "ficonnectivityplugin";
    this.FORECAST = "forecast";
    this.FULFILLMENT_EXCEPTION_REASON = "fulfillmentexceptionreason";
    this.FULFILLMENT_REQUEST = "fulfillmentrequest";
    this.F_I_PARSER_PLUGIN = "fiparserplugin";
    this.GATEWAY_NOTIFICATION = "gatewaynotification";
    this.GENERAL_ALLOCATION_SCHEDULE = "generalallocationschedule";
    this.GENERAL_TOKEN = "generaltoken";
    this.GENERIC_RESOURCE = "genericresource";
    this.GENERIC_RESOURCE_SUBSIDIARY_RELATIONSHIP = "genericresourcesubsidiaryrelationship";
    this.GIFT_CERTIFICATE = "giftcertificate";
    this.GLOBAL_ACCOUNT_MAPPING = "globalaccountmapping";
    this.GLOBAL_INVENTORY_RELATIONSHIP = "globalinventoryrelationship";
    this.GL_LINES_AUDIT_LOG = "gllinesauditlog";
    this.GL_LINES_PLUGIN_REVISION = "gllinespluginrevision";
    this.G_L_NUMBERING_SEQUENCE = "glnumberingsequence";
    this.IMPORTED_EMPLOYEE_EXPENSE = "importedemployeeexpense";
    this.INBOUND_SHIPMENT = "inboundshipment";
    this.INCO_TERM = "incoterm";
    this.INVENTORY_COST_TEMPLATE = "inventorycosttemplate";
    this.INVENTORY_NUMBER = "inventorynumber";
    this.INVENTORY_STATUS = "inventorystatus";
    this.INVT_ITEM_PRICE_HISTORY = "invtitempricehistory";
    this.ISSUE = "issue";
    this.ITEM = "item";
    this.ITEM_ACCOUNT_MAPPING = "itemaccountmapping";
    this.ITEM_COLLECTION = "itemcollection";
    this.ITEM_DEMAND_PLAN = "itemdemandplan";
    this.ITEM_LOCATION_CONFIGURATION = "itemlocationconfiguration";
    this.ITEM_SEGMENT_INCLUDING_SYNTHETIC = "itemsegmentincludingsynthetic";
    this.ITEM_SUPPLY_PLAN = "itemsupplyplan";
    this.I_P_RESTRICTIONS = "iprestrictions";
    this.JOB = "job";
    this.JOB_RESOURCE_ROLE = "jobresourcerole";
    this.JOB_STATUS = "jobstatus";
    this.JOB_TYPE = "jobtype";
    this.KNOWLEDGE_BASE = "knowledgebase";
    this.LOCATION = "location";
    this.LOCATION_COSTING_GROUP = "locationcostinggroup";
    this.LOGIN_AUDIT = "loginaudit";
    this.MAIL_TEMPLATE = "mailtemplate";
    this.MANUFACTURING_COMPONENT = "manufacturingcomponent";
    this.MANUFACTURING_COST_TEMPLATE = "manufacturingcosttemplate";
    this.MANUFACTURING_OPERATION_TASK = "manufacturingoperationtask";
    this.MANUFACTURING_ROUTING = "manufacturingrouting";
    this.MANUFACTURING_TRANSACTION = "manufacturingtransaction";
    this.MAP_REDUCE_SCRIPT = "mapreducescript";
    this.MAP_REDUCE_SCRIPT_DEPLOYMENT = "mapreducescriptdeployment";
    this.MASS_UPDATE_SCRIPT = "massupdatescript";
    this.MASS_UPDATE_SCRIPT_DEPLOYMENT = "massupdatescriptdeployment";
    this.MEDIA_ITEM_FOLDER = "mediaitemfolder";
    this.MEM_DOC = "memdoc";
    this.MEM_DOC_TRANSACTION_TEMPLATE = "memdoctransactiontemplate";
    this.MERCHANDISE_HIERARCHY_LEVEL = "merchandisehierarchylevel";
    this.MERCHANDISE_HIERARCHY_NODE = "merchandisehierarchynode";
    this.MERCHANDISE_HIERARCHY_VERSION = "merchandisehierarchyversion";
    this.MESSAGE = "message";
    this.MFG_PLANNED_TIME = "mfgplannedtime";
    this.NEXUS = "nexus";
    this.NOTE = "note";
    this.ONLINE_CASE_FORM = "onlinecaseform";
    this.ONLINE_FORM_TEMPLATE = "onlineformtemplate";
    this.ONLINE_LEAD_FORM = "onlineleadform";
    this.ORDER_ALLOCATION_STRATEGY = "orderallocationstrategy";
    this.OTHER_NAME = "othername";
    this.OTHER_NAME_CATEGORY = "othernamecategory";
    this.OTHER_NAME_SUBSIDIARY_RELATIONSHIP = "othernamesubsidiaryrelationship";
    this.OUTBOUND_REQUEST = "outboundrequest";
    this.O_AUTH_TOKEN = "oauthtoken";
    this.PARTNER = "partner";
    this.PARTNER_SUBSIDIARY_RELATIONSHIP = "partnersubsidiaryrelationship";
    this.PAYCHECK = "paycheck";
    this.PAYMENT_CARD = "paymentcard";
    this.PAYMENT_CARD_SEARCH_RECORD = "paymentcardsearchrecord";
    this.PAYMENT_CARD_TOKEN = "paymentcardtoken";
    this.PAYMENT_EVENT = "paymentevent";
    this.PAYMENT_GATEWAY_PLUGIN = "paymentgatewayplugin";
    this.PAYMENT_INSTRUMENT = "paymentinstrument";
    this.PAYMENT_METHOD = "paymentmethod";
    this.PAYMENT_PROCESSING_PROFILE = "paymentprocessingprofile";
    this.PAYMENT_RESULT_PREVIEW = "aymentresultpreview";
    this.PAYROLL_BATCH = "payrollbatch";
    this.PAYROLL_ITEM = "payrollitem";
    this.PDF_TEMPLATE = "pdftemplate";
    this.PHONE_CALL = "phonecall";
    this.PLANNED_ORDER = "plannedorder";
    this.PLANNED_STANDARD_COST = "plannedstandardcost";
    this.PLANNING_ITEM_CATEGORY = "planningitemcategory";
    this.PLANNING_ITEM_GROUP = "planningitemgroup";
    this.PLANNING_ITEM_GROUP_SOURCE = "planningitemgroupsource";
    this.PLANNING_RULE_GROUP = "planningrulegroup";
    this.PLATFORM_EXTENSION_PLUGIN = "platformextensionplugin";
    this.PLUG_IN_TYPE = "plugintype";
    this.PLUG_IN_TYPE_IMPL = "plugintypeimpl";
    this.PORTLET = "portlet";
    this.PORTLET_DEPLOYMENT = "portletdeployment";
    this.PREDICTED_RISK_TRAIN_EVAL_HISTORY = "predictedrisktrainevalhistory";
    this.PRICE_LEVEL = "pricelevel";
    this.PRICING = "pricing";
    this.PRICING_GROUP = "pricinggroup";
    this.PRICING_WITH_CUSTOMERS = "pricingwithcustomers";
    this.PROJECT_BUDGET = "projectbudget";
    this.PROJECT_EXPENSE_TYPE = "projectexpensetype";
    this.PROJECT_FINANCIALS = "projectfinancials";
    this.PROJECT_SUBSIDIARY_RELATIONSHIP = "projectsubsidiaryrelationship";
    this.PROJECT_TASK = "projecttask";
    this.PROJECT_TEMPLATE = "projecttemplate";
    this.PROJECT_TEMPLATE_SUBSIDIARY_RELATIONSHIP = "projecttemplatesubsidiaryrelationship";
    this.PROMOTIONS_PLUGIN = "promotionsplugin";
    this.PROMOTION_CODE = "promotioncode";
    this.PUBLISHED_SAVED_SEARCH = "publishedsavedsearch";
    this.QUANTITY_PRICING_SCHEDULE = "quantitypricingschedule";
    this.QUOTA = "quota";
    this.RECENT_RECORD = "recentrecord";
    this.RECORD_ACTION_SCRIPT_DEPLOYMENT = "recordactionscriptdeployment";
    this.REDIRECT = "redirect";
    this.RESOURCE_ALLOCATION = "resourceallocation";
    this.RESOURCE_GROUP = "resourcegroup";
    this.RESTLET = "restlet";
    this.RESTLET_DEPLOYMENT = "restletdeployment";
    this.REV_REC_SCHEDULE = "revrecschedule";
    this.REV_REC_TEMPLATE = "revrectemplate";
    this.ROLE = "role";
    this.SALES_INVOICED = "salesinvoiced";
    this.SALES_ORDERED = "salesordered";
    this.SALES_TAX_ITEM = "salestaxitem";
    this.SCHEDULED_SCRIPT = "scheduledscript";
    this.SCHEDULED_SCRIPT_DEPLOYMENT = "scheduledscriptdeployment";
    this.SCHEDULED_SCRIPT_INSTANCE = "scheduledscriptinstance";
    this.SCRIPT = "script";
    this.SCRIPT_CUSTOM_RECORD_TYPE = "scriptcustomrecordtype";
    this.SCRIPT_DEPLOYMENT = "scriptdeployment";
    this.SCRIPT_NOTE = "scriptnote";
    this.SCRIPT_RECORD_TYPE = "scriptrecordtype";
    this.SEARCH_CAMPAIGN = "searchcampaign";
    this.SENT_EMAIL = "sentemail";
    this.SHIPPING_PACKAGE = "shippingpackage";
    this.SHIPPING_PARTNERS_PLUGIN = "shippingpartnersplugin";
    this.SHIPPING_PARTNER_REGISTRATION = "shippingpartnerregistration";
    this.SHIP_ITEM = "shipitem";
    this.SHOPPING_CART = "shoppingcart";
    this.SITE_CATEGORY = "sitecategory";
    this.SOLUTION = "solution";
    this.STANDARD_COST_VERSION = "standardcostversion";
    this.STATISTICAL_JOURNAL_ENTRY = "statisticaljournalentry";
    this.STATISTICAL_SCHEDULE = "statisticalschedule";
    this.STORE_PICKUP_FULFILLMENT = "storepickupfulfillment";
    this.STORE_TAB = "storetab";
    this.SUBLIST = "sublist";
    this.SUBSIDIARY = "subsidiary";
    this.SUBSIDIARY_SETTINGS = "subsidiarysettings";
    this.SUITELET = "suitelet";
    this.SUITELET_DEPLOYMENT = "suiteletdeployment";
    this.SUITE_SCRIPT_DETAIL = "suitescriptdetail";
    this.SUPPLY_CHAIN_SNAPSHOT = "supplychainsnapshot";
    this.SUPPLY_CHAIN_SNAPSHOT_SIMULATION = "supplychainsnapshotsimulation";
    this.SUPPLY_CHANGE_ORDER = "supplychangeorder";
    this.SUPPLY_PLAN_DEFINITION = "supplyplandefinition";
    this.SUPPORT_CASE = "supportcase";
    this.SYSTEM_EMAIL_TEMPLATE = "systememailtemplate";
    this.SYSTEM_NOTE = "systemnote";
    this.SYSTEM_NOTE2 = "systemnote2";
    this.SYSTEM_NOTE_FIELD = "systemnotefield";
    this.TAG = "tag";
    this.TASK = "task";
    this.TASK_ITEM_STATUS = "taskitemstatus";
    this.TAX_CALCULATION_PLUGIN = "taxcalculationplugin";
    this.TAX_ITEM_TAX_GROUP = "taxitemtaxgroup";
    this.TAX_TYPE = "taxtype";
    this.TERM = "term";
    this.TEST_PLUGIN = "testplugin";
    this.TIME_BILL = "timebill";
    this.TIME_MODIFICATION_REQUEST = "timemodificationrequest";
    this.TIME_SHEET = "timesheet";
    this.TOPIC = "topic";
    this.TRACKING_NUMBER = "trackingnumber";
    this.TRANSACTION = "transaction";
    this.TRANSACTION_ADDRESSBOOK = "transactionaddressbook";
    this.TRANSACTION_BILLING_ADDRESSBOOK = "transactionbillingaddressbook";
    this.TRANSACTION_DELETION_REASON = "transactiondeletionreason";
    this.TRANSACTION_HISTORY = "transactionhistory";
    this.TRANSACTION_NUMBERING_AUDIT_LOG = "transactionnumberingauditlog";
    this.TRANSACTION_PAYEE_ADDRESSBOOK = "transactionpayeeaddressbook";
    this.TRANSACTION_RETURN_ADDRESSBOOK = "transactionreturnaddressbook";
    this.TRANSACTION_SHIPPING_ADDRESSBOOK = "transactionshippingaddressbook";
    this.UMD_FIELD = "umdfield";
    this.UNDELIVERED_EMAIL = "undeliveredemail";
    this.UNITS_TYPE = "unitstype";
    this.UNLOCKED_TIME_PERIOD = "unlockedtimeperiod";
    this.USER_AUTHORIZATION_CONSENT = "userauthorizationconsent";
    this.USER_EVENT_SCRIPT = "usereventscript";
    this.USER_EVENT_SCRIPT_DEPLOYMENT = "usereventscriptdeployment";
    this.USER_O_AUTH_TOKEN = "useroauthtoken";
    this.USRSAVEDSEARCH = "usrsavedsearch";
    this.USR_AUDIT_LOG = "usrauditlog";
    this.USR_DS_AUDIT_LOG = "usrdsauditlog";
    this.USR_DS_EXECUTION_LOG = "usrdsexecutionlog";
    this.USR_EXECUTION_LOG = "usrexecutionlog";
    this.VENDOR = "vendor";
    this.VENDOR_CATEGORY = "vendorcategory";
    this.VENDOR_SUBSIDIARY_RELATIONSHIP = "vendorsubsidiaryrelationship";
    this.WEBAPP = "webapp";
    this.WEB_SITE = "website";
    this.WORKBOOK_BUILDER_PLUGIN = "workbookbuilderplugin";
    this.WORKFLOW_ACTION_SCRIPT = "workflowactionscript";
    this.WORKFLOW_ACTION_SCRIPT_DEPLOYMENT = "workflowactionscriptdeployment";
    this.WORKPLACE = "workplace";
    this.WORK_CALENDAR = "workcalendar";
    this.WBS = "wbs";
  }

  query.prototype.Aggregate = new Aggregate();

  query.prototype.DateId = new DateId();

  query.prototype.FieldContext = new FieldContext();

  query.prototype.Operator = new Operator();

  query.prototype.PeriodAdjustment = new PeriodAdjustment();

  query.prototype.PeriodCode = new PeriodCode();

  query.prototype.PeriodType = new PeriodType();

  query.prototype.RelativeDateRange = new RelativeDateRange();

  query.prototype.ReturnType = new ReturnType();

  query.prototype.SortLocale = new SortLocale();

  query.prototype.Type = new Type();
 
  return new query();
})();