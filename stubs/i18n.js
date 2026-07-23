module.exports = (function () {

  // N/format/i18n Module Members

  var format = function() {};

  // Object

  var CurrencyFormatter = function() {};

  var NumberFormatter = function() {};

  var PhoneNumberFormatter = function() {};

  var PhoneNumberParser = function() {};

  format.prototype.CurrencyFormatter = CurrencyFormatter;

  format.prototype.NumberFormatter = NumberFormatter;

  format.prototype.PhoneNumberFormatter = PhoneNumberFormatter;

  format.prototype.PhoneNumberParser = PhoneNumberParser;

  // Method

  format.prototype.spellOut = function(options) {};

  format.prototype.getCurrencyFormatter = function(options) {};

  format.prototype.getNumberFormatter = function(options) {};

  format.prototype.getPhoneNumberFormatter = function(options) {};

  format.prototype.getPhoneNumberParser = function(options) {};

  // Currency Formatter Object Methods

  CurrencyFormatter.prototype.format = function(options) {};

  // Currency Formatter Object Properties

  CurrencyFormatter.prototype.currency = undefined;

  CurrencyFormatter.prototype.locale = undefined;

  CurrencyFormatter.prototype.numberFormatter = undefined;

  CurrencyFormatter.prototype.symbol = undefined;

  // Number Formatter Object Methods

  NumberFormatter.prototype.format = function(options) {};

  // Number Formatter Object Properties

  NumberFormatter.prototype.decimalSeparator = undefined;

  NumberFormatter.prototype.groupSeparator = undefined;

  NumberFormatter.prototype.locale = undefined;

  NumberFormatter.prototype.negativeNumberFormat = undefined;

  NumberFormatter.prototype.precision = undefined;

  // Phone Number Formatter Object Methods

  PhoneNumberFormatter.prototype.format = function(options) {};

  // Phone Number Parser Object Methods

  PhoneNumberParser.prototype.parse = function(options) {};

  // Enum

  function NegativeNumberFormat() {
    this.BRACKETS = "BRACKETS";
    this.MINUS = "MINUS";
  }

  function Currency() {
    this.AED = "AED";
    this.CAD = "CAD";
    this.CZK = "CZK";
    this.EEK = "EEK";
    this.EUR = "EUR";
    this.GBP = "GBP";
    this.IDR = "IDR";
    this.INR = "INR";
    this.JPY = "JPY";
    this.USD = "USD";
    this.UYU = "UYU";
  }

  function PhoneNumberFormatType() {
    this.E164 = "E164";
    this.INTERNATIONAL = "INTERNATIONAL";
    this.NATIONAL = "NATIONAL";
    this.RFC3966 = "RFC3966";
  }

  function Country() {
    this.AFGHANISTAN = "AFGHANISTAN";
    this.ALAND_ISLANDS = "ALAND_ISLANDS";
    this.ALBANIA = "ALBANIA";
    this.ALGERIA = "ALGERIA";
    this.AMERICAN_SOMOA = "AMERICAN_SOMOA";
    this.ANDORRA = "ANDORRA";
    this.ANGOLA = "ANGOLA";
    this.ANGUILLA = "ANGUILLA";
    this.ANTARCTICA = "ANTARCTICA";
    this.ANTIGUA_AND_BARBUDA = "ANTIGUA_AND_BARBUDA";
    this.ARGENTINA = "ARGENTINA";
    this.ARMENIA = "ARMENIA";
    this.ARUBA = "ARUBA";
    this.AUSTRALIA = "AUSTRALIA";
    this.AUSTRIA = "AUSTRIA";
    this.AZERBAIJAN = "AZERBAIJAN";
    this.BAHAMAS = "BAHAMAS";
    this.BAHRAIN = "BAHRAIN";
    this.BANGLADESH = "BANGLADESH";
    this.BARBADOS = "BARBADOS";
    this.BELARUS = "BELARUS";
    this.BELGIUM = "BELGIUM";
    this.BELIZE = "BELIZE";
    this.BENIN = "BENIN";
    this.BERMUDA = "BERMUDA";
    this.BHUTAN = "BHUTAN";
    this.BOLIVIA = "BOLIVIA";
    this.BONAIRE = "BONAIRE";
    this.BOSIA_AND_HERZEGOVINA = "BOSIA_AND_HERZEGOVINA";
    this.BOTSWANA = "BOTSWANA";
    this.BOUVET_ISLAND = "BOUVET_ISLAND";
    this.BRAZIL = "BRAZIL";
    this.BRITISH_INDIAN_OCEAN_TERRITORY = "BRITISH_INDIAN_OCEAN_TERRITORY";
    this.BRUNEI_DARUSSALAM = "BRUNEI_DARUSSALAM";
    this.BULGARIA = "BULGARIA";
    this.BURKINAFASO = "BURKINAFASO";
    this.BURUNDI = "BURUNDI";
    this.CAMBODIA = "CAMBODIA";
    this.CAMEROON = "CAMEROON";
    this.CANADA = "CANADA";
    this.CANARY_ISLANDS = "CANARY_ISLANDS";
    this.CAPEVERDE = "CAPEVERDE";
    this.CAYMAN_ISLANDS = "CAYMAN_ISLANDS";
    this.CENTRAL_AFRICAN_REPUBLIC = "CENTRAL_AFRICAN_REPUBLIC";
    this.CEUTA_AND_MELILLA = "CEUTA_AND_MELILLA";
    this.CHAD = "CHAD";
    this.CHILE = "CHILE";
    this.CHINA = "CHINA";
    this.CHRISTMAS_ISLAND = "CHRISTMAS_ISLAND";
    this.COCOS_ISLANDS = "COCOS_ISLANDS";
    this.COLOMBIA = "COLOMBIA";
    this.COMOROS = "COMOROS";
    this.COOK_ISLANDS = "COOK_ISLANDS";
    this.COSTARICA = "COSTARICA";
    this.COTE_DIVOIRE = "COTE_DIVOIRE";
    this.CROATIA = "CROATIA";
    this.CUBA = "CUBA";
    this.CURACAO = "CURACAO";
    this.CYPRUS = "CYPRUS";
    this.CZECH_REPUBLIC = "CZECH_REPUBLIC";
    this.DEMOCRATIC_REPUBLIC_OF_CONGO = "DEMOCRATIC_REPUBLIC_OF_CONGO";
    this.DENMARK = "DENMARK";
    this.DJIBOUTI = "DJIBOUTI";
    this.DOMINICA = "DOMINICA";
    this.DOMINICAN_REPUBLIC = "DOMINICAN_REPUBLIC";
    this.EASTTIMOR = "EASTTIMOR";
    this.ECUADOR = "ECUADOR";
    this.EGYPT = "EGYPT";
    this.ELSALVADOR = "ELSALVADOR";
    this.EQUATORIAL_GUINEA = "EQUATORIAL_GUINEA";
    this.ERITREA = "ERITREA";
    this.ESTONIA = "ESTONIA";
    this.ETHIOPIA = "ETHIOPIA";
    this.FALKLAND_ISLANDS = "FALKLAND_ISLANDS";
    this.FAROE_ISLANDS = "FAROE_ISLANDS";
    this.FIJI = "FIJI";
    this.FINLAND = "FINLAND";
    this.FRANCE = "FRANCE";
    this.FRENCH_POLYNESIA = "FRENCH_POLYNESIA";
    this.FRENCH_SOUTHERN_TERRITORIES = "FRENCH_SOUTHERN_TERRITORIES";
    this.FRENCHGUIANA = "FRENCHGUIANA";
    this.GABON = "GABON";
    this.GAMBIA = "GAMBIA";
    this.GEORGIA = "GEORGIA";
    this.GERMANY = "GERMANY";
    this.GHANA = "GHANA";
    this.GIBRALTER = "GIBRALTER";
    this.GREECE = "GREECE";
    this.GREENLAND = "GREENLAND";
    this.GRENADA = "GRENADA";
    this.GUADELOUPE = "GUADELOUPE";
    this.GUAM = "GUAM";
    this.GUATEMALA = "GUATEMALA";
    this.GUERNSEY = "GUERNSEY";
    this.GUINEA = "GUINEA";
    this.GUINEA_BISSAU = "GUINEA_BISSAU";
    this.GUYANA = "GUYANA";
    this.HAITI = "HAITI";
    this.HEARD_AND_MCDONALD_ISLANDS = "HEARD_AND_MCDONALD_ISLANDS";
    this.HONDURAS = "HONDURAS";
    this.HONGKONG = "HONGKONG";
    this.HUNGARY = "HUNGARY";
    this.ICELAND = "ICELAND";
    this.INDIA = "INDIA";
    this.INDONESIA = "INDONESIA";
    this.IRAN = "IRAN";
    this.IRAQ = "IRAQ";
    this.IRELAND = "IRELAND";
    this.ISLEOFMAN = "ISLEOFMAN";
    this.ISRAEL = "ISRAEL";
    this.ITALY = "ITALY";
    this.JAMAICA = "JAMAICA";
    this.JAPAN = "JAPAN";
    this.JERSEY = "JERSEY";
    this.JORDAN = "JORDAN";
    this.KAZAKHSTAN = "KAZAKHSTAN";
    this.KENYA = "KENYA";
    this.KIRIBATI = "KIRIBATI";
    this.KOREA_NORTH = "KOREA_NORTH";
    this.KOREA_SOUTH = "KOREA_SOUTH";
    this.KOSOVO = "KOSOVO";
    this.KUWAIT = "KUWAIT";
    this.KYRGYZSTAN = "KYRGYZSTAN";
    this.LAOS = "LAOS";
    this.LATVIA = "LATVIA";
    this.LEBANON = "LEBANON";
    this.LESOTHO = "LESOTHO";
    this.LIBERIA = "LIBERIA";
    this.LIBYA = "LIBYA";
    this.LIECHTENSTEIN = "LIECHTENSTEIN";
    this.LITHUANIA = "LITHUANIA";
    this.LUXEMBOURG = "LUXEMBOURG";
    this.MACAU = "MACAU";
    this.MACEDONIA = "MACEDONIA";
    this.MADAGASCAR = "MADAGASCAR";
    this.MALAWI = "MALAWI";
    this.MALAYSIA = "MALAYSIA";
    this.MALDIVES = "MALDIVES";
    this.MALI = "MALI";
    this.MALTA = "MALTA";
    this.MARSHALL_ISLANDS = "MARSHALL_ISLANDS";
    this.MARTINIQUE = "MARTINIQUE";
    this.MAURITANIA = "MAURITANIA";
    this.MAURITIUS = "MAURITIUS";
    this.MAYOTTE = "MAYOTTE";
    this.MEXICO = "MEXICO";
    this.MICRONESIA = "MICRONESIA";
    this.MOLDOVA = "MOLDOVA";
    this.MONACO = "MONACO";
    this.MONGOLIA = "MONGOLIA";
    this.MONTENEGRO = "MONTENEGRO";
    this.MONTSERRAT = "MONTSERRAT";
    this.MOROCCO = "MOROCCO";
    this.MOZAMBIQUE = "MOZAMBIQUE";
    this.MYANMAR = "MYANMAR";
    this.NAMIBIA = "NAMIBIA";
    this.NAURU = "NAURU";
    this.NEPAL = "NEPAL";
    this.NETHERLANDS = "NETHERLANDS";
    this.NETHERLANDS_ANTILLES = "NETHERLANDS_ANTILLES";
    this.NEWCALEDONIA = "NEWCALEDONIA";
    this.NEWZEALAND = "NEWZEALAND";
    this.NICARAGUA = "NICARAGUA";
    this.NIGER = "NIGER";
    this.NIGERIA = "NIGERIA";
    this.NIUE = "NIUE";
    this.NORFOLKISAND = "NORFOLKISAND";
    this.NORTHERN_MARIANA_ISLANDS = "NORTHERN_MARIANA_ISLANDS";
    this.NORWAY = "NORWAY";
    this.OMAN = "OMAN";
    this.PAKISTAN = "PAKISTAN";
    this.PALAU = "PALAU";
    this.PANAMA = "PANAMA";
    this.PAPUA_NEW_GUINEA = "PAPUA_NEW_GUINEA";
    this.PARAGUAY = "PARAGUAY";
    this.PERU = "PERU";
    this.PHILIPPINES = "PHILIPPINES";
    this.PITCAIRN_ISLAND = "PITCAIRN_ISLAND";
    this.POLAND = "POLAND";
    this.PORTUGAL = "PORTUGAL";
    this.PUERTORICO = "PUERTORICO";
    this.QATAR = "QATAR";
    this.REPUBLIC_OF_CONGO = "REPUBLIC_OF_CONGO";
    this.REUNION_ISLAND = "REUNION_ISLAND";
    this.ROMANIA = "ROMANIA";
    this.RUSSIAN_FEDERATION = "RUSSIAN_FEDERATION";
    this.RWANDA = "RWANDA";
    this.SAINT_BARTHELEMY = "SAINT_BARTHELEMY";
    this.SAINT_HELENA = "SAINT_HELENA";
    this.SAINT_KITTS_AND_NEVIS = "SAINT_KITTS_AND_NEVIS";
    this.SAINT_VICENT_AND_THE_GRENADINES = "SAINT_VICENT_AND_THE_GRENADINES";
    this.SAINTLUCIA = "SAINTLUCIA";
    this.SAINTMARTIN = "SAINTMARTIN";
    this.SAMOA = "SAMOA";
    this.SANMARINO = "SANMARINO";
    this.SAOTOME_AND_PRINCIPE = "SAOTOME_AND_PRINCIPE";
    this.SAUDI_ARABIA = "SAUDI_ARABIA";
    this.SENGAL = "SENGAL";
    this.SERBIA = "SERBIA";
    this.SERBIA_AND_MONTENEGRO = "SERBIA_AND_MONTENEGRO";
    this.SEYCHELLES = "SEYCHELLES";
    this.SIERRALEONE = "SIERRALEONE";
    this.SINGAPORE = "SINGAPORE";
    this.SINT_MAARTEN = "SINT_MAARTEN";
    this.SLOVAK_REPUBLIC = "SLOVAK_REPUBLIC";
    this.SLOVENIA = "SLOVENIA";
    this.SOLOMON_ISLANDS = "SOLOMON_ISLANDS";
    this.SOMALIA = "SOMALIA";
    this.SOUTH_GEORGIA = "SOUTH_GEORGIA";
    this.SOUTHAFRICA = "SOUTHAFRICA";
    this.SOUTHSUDAN = "SOUTHSUDAN";
    this.SPAIN = "SPAIN";
    this.SRILANKA = "SRILANKA";
    this.ST_PIERREANDMIQUELON = "ST_PIERREANDMIQUELON";
    this.STATE_OF_PALESTINE = "STATE_OF_PALESTINE";
    this.SUDAN = "SUDAN";
    this.SURINAME = "SURINAME";
    this.SVALBARD_AND_JANMAYEN_ISLANDS = "SVALBARD_AND_JANMAYEN_ISLANDS";
    this.SWAZILAND = "SWAZILAND";
    this.SWEDEN = "SWEDEN";
    this.SWITZERLAND = "SWITZERLAND";
    this.SYRIAN_ARAB_REPUBLIC = "SYRIAN_ARAB_REPUBLIC";
    this.TAIWAN = "TAIWAN";
    this.TAJIKISTAN = "TAJIKISTAN";
    this.TANZANIA = "TANZANIA";
    this.THAILAND = "THAILAND";
    this.TOGO = "TOGO";
    this.TOKELAU = "TOKELAU";
    this.TONGA = "TONGA";
    this.TRINIDADANDTOBAGO = "TRINIDADANDTOBAGO";
    this.TUNISIA = "TUNISIA";
    this.TURKEY = "TURKEY";
    this.TURKMENISTAN = "TURKMENISTAN";
    this.TURKSAND_CAICOS_ISLANDS = "TURKSAND_CAICOS_ISLANDS";
    this.TUVALU = "TUVALU";
    this.UGANDA = "UGANDA";
    this.UKRAINE = "UKRAINE";
    this.UNITED_ARAB_EMIRATES = "UNITED_ARAB_EMIRATES";
    this.UNITED_KINGDOM = "UNITED_KINGDOM";
    this.UNITEDSTATES = "UNITEDSTATES";
    this.URUGUAY = "URUGUAY";
    this.US_MINOR_OUTLYING_ISLANDS = "US_MINOR_OUTLYING_ISLANDS";
    this.UZBEKISTAN = "UZBEKISTAN";
    this.VANUATU = "VANUATU";
    this.VATICAN = "VATICAN";
    this.VENEZUELA = "VENEZUELA";
    this.VIETNAM = "VIETNAM";
    this.VIRGINISLANDS_UK = "VIRGINISLANDS_UK";
    this.VIRGINISLANDS_USA = "VIRGINISLANDS_USA";
    this.WALLIS_AND_FUTUNA = "WALLIS_AND_FUTUNA";
    this.WESTERN_SAHARA = "WESTERN_SAHARA";
    this.YEMEN = "YEMEN";
    this.ZAMBIA = "ZAMBIA";
    this.ZIMBABWE = "ZIMBABWE";
  }

  format.prototype.NegativeNumberFormat = new NegativeNumberFormat();

  format.prototype.Currency = new Currency();

  format.prototype.PhoneNumberFormatType = new PhoneNumberFormatType();

  format.prototype.Country = new Country();

  return new format();
})();