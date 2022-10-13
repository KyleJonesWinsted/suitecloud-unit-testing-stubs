module.exports = (function () {

  // N/workbook Module Members

  var workbook = function () { };

  // Object

  var AllSubNodesSelector = function () { };

  var Aspect = function () { };

  var Category = function () { };

  var ChartAxis = function () { };

  var ChartDefinition = function () { };

  var ConditionalFilter = function () { };

  var DataDimension = function () { };

  var DataDimensionItem = function () { };

  var DimensionSelector = function () { };

  var DimensionSort = function () { };

  var Expression = function () { };

  var FieldContext = function () { };

  var Legend = function () { };

  var LimitingFilter = function () { };

  var Measure = function () { };

  var MeasureSort = function () { };

  var PathSelector = function () { };

  var PivotAxis = function () { };

  var PivotDimension = function () { };

  var Section = function () { };

  var Series = function () { };

  var Sort = function () { };

  var SortDefinition = function () { };

  var TableColumn = function () { };

  var TableDefinition = function () { };

  var TableFilter = function () { };

  var Workbook = function () { };

  workbook.prototype.AllSubNodesSelector = AllSubNodesSelector;

  workbook.prototype.Aspect = Aspect;

  workbook.prototype.Category = Category;

  workbook.prototype.ChartAxis = ChartAxis;

  workbook.prototype.ChartDefinition = ChartDefinition;

  workbook.prototype.ConditionalFilter = ConditionalFilter;

  workbook.prototype.DataDimension = DataDimension;

  workbook.prototype.DataDimensionItem = DataDimensionItem;

  workbook.prototype.DimensionSelector = DimensionSelector;

  workbook.prototype.DimensionSort = DimensionSort;

  workbook.prototype.Expression = Expression;

  workbook.prototype.FieldContext = FieldContext;

  workbook.prototype.Legend = Legend;

  workbook.prototype.LimitingFilter = LimitingFilter;

  workbook.prototype.Measure = Measure;

  workbook.prototype.MeasureSort = MeasureSort;

  workbook.prototype.PathSelector = PathSelector;

  workbook.prototype.PivotAxis = PivotAxis;

  workbook.prototype.PivotDimension = PivotDimension;

  workbook.prototype.Section = Section;

  workbook.prototype.Series = Series;

  workbook.prototype.Sort = Sort;

  workbook.prototype.SortDefinition = SortDefinition;

  workbook.prototype.TableColumn = TableColumn;

  workbook.prototype.TableDefinition = TableDefinition;

  workbook.prototype.TableFilter = TableFilter;

  workbook.prototype.Workbook = Workbook;

  // Method

  workbook.prototype.create = function (options) { };

  workbook.prototype.createAllSubNodesSelector = function (options) { };

  workbook.prototype.createAspect = function (options) { };

  workbook.prototype.createCategory = function (options) { };

  workbook.prototype.createChartAxis = function (options) { };

  workbook.prototype.createChartDefinition = function (options) { };

  workbook.prototype.createConditionalFilter = function (options) { };

  workbook.prototype.createConstant = function (options) { };

  workbook.prototype.createDataDimension = function (options) { };

  workbook.prototype.createDataDimensionItem = function (options) { };

  workbook.prototype.createDimensionSelector = function (options) { };

  workbook.prototype.createDimensionSort = function (options) { };

  workbook.prototype.createExpression = function (options) { };

  workbook.prototype.createFieldContext = function (options) { };

  workbook.prototype.createLegend = function (options) { };

  workbook.prototype.createLimitingFilter = function (options) { };

  workbook.prototype.createMeasure = function (options) { };

  workbook.prototype.createMeasureSort = function (options) { };

  workbook.prototype.createPathSelector = function (options) { };

  workbook.prototype.createPivotAxis = function (options) { };

  workbook.prototype.createPivotDefinition = function (options) { };

  workbook.prototype.createSection = function (options) { };

  workbook.prototype.createSeries = function (options) { };

  workbook.prototype.createSort = function (options) { };

  workbook.prototype.createSortDefinition = function (options) { };

  workbook.prototype.createTableColumn = function (options) { };

  workbook.prototype.createTableDefinition = function (options) { };

  workbook.prototype.createTableFilter = function (options) { };

  workbook.prototype.list = function () { };

  workbook.prototype.load = function (options) { };

  // Workbook Object Methods

  Workbook.prototype.runTable = function (options) { };

  Workbook.prototype.runTablePaged = function (options) { };

  // Enum

  function Aggregation() {
    this.COUNT = "COUNT";
    this.COUNT_DISTINCT = "COUNT_DISTINCT";
    this.MAX = "MAX";
    this.MEDIAN = "MEDIAN";
    this.MIN = "MIN";
    this.SUM = "SUM";
  }

  function AspectType() {
    this.COLOR = "color";
    this.VALUE = "value";
  }

  function ChartType() {
    this.AREA = "AREA";
    this.BAR = "BAR";
    this.COLUMN = "COLUMN";
    this.LINE = "LINE";
  }

  function ConstantType() {
    this.BOOLEAN = "BOOLEAN";
    this.CURRENCY = "CURRENCY";
    this.DATE = "DATE";
    this.DATE_TIME = "DATE_TIME";
    this.DURATION = "DURATION";
    this.NUMBER = "NUMBER";
    this.TEXT = "TEXT";
  }

  function DateTimeHierarchy() {
    this.MONTH_BASED = "month";
    this.WEEK_BASED = "week";
  }

  function DateTimeProperty() {
    this.DATE = "DATE";
    this.DAY_OF_MONTH = "DAY_OF_MONTH";
    this.DAY_OF_WEEK = "DAY_OF_WEEK";
    this.MONTH = "MONTH";
    this.QUARTER = "QUARTER";
    this.WEEK_OF_YEAR = "WEEK_OF_YEAR";
    this.YEAR = "YEAR";
  }

  function ExpressionType() {
    this.AND = "AND";
    this.ANY_IN_HIERARCHY = "ANY_IN_HIERARCHY";
    this.ANY_OF = "ANY_OF";
    this.BETWEEN = "BETWEEN";
    this.CHILD_OF = "CHILD_OF";
    this.COMPARE = "COMPARE";
    this.CONSOLIDATE = "CONSOLIDATE";
    this.CURRENCY_CONVERSION = "CURRENCY_CONVERSION";
    this.DATE_RANGE_SELECTOR_ID = "DATE_RANGE_SELECTOR_ID";
    this.DATE_SELECTOR_ID = "DATE_SELECTOR_ID";
    this.DATE_TIME_PROPERTY = "DATE_TIME_PROPERTY";
    this.EQUALS = "EQUALS";
    this.FIELD = "FIELD";
    this.HIERARCHY = "HIERARCHY";
    this.HIERARCHY_TO_TEXT = "HIERARCHY_TO_TEXT";
    this.IN_RANGE = "IN_RANGE";
    this.IS_NULL = "IS_NULL";
    this.LAMBDA = "LAMBDA";
    this.NOT = "NOT";
    this.OR = "OR";
    this.RECORD_DISPLAY_VALUE = "RECORD_DISPLAY_VALUE";
    this.RECORD_KEY = "RECORD_KEY";
    this.TRUNCATE_DATE_TIME = "TRUNCATE_DATE_TIME";
  }

  function Stacking() {
    this.DISABLED = "DISABLED";
    this.NORMAL = "NORMAL";
    this.PERCENT = "PERCENT";
  }

  function TotalLine() {
    this.FIRST_LINE = "FIRST_LINE";
    this.HIDDEN = "HIDDEN";
    this.LAST_LINE = "LAST_LINE";
  }

  workbook.prototype.Aggregation = new Aggregation();

  workbook.prototype.AspectType = new AspectType();

  workbook.prototype.ChartType = new ChartType();

  workbook.prototype.ConstantType = new ConstantType();

  workbook.prototype.DateTimeHierarchy = new DateTimeHierarchy();

  workbook.prototype.DateTimeProperty = new DateTimeProperty();

  workbook.prototype.ExpressionType = new ExpressionType();

  workbook.prototype.Stacking = new Stacking();

  workbook.prototype.TotalLine = new TotalLine();

  return new workbook();
})();