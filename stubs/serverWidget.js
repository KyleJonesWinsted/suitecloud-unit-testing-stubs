module.exports = (function () {

  // N/ui/serverWidget Module Members

  var serverWidget = function() {};

  // Object

  var Assistant = function() {};

  var AssistantStep = function() {};

  var Button = function () {};

  var Field = function() {};

  var FieldGroup = function() {};

  var Form = function() {};

  var List = function() {};

  var ListColumn = function() {};

  var Sublist = function() {};

  var Tab = function() {};

  serverWidget.prototype.Assistant = Assistant;

  serverWidget.prototype.AssistantStep = AssistantStep;

  serverWidget.prototype.Button = Button;

  serverWidget.prototype.Field = Field;

  serverWidget.prototype.FieldGroup = FieldGroup;

  serverWidget.prototype.Form = Form;

  serverWidget.prototype.List = List;

  serverWidget.prototype.ListColumn = ListColumn;

  serverWidget.prototype.Sublist = Sublist;

  serverWidget.prototype.Tab = Tab;

  // Method

  serverWidget.prototype.createAssistant = function(options) {};

  serverWidget.prototype.createForm = function(options) {};

  serverWidget.prototype.createList = function(options) {};

  // Assistant Object Methods

  Assistant.prototype.addField = function(options) {};

  Assistant.prototype.addFieldGroup = function(options) {};

  Assistant.prototype.addStep = function(options) {};

  Assistant.prototype.addSublist = function(options) {};

  Assistant.prototype.getField = function(options) {};

  Assistant.prototype.getFieldGroup = function(options) {};

  Assistant.prototype.getFieldGroupIds = function() {};

  Assistant.prototype.getFieldIds = function() {};

  Assistant.prototype.getFieldIdsByFieldGroup = function(fieldGroup) {};

  Assistant.prototype.getLastAction = function() {};

  Assistant.prototype.getLastStep = function() {};

  Assistant.prototype.getNextStep = function() {};

  Assistant.prototype.getStep = function(options) {};

  Assistant.prototype.getStepCount = function() {};

  Assistant.prototype.getSteps = function() {};

  Assistant.prototype.getSublist = function(options) {};

  Assistant.prototype.getSublistIds = function() {};

  Assistant.prototype.hasErrorHtml = function() {};

  Assistant.prototype.isFinished = function() {};

  Assistant.prototype.sendRedirect = function() {};

  Assistant.prototype.setSplash = function(options) {};

  Assistant.prototype.updateDefaultValues = function(values) {};

  // AssistantStep Object Methods

  AssistantStep.prototype.getFieldIds = function() {};

  AssistantStep.prototype.getLineCount = function(options) {};

  AssistantStep.prototype.getSublistValue = function(options) {};

  AssistantStep.prototype.getSubmittedSublistIds = function() {};

  AssistantStep.prototype.getValue = function(options) {};

  // Field Object Methods

  Field.prototype.addSelectOption = function(options) {};

  Field.prototype.getSelectOptions = function(options) {};

  Field.prototype.setHelpText = function(options) {};

  Field.prototype.updateBreakType = function(options) {};

  Field.prototype.updateDisplaySize = function(options) {};

  Field.prototype.updateDisplayType = function(options) {};

  Field.prototype.updateLayoutType = function(options) {};

  // Form Object Methods

  Form.prototype.addButton = function(options) {};

  Form.prototype.addCredentialField = function(options) {};

  Form.prototype.addField = function(options) {};

  Form.prototype.addFieldGroup = function(options) {};

  Form.prototype.addPageInitMessage = function(options) {};

  Form.prototype.addPageLink = function(options) {};

  Form.prototype.addResetButton = function(options) {};

  Form.prototype.addSecretKeyField = function(options) {};

  Form.prototype.addSublist = function(options) {};

  Form.prototype.addSubmitButton = function(options) {};

  Form.prototype.addSubtab = function(options) {};

  Form.prototype.addTab = function(options) {};

  Form.prototype.getButton = function(options) {};

  Form.prototype.getField = function(options) {};

  Form.prototype.getSublist = function(options) {};

  Form.prototype.getSubtab = function(options) {};

  Form.prototype.getTab = function(options) {};

  Form.prototype.getTabs = function() {};

  Form.prototype.insertField = function(options) {};

  Form.prototype.insertSubtab = function(options) {};

  Form.prototype.insertTab = function(options) {};

  Form.prototype.removeButton = function(options) {};

  Form.prototype.updateDefaultValues = function(options) {};

  // List Object Methods

  List.prototype.addButton = function(options) {};

  List.prototype.addColumn = function(options) {};

  List.prototype.addEditColumn = function(options) {};

  List.prototype.addPageLink = function(options) {};

  List.prototype.addRow = function(options) {};

  List.prototype.addRows = function(options) {};

  // ListColumn Object Methods

  ListColumn.prototype.addParamToURL = function(options) {};

  ListColumn.prototype.setURL = function(options) {};

  // Sublist Object Methods

  Sublist.prototype.addButton = function(options) {};

  Sublist.prototype.addField = function(options) {};

  Sublist.prototype.addMarkAllButtons = function() {};

  Sublist.prototype.addRefreshButtons = function() {};

  Sublist.prototype.getField = function(options) {};

  Sublist.prototype.getSublistValue = function(options) {};

  Sublist.prototype.setSublistValue = function(options) {};

  Sublist.prototype.updateTotallingFieldId = function(options) {};

  Sublist.prototype.updateUniqueFieldId = function(options) {};

  // Enum

  function AssistantSubmitAction() {
    this.BACK = "BACK";
    this.CANCEL = "CANCEL";
    this.FINISH = "FINISH";
    this.JUMP = "JUMP";
    this.NEXT = "NEXT";
  }

  function FieldBreakType() {
    this.NONE = "NONE";
    this.STARTCOL = "STARTCOL";
    this.STARTROW = "STARTROW";
  }

  function FieldDisplayType() {
    this.DISABLED = "DISABLED";
    this.ENTRY = "ENTRY";
    this.HIDDEN = "HIDDEN";
    this.INLINE = "INLINE";
    this.NODISPLAY = "NODISPLAY";
    this.NORMAL = "NORMAL";
    this.READONLY = "READONLY";
  }

  function FieldLayoutType() {
    this.STARTROW = "STARTROW";
    this.MIDROW = "MIDROW";
    this.ENDROW = "ENDROW";
    this.OUTSIDE = "OUTSIDE";
    this.OUTSIDEBELOW = "OUTSIDEBELOW";
    this.OUTSIDEABOVE = "OUTSIDEABOVE";
    this.NORMAL = "NORMAL";
  }

  function FieldType() {
    this.CHECKBOX = "CHECKBOX";
    this.LONGTEXT = "LONGTEXT";
    this.CURRENCY = "CURRENCY";
    this.MULTISELECT = "MULTISELECT";
    this.DATE = "DATE";
    this.PASSWORD = "PASSWORD";
    this.DATETIME = "DATETIME";
    this.PERCENT = "PERCENT";
    this.DATETIMETZ = "DATETIMETZ";
    this.PHONE = "PHONE";
    this.EMAIL = "EMAIL";
    this.SELECT = "SELECT";
    this.FILE = "FILE";
    this.RADIO = "RADIO";
    this.FLOAT = "FLOAT";
    this.RICHTEXT = "RICHTEXT";
    this.HELP = "HELP";
    this.TEXT = "TEXT";
    this.INLINEHTML = "INLINEHTML";
    this.TEXTAREA = "TEXTAREA";
    this.INTEGER = "INTEGER";
    this.TIMEOFDAY = "TIMEOFDAY";
    this.IMAGE = "IMAGE";
    this.URL = "URL";
    this.LABEL = "LABEL";
  }

  function FormPageLinkType() {
    this.BREADCRUMB = "BREADCRUMB";
    this.CROSSLINK = "CROSSLINK";
  }

  function LayoutJustification() {
    this.CENTER = "CENTER";
    this.LEFT = "LEFT";
    this.RIGHT = "RIGHT";
  }

  function ListStyle() {
    this.GRID = "GRID";
    this.REPORT = "REPORT";
    this.PLAIN = "PLAIN";
    this.NORMAL = "NORMAL";
  }

  function SublistDisplayType() {
    this.NORMAL = "NORMAL";
    this.HIDDEN = "HIDDEN";
  }

  function SublistType() {
    this.INLINEEDITOR = "INLINEEDITOR";
    this.EDITOR = "EDITOR";
    this.LIST = "LIST";
    this.STATICLIST = "STATICLIST";
  }

  serverWidget.prototype.AssistantSubmitAction = new AssistantSubmitAction();

  serverWidget.prototype.FieldBreakType = new FieldBreakType();

  serverWidget.prototype.FieldDisplayType = new FieldDisplayType();

  serverWidget.prototype.FieldLayoutType = new FieldLayoutType();

  serverWidget.prototype.FieldType = new FieldType();

  serverWidget.prototype.FormPageLinkType = new FormPageLinkType();

  serverWidget.prototype.LayoutJustification = new LayoutJustification();

  serverWidget.prototype.ListStyle = new ListStyle();

  serverWidget.prototype.SublistDisplayType = new SublistDisplayType();

  serverWidget.prototype.SublistType = new SublistType();

  return new serverWidget();
})();