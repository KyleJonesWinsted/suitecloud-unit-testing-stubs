module.exports = (function () {

  // N/documentCapture Module Members

  var documentCapture = function() {};

  // Object

  var Cell = function() {};

  var Document = function() {};

  var Field = function() {};

  var FieldLabel = function() {};

  var FieldValue = function() {};

  var Line = function() {};

  var Page = function() {};

  var Table = function() {};

  var TableRow = function() {};

  var Word = function() {};

  documentCapture.prototype.Cell = Cell;

  documentCapture.prototype.Document = Document;

  documentCapture.prototype.Field = Field;

  documentCapture.prototype.FieldLabel = FieldLabel;

  documentCapture.prototype.FieldValue = FieldValue;

  documentCapture.prototype.Line = Line;

  documentCapture.prototype.Page = Page;

  documentCapture.prototype.Table = Table;

  documentCapture.prototype.TableRow = TableRow;

  documentCapture.prototype.Word = Word;

  // Method

  documentCapture.prototype.documentToStructure = function(options) {};

  documentCapture.prototype.documentToStructure.promise = function(options) {};

  documentCapture.prototype.documentToText = function(options) {};

  documentCapture.prototype.documentToText.promise = function(options) {};

  documentCapture.prototype.getRemainingConcurrency = function() {};

  documentCapture.prototype.getRemainingConcurrency.promise = function() {};

  documentCapture.prototype.getRemainingFreeUsage = function() {};

  documentCapture.prototype.getRemainingFreeUsage.promise = function() {};

  documentCapture.prototype.parseResult = function(options) {};

  // Cell Object Properties

  Cell.prototype.confidence = undefined;

  Cell.prototype.text = undefined;

  // Document Object Methods

  Document.prototype.getText = function() {};

  // Document Object Properties

  Document.prototype.mimeType = undefined;

  Document.prototype.pages = undefined;

  // Field Object Properties

  Field.prototype.label = undefined;

  Field.prototype.type = undefined;

  Field.prototype.value = undefined;

  // FieldLabel Object Properties

  FieldLabel.prototype.confidence = undefined;

  FieldLabel.prototype.name = undefined;

  // FieldValue Object Properties

  FieldValue.prototype.confidence = undefined;

  FieldValue.prototype.text = undefined;

  // Line Object Properties

  Line.prototype.confidence = undefined;

  Line.prototype.text = undefined;

  // Page Object Methods

  Page.prototype.getText = function() {};

  // Page Object Properties

  Page.prototype.detectedDocumentTypes = undefined;

  Page.prototype.fields = undefined;

  Page.prototype.lines = undefined;

  Page.prototype.tables = undefined;

  Page.prototype.words = undefined;

  // Table Object Properties

  Table.prototype.bodyRows = undefined;

  Table.prototype.columnCount = undefined;

  Table.prototype.confidence = undefined;

  Table.prototype.footerRows = undefined;

  Table.prototype.headerRows = undefined;

  Table.prototype.rowCount = undefined;

  // TableRow Object Properties

  TableRow.prototype.cells = undefined;

  // Word Object Properties

  Word.prototype.confidence = undefined;

  Word.prototype.text = undefined;

  // Enum

  function DocumentType() {
    this.BANK_STATEMENT = "BANK_STATEMENT";
    this.CHECK = "CHECK";
    this.DRIVER_LICENSE = "DRIVER_LICENSE";
    this.HEALTH_INSURANCE_ID = "HEALTH_INSURANCE_ID";
    this.INVOICE = "INVOICE";
    this.OTHERS = "OTHERS";
    this.PASSPORT = "PASSPORT";
    this.PAYSLIP = "PAYSLIP";
    this.RECEIPT = "RECEIPT";
    this.RESUME = "RESUME";
    this.TAX_FORM = "TAX_FORM";
  }

  function Feature() {
    this.DOCUMENT_CLASSIFICATION = "DOCUMENT_CLASSIFICATION";
    this.FIELD_EXTRACTION = "FIELD_EXTRACTION";
    this.TABLE_EXTRACTION = "TABLE_EXTRACTION";
    this.TEXT_EXTRACTION = "TEXT_EXTRACTION";
  }

  function FieldType() {
    this.KEY_VALUE = "KEY_VALUE";
    this.LINE_ITEM = "LINE_ITEM";
    this.LINE_ITEM_FIELD = "LINE_ITEM_FIELD";
    this.LINE_ITEM_GROUP = "LINE_ITEM_GROUP";
    this.UNKNOWN = "UNKNOWN";
  }

  function Language() {
    this.ARA = "ARA";
    this.CES = "CES";
    this.CHI_SIM = "CHI_SIM";
    this.DAN = "DAN";
    this.DEU = "DEU";
    this.ELL = "ELL";
    this.ENG = "ENG";
    this.FIN = "FIN";
    this.FRA = "FRA";
    this.HIN = "HIN";
    this.HUN = "HUN";
    this.ITA = "ITA";
    this.JPN = "JPN";
    this.KOR = "KOR";
    this.NLD = "NLD";
    this.NOR = "NOR";
    this.OTHERS = "OTHERS";
    this.POL = "POL";
    this.POR = "POR";
    this.RON = "RON";
    this.RUS = "RUS";
    this.SLK = "SLK";
    this.SWE = "SWE";
    this.TUR = "TUR";
  }

  documentCapture.prototype.DocumentType = new DocumentType();

  documentCapture.prototype.Feature = new Feature();

  documentCapture.prototype.FieldType = new FieldType();

  documentCapture.prototype.Language = new Language();

  return new documentCapture();
})();
