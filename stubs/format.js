module.exports = (function () {

  // N/format Module Members

  var format = function () { };

  // Method

  format.prototype.format = function () { };

  format.prototype.parse = function () { };

  function Type() {
    this.ADDRESS = "address";
    this.CCEXPDATE = "ccexpdate";
    this.CCNUMBER = "ccnumber";
    this.CCVALIDFROM = "ccvalidfrom";
    this.CHECKBOX = "checkbox";
    this.CLOBTEXT = "clobtext";
    this.COLOR = "color";
    this.CURRENCY = "currency";
    this.CURRENCY2 = "currency2";
    this.DATE = "date";
    this.DATETIME = "datetime";
    this.DATETIMETZ = "datetimetz";
    this.DOCUMENT = "document";
    this.DYNAMICPRECISION = "dynamicprecision";
    this.EMAIL = "email";
    this.EMAILS = "emails";
    this.FLOAT = "float";
    this.FULLPHONE = "fullphone";
    this.FUNCTION = "function";
    this.FURIGANA = "furigana";
    this.IDENTIFIER = "identifier";
    this.IDENTIFIERANYCASE = "identifieranycase";
    this.INTEGER = "integer";
    this.MMYYDATE = "mmyydate";
    this.MULTISELECT = "multiselect";
    this.NONNEGCURRENCY = "nonnegcurrency";
    this.NONNEGFLOAT = "nonnegfloat";
    this.PACKAGE = "package";
    this.PERCENT = "percent";
    this.PHONE = "phone";
    this.POSCURRENCY = "poscurrency";
    this.POSFLOAT = "posfloat";
    this.POSINTEGER = "posinteger";
    this.QUOTEDFUNCTION = "'function'";
    this.RADIO = "radio";
    this.RATE = "rate";
    this.RATEHIGHPRECISION = "ratehighprecision";
    this.SELECT = "select";
    this.TEXT = "text";
    this.TEXTAREA = "textarea";
    this.TIME = "time";
    this.TIMEOFDAY = "timeofday";
    this.TIMETRACK = "timetrack";
    this.URL = "url";
  }

  function TimeZone() {
    this.ETC_GMT_PLUS_12 = 'Etc/GMT+12';
    this.PACIFIC_SAMOA = 'Pacific/Samoa';
    this.PACIFIC_HONOLULU = 'Pacific/Honolulu';
    this.AMERICA_ANCHORAGE = 'America/Anchorage';
    this.AMERICA_LOS_ANGELES = 'America/Los_Angeles';
    this.AMERICA_TIJUANA = 'America/Tijuana';
    this.AMERICA_DENVER = 'America/Denver';
    this.AMERICA_PHOENIX = 'America/Phoenix';
    this.AMERICA_CHIHUAHUA = 'America/Chihuahua';
    this.AMERICA_CHICAGO = 'America/Chicago';
    this.AMERICA_REGINA = 'America/Regina';
    this.AMERICA_GUATEMALA = 'America/Guatemala';
    this.AMERICA_MEXICO_CITY = 'America/Mexico_City';
    this.AMERICA_NEW_YORK = 'America/New_York';
    this.US_EAST_INDIANA = 'US/East-Indiana';
    this.AMERICA_BOGOTA = 'America/Bogota';
    this.AMERICA_CARACAS = 'America/Caracas';
    this.AMERICA_HALIFAX = 'America/Halifax';
    this.AMERICA_LA_PAZ = 'America/La_Paz';
    this.AMERICA_MANAUS = 'America/Manaus';
    this.AMERICA_SANTIAGO = 'America/Santiago';
    this.AMERICA_ST_JOHNS = 'America/St_Johns';
    this.AMERICA_SAO_PAULO = 'America/Sao_Paulo';
    this.AMERICA_BUENOS_AIRES = 'America/Buenos_Aires';
    this.ETC_GMT_PLUS_3 = 'Etc/GMT+3';
    this.AMERICA_GODTHAB = 'America/Godthab';
    this.AMERICA_MONTEVIDEO = 'America/Montevideo';
    this.AMERICA_NORONHA = 'America/Noronha';
    this.ETC_GMT_PLUS_1 = 'Etc/GMT+1';
    this.ATLANTIC_AZORES = 'Atlantic/Azores';
    this.EUROPE_LONDON = 'Europe/London';
    this.GMT = 'GMT';
    this.ATLANTIC_REYKJAVIK = 'Atlantic/Reykjavik';
    this.EUROPE_WARSAW = 'Europe/Warsaw';
    this.EUROPE_PARIS = 'Europe/Paris';
    this.ETC_GMT_MINUS_1 = 'Etc/GMT-1';
    this.EUROPE_AMSTERDAM = 'Europe/Amsterdam';
    this.EUROPE_BUDAPEST = 'Europe/Budapest';
    this.AFRICA_CAIRO = 'Africa/Cairo';
    this.EUROPE_ISTANBUL = 'Europe/Istanbul';
    this.ASIA_JERUSALEM = 'Asia/Jerusalem';
    this.ASIA_AMMAN = 'Asia/Amman';
    this.ASIA_BEIRUT = 'Asia/Beirut';
    this.AFRICA_JOHANNESBURG = 'Africa/Johannesburg';
    this.EUROPE_KIEV = 'Europe/Kiev';
    this.EUROPE_MINSK = 'Europe/Minsk';
    this.AFRICA_WINDHOEK = 'Africa/Windhoek';
    this.ASIA_RIYADH = 'Asia/Riyadh';
    this.EUROPE_MOSCOW = 'Europe/Moscow';
    this.ASIA_BAGHDAD = 'Asia/Baghdad';
    this.AFRICA_NAIROBI = 'Africa/Nairobi';
    this.ASIA_TEHRAN = 'Asia/Tehran';
    this.ASIA_MUSCAT = 'Asia/Muscat';
    this.ASIA_BAKU = 'Asia/Baku';
    this.ASIA_YEREVAN = 'Asia/Yerevan';
    this.ETC_GMT_MINUS_3 = 'Etc/GMT-3';
    this.ASIA_KABUL = 'Asia/Kabul';
    this.ASIA_KARACHI = 'Asia/Karachi';
    this.ASIA_YEKATERINBURG = 'Asia/Yekaterinburg';
    this.ASIA_TASHKENT = 'Asia/Tashkent';
    this.ASIA_CALCUTTA = 'Asia/Calcutta';
    this.ASIA_KATMANDU = 'Asia/Katmandu';
    this.ASIA_ALMATY = 'Asia/Almaty';
    this.ASIA_DHAKA = 'Asia/Dhaka';
    this.ASIA_RANGOON = 'Asia/Rangoon';
    this.ASIA_BANGKOK = 'Asia/Bangkok';
    this.ASIA_KRASNOYARSK = 'Asia/Krasnoyarsk';
    this.ASIA_HONG_KONG = 'Asia/Hong_Kong';
    this.ASIA_KUALA_LUMPUR = 'Asia/Kuala_Lumpur';
    this.ASIA_TAIPEI = 'Asia/Taipei';
    this.AUSTRALIA_PERTH = 'Australia/Perth';
    this.ASIA_IRKUTSK = 'Asia/Irkutsk';
    this.ASIA_MANILA = 'Asia/Manila';
    this.ASIA_SEOUL = 'Asia/Seoul';
    this.ASIA_TOKYO = 'Asia/Tokyo';
    this.ASIA_YAKUTSK = 'Asia/Yakutsk';
    this.AUSTRALIA_DARWIN = 'Australia/Darwin';
    this.AUSTRALIA_ADELAIDE = 'Australia/Adelaide';
    this.AUSTRALIA_SYDNEY = 'Australia/Sydney';
    this.AUSTRALIA_BRISBANE = 'Australia/Brisbane';
    this.AUSTRALIA_HOBART = 'Australia/Hobart';
    this.PACIFIC_GUAM = 'Pacific/Guam';
    this.ASIA_VLADIVOSTOK = 'Asia/Vladivostok';
    this.ASIA_MAGADAN = 'Asia/Magadan';
    this.PACIFIC_KWAJALEIN = 'Pacific/Kwajalein';
    this.PACIFIC_AUCKLAND = 'Pacific/Auckland';
    this.PACIFIC_TONGATAPU = 'Pacific/Tongatapu';
  }

  format.prototype.Type = new Type();

  format.prototype.TimeZone = new TimeZone();

  return new format();
})();