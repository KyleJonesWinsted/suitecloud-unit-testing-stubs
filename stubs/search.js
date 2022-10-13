module.exports = (function () {

  // N/search Module Members

  var search = function() {};

  // Object

  var Column = function() {};

  var Filter = function() {};

  var Page = function() {};

  var PagedData = function() {};

  var Result = function() {};

  var ResultSet = function() {};

  var Search = function() {};

  var Setting = function() {};

  search.prototype.Column = Column;

  search.prototype.Filter = Filter;

  search.prototype.Page = Page;

  search.prototype.PagedData = PagedData;

  search.prototype.Result = Result;

  search.prototype.ResultSet = ResultSet;

  search.prototype.Search = Search;

  search.prototype.Setting = Setting;

  // Method

  search.prototype.create = function(options) {};

  search.prototype.create.promise = function(options) {};

  search.prototype.createColumn = function(options) {};

  search.prototype.createFilter = function(options) {};

  search.prototype.createSetting = function(options) {};

  search.prototype["delete"] = function(options) {};

  search.prototype["delete"].promise = function(options) {};

  search.prototype.duplicates = function(options) {};

  search.prototype.duplicates.promise = function(options) {};

  search.prototype.global = function(options) {};

  search.prototype.global.promise = function(options) {};

  search.prototype.load = function(options) {};

  search.prototype.load.promise = function(options) {};

  search.prototype.lookupFields = function(options) {};

  search.prototype.lookupFields.promise = function(options) {};

  // Column Object Methods

  Column.prototype.setWhenOrderedBy = function(options) {};

  // Page Object Methods

  Page.prototype.next = function() {};

  Page.prototype.next.promise = function() {};

  Page.prototype.prev = function() {};

  Page.prototype.prev.promise = function() {};

  // PagedData Object Members

  PagedData.prototype.fetch = function() {};

  PagedData.prototype.fetch.promise = function() {};

  // Result Object Methods

  Result.prototype.getText = function(options) {};

  Result.prototype.getValue = function(options) {};

  // ResultSet Object Methods

  ResultSet.prototype.each = function(callback) {};

  ResultSet.prototype.each.promise = function(callback) {};

  ResultSet.prototype.getRange = function(options) {};

  ResultSet.prototype.getRange.promise = function(options) {};

  // Search Object Methods

  Search.prototype.run = function() {};

  Search.prototype.runPaged = function() {};

  Search.prototype.runPaged.promise = function() {};

  Search.prototype.save = function() {};

  Search.prototype.save.promise = function() {};

  // Enum

  function Operator() {
    this.AFTER = "after";
    this.ALLOF = "allof";
    this.ANY = "any";
    this.ANYOF = "anyof";
    this.BEFORE = "before";
    this.BETWEEN = "between";
    this.CONTAINS = "contains";
    this.DOESNOTCONTAIN = "doesnotcontain";
    this.DOESNOTSTARTWITH = "doesnotstartwith";
    this.EQUALTO = "equalto";
    this.GREATERTHAN = "greaterthan";
    this.GREATERTHANOREQUALTO = "greaterthanorequalto";
    this.HASKEYWORDS = "haskeywords";
    this.IS = "is";
    this.ISEMPTY = "isempty";
    this.ISNOT = "isnot";
    this.ISNOTEMPTY = "isnotempty";
    this.LESSTHAN = "lessthan";
    this.LESSTHANOREQUALTO = "lessthanorequalto";
    this.NONEOF = "noneof";
    this.NOTAFTER = "notafter";
    this.NOTALLOF = "notallof";
    this.NOTBEFORE = "notbefore";
    this.NOTBETWEEN = "notbetween";
    this.NOTEQUALTO = "notequalto";
    this.NOTGREATERTHAN = "notgreaterthan";
    this.NOTGREATERTHANOREQUALTO = "notgreaterthanorequalto";
    this.NOTLESSTHAN = "notlessthan";
    this.NOTLESSTHANOREQUALTO = "notlessthanorequalto";
    this.NOTON = "noton";
    this.NOTONORAFTER = "notonorafter";
    this.NOTONORBEFORE = "notonorbefore";
    this.NOTWITHIN = "notwithin";
    this.ON = "on";
    this.ONORAFTER = "onorafter";
    this.ONORBEFORE = "onorbefore";
    this.STARTSWITH = "startswith";
    this.WITHIN = "within";
  }

  function Sort() {
    this.ASC = "ASC";
    this.DESC = "DESC";
    this.NONE = "NONE";
  }

  function Summary() {
    this.AVG = "AVG";
    this.COUNT = "COUNT";
    this.GROUP = "GROUP";
    this.MAX = "MAX";
    this.MIN = "MIN";
    this.SUM = "SUM";
  }

  function Type() {
    this.ACCOUNT = "account";
    this.ACCOUNTING_BOOK = "accountingbook";
    this.ACCOUNTING_CONTEXT = "accountingcontext";
    this.ACCOUNTING_PERIOD = "accountingperiod";
    this.ACTIVITY = "activity";
    this.ADV_INTER_COMPANY_JOURNAL_ENTRY = "advintercompanyjournalentry";
    this.AGGR_FIN_DAT = "aggrfindat";
    this.ALLOC_RECOMMENDATION_DEMAND = "allocrecommendationdemand";
    this.ALLOC_RECOMMENDATION_DETAIL = "allocrecommendationdetail";
    this.AMORTIZATION_SCHEDULE = "amortizationschedule";
    this.AMORTIZATION_TEMPLATE = "amortizationtemplate";
    this.ASSEMBLY_BUILD = "assemblybuild";
    this.ASSEMBLY_ITEM = "assemblyitem";
    this.ASSEMBLY_UNBUILD = "assemblyunbuild";
    this.AUTHENTICATE_DEVICE_INPUT = "authenticatedeviceinput";
    this.BALANCE_TRX_BY_SEGMENTS = "balancetrxbysegments";
    this.BALANCING_DETAIL = "balancingdetail";
    this.BALANCING_RESULT = "balancingresult";
    this.BALANCING_TRANSACTION = "balancingtransaction";
    this.BILLING_ACCOUNT = "billingaccount";
    this.BILLING_ACCOUNT_BILL_CYCLE = "billingaccountbillcycle";
    this.BILLING_ACCOUNT_BILL_REQUEST = "billingaccountbillrequest";
    this.BILLING_CLASS = "billingclass";
    this.BILLING_RATE_CARD = "billingratecard";
    this.BILLING_REVENUE_EVENT = "billingrevenueevent";
    this.BILLING_SCHEDULE = "billingschedule";
    this.BIN = "bin";
    this.BIN_ITEM_BALANCE = "binitembalance";
    this.BIN_TRANSFER = "bintransfer";
    this.BIN_WORKSHEET = "binworksheet";
    this.BLANKET_PURCHASE_ORDER = "blanketpurchaseorder";
    this.BOM = "bom";
    this.BOM_REVISION = "bomrevision";
    this.BONUS = "bonus";
    this.BONUS_TYPE = "bonustype";
    this.BUDGET_EXCHANGE_RATE = "budgetexchangerate";
    this.BULK_OWNERSHIP_TRANSFER = "bulkownershiptransfer";
    this.BUNDLE_INSTALLATION_SCRIPT = "bundleinstallationscript";
    this.CALENDAR_EVENT = "calendarevent";
    this.CAMPAIGN = "campaign";
    this.CARDHOLDER_AUTHENTICATION = "cardholderauthentication";
    this.CARDHOLDER_AUTHENTICATION_EVENT = "cardholderauthenticationevent";
    this.CASH_REFUND = "cashrefund";
    this.CASH_SALE = "cashsale";
    this.CHALLENGE_SHOPPER_INPUT = "challengeshopperinput";
    this.CHARGE = "charge";
    this.CHARGE_RULE = "chargerule";
    this.CHECK = "check";
    this.CLASSIFICATION = "classification";
    this.CLIENT_SCRIPT = "clientscript";
    this.CMS_CONTENT = "cmscontent";
    this.CMS_CONTENT_TYPE = "cmscontenttype";
    this.CMS_PAGE = "cmspage";
    this.COM_SEARCH_BOOST = "comsearchboost";
    this.COM_SEARCH_BOOST_TYPE = "comsearchboosttype";
    this.COM_SEARCH_GROUP_SYN = "comsearchgroupsyn";
    this.COM_SEARCH_ONE_WAY_SYN = "comsearchonewaysyn";
    this.COMMERCE_CATEGORY = "commercecategory";
    this.COMMERCE_SEARCH_ACTIVITY_DATA = "commercesearchactivitydata";
    this.COMPETITOR = "competitor";
    this.CONSOLIDATED_EXCHANGE_RATE = "consolidatedexchangerate";
    this.CONTACT = "contact";
    this.CONTACT_CATEGORY = "contactcategory";
    this.CONTACT_ROLE = "contactrole";
    this.COST_CATEGORY = "costcategory";
    this.COUPON_CODE = "couponcode";
    this.CREDIT_CARD_CHARGE = "creditcardcharge";
    this.CREDIT_CARD_REFUND = "creditcardrefund";
    this.CREDIT_MEMO = "creditmemo";
    this.CROSSCHARGEABLE = "crosschargeable";
    this.CURRENCY = "currency";
    this.CURRENCY_EXCHANGE_RATE = "currencyexchangerate";
    this.CUSTOMER = "customer";
    this.CUSTOMER_CATEGORY = "customercategory";
    this.CUSTOMER_DEPOSIT = "customerdeposit";
    this.CUSTOMER_MESSAGE = "customermessage";
    this.CUSTOMER_PAYMENT = "customerpayment";
    this.CUSTOMER_PAYMENT_AUTHORIZATION = "customerpaymentauthorization";
    this.CUSTOMER_REFUND = "customerrefund";
    this.CUSTOMER_STATUS = "customerstatus";
    this.CUSTOMER_SUBSIDIARY_RELATIONSHIP = "customersubsidiaryrelationship";
    this.CUSTOM_PURCHASE = "custompurchase";
    this.CUSTOM_RECORD = "customrecord";
    this.CUSTOM_SALE = "customsale";
    this.CUSTOM_TRANSACTION = "customtransaction";
    this.DELETED_RECORD = "deletedrecord";
    this.DEPARTMENT = "department";
    this.DEPOSIT = "deposit";
    this.DEPOSIT_APPLICATION = "depositapplication";
    this.DESCRIPTION_ITEM = "descriptionitem";
    this.DISCOUNT_ITEM = "discountitem";
    this.DOWNLOAD_ITEM = "downloaditem";
    this.EMPLOYEE = "employee";
    this.EMPLOYEE_CHANGE_REQUEST = "employeechangerequest";
    this.EMPLOYEE_CHANGE_REQUEST_TYPE = "employeechangerequesttype";
    this.EMPLOYEE_CHANGE_TYPE = "employeechangetype";
    this.EMPLOYEE_PAYROLL_ITEM = "employeepayrollitem";
    this.EMPLOYEE_STATUS = "employeestatus";
    this.END_TO_END_TIME = "endtoendtime";
    this.ENTITY = "entity";
    this.ENTITY_ACCOUNT_MAPPING = "entityaccountmapping";
    this.ESTIMATE = "estimate";
    this.EXPENSE_AMORTIZATION_EVENT = "expenseamortizationevent";
    this.EXPENSE_AMORT_PLAN_AND_SCHEDULE = "expenseamortplanandschedule";
    this.EXPENSE_CATEGORY = "expensecategory";
    this.EXPENSE_PLAN = "expenseplan";
    this.EXPENSE_REPORT = "expensereport";
    this.FAIR_VALUE_PRICE = "fairvalueprice";
    this.FIN_RPT_AGGREGATE_F_R = "finrptaggregatefr";
    this.FINANCIAL_INSTITUTION = "financialinstitution";
    this.FIXED_AMOUNT_PROJECT_REVENUE_RULE = "fixedamountprojectrevenuerule";
    this.FOLDER = "folder";
    this.FULFILLMENT_REQUEST = "fulfillmentrequest";
    this.GATEWAY_NOTIFICATION = "gatewaynotification";
    this.GENERIC_RESOURCE = "genericresource";
    this.GIFT_CERTIFICATE = "giftcertificate";
    this.GIFT_CERTIFICATE_ITEM = "giftcertificateitem";
    this.GLOBAL_ACCOUNT_MAPPING = "globalaccountmapping";
    this.GLOBAL_INVENTORY_RELATIONSHIP = "globalinventoryrelationship";
    this.GL_LINES_AUDIT_LOG = "gllinesauditlog";
    this.GL_NUMBERING_SEQUENCE = "glnumberingsequence";
    this.GOAL = "goal";
    this.INBOUND_SHIPMENT = "inboundshipment";
    this.INSTALLMENT = "installment";
    this.INTER_COMPANY_JOURNAL_ENTRY = "intercompanyjournalentry";
    this.INTER_COMPANY_TRANSFER_ORDER = "intercompanytransferorder";
    this.INVENTORY_ADJUSTMENT = "inventoryadjustment";
    this.INVENTORY_BALANCE = "inventorybalance";
    this.INVENTORY_COST_REVALUATION = "inventorycostrevaluation";
    this.INVENTORY_COUNT = "inventorycount";
    this.INVENTORY_DEMAND = "inventorydemand";
    this.INVENTORY_DETAIL = "inventorydetail";
    this.INVENTORY_ITEM = "inventoryitem";
    this.INVENTORY_NUMBER = "inventorynumber";
    this.INVENTORY_NUMBER_BIN = "inventorynumberbin";
    this.INVENTORY_NUMBER_ITEM = "inventorynumberitem";
    this.INVENTORY_STATUS = "inventorystatus";
    this.INVENTORY_STATUS_CHANGE = "inventorystatuschange";
    this.INVENTORY_STATUS_LOCATION = "inventorystatuslocation";
    this.INVENTORY_TRANSFER = "inventorytransfer";
    this.INVOICE = "invoice";
    this.INVOICE_GROUP = "invoicegroup";
    this.INVT_NUMBER_ITEM_BALANCE = "invtnumberitembalance";
    this.ISSUE = "issue";
    this.ITEM = "item";
    this.ITEM_ACCOUNT_MAPPING = "itemaccountmapping";
    this.ITEM_BIN_NUMBER = "itembinnumber";
    this.ITEM_COLLECTION = "itemcollection";
    this.ITEM_COLLECTION_ITEM_MAP = "itemcollectionitemmap";
    this.ITEM_DEMAND_PLAN = "itemdemandplan";
    this.ITEM_FULFILLMENT = "itemfulfillment";
    this.ITEM_GROUP = "itemgroup";
    this.ITEM_LOCATION_CONFIGURATION = "itemlocationconfiguration";
    this.ITEM_PROCESS_FAMILY = "itemprocessfamily";
    this.ITEM_PROCESS_GROUP = "itemprocessgroup";
    this.ITEM_RECEIPT = "itemreceipt";
    this.ITEM_REVISION = "itemrevision";
    this.ITEM_SUPPLY_PLAN = "itemsupplyplan";
    this.JOB = "job";
    this.JOB_STATUS = "jobstatus";
    this.JOB_TYPE = "jobtype";
    this.JOURNAL_ENTRY = "journalentry";
    this.KIT_ITEM = "kititem";
    this.LABOR_BASED_PROJECT_REVENUE_RULE = "laborbasedprojectrevenuerule";
    this.LABOR_CATEGORY = "laborcategory";
    this.LABOR_COST_CARD = "laborcostcard";
    this.LABOR_COST_CARD_ITEM = "laborcostcarditem";
    this.LABOR_COST_ELEMENT = "laborcostelement";
    this.LEAD = "lead";
    this.LOCATION = "location";
    this.LOT_NUMBERED_ASSEMBLY_ITEM = "lotnumberedassemblyitem";
    this.LOT_NUMBERED_INVENTORY_ITEM = "lotnumberedinventoryitem";
    this.MANUFACTURING_COST_TEMPLATE = "manufacturingcosttemplate";
    this.MANUFACTURING_OPERATION_TASK = "manufacturingoperationtask";
    this.MANUFACTURING_ROUTING = "manufacturingrouting";
    this.MAP_REDUCE_SCRIPT = "mapreducescript";
    this.MARKUP_ITEM = "markupitem";
    this.MASSUPDATE_SCRIPT = "massupdatescript";
    this.MEM_DOC = "memdoc";
    this.MERCHANDISE_HIERARCHY_LEVEL = "merchandisehierarchylevel";
    this.MERCHANDISE_HIERARCHY_NODE = "merchandisehierarchynode";
    this.MERCHANDISE_HIERARCHY_VERSION = "merchandisehierarchyversion";
    this.MESSAGE = "message";
    this.MFG_PLANNED_TIME = "mfgplannedtime";
    this.NEXUS = "nexus";
    this.NON_INVENTORY_ITEM = "noninventoryitem";
    this.NOTE = "note";
    this.NOTE_TYPE = "notetype";
    this.OPPORTUNITY = "opportunity";
    this.ORDER_TYPE = "ordertype";
    this.OTHER_CHARGE_ITEM = "otherchargeitem";
    this.OTHER_NAME = "othername";
    this.OTHER_NAME_CATEGORY = "othernamecategory";
    this.PARTNER = "partner";
    this.PARTNER_CATEGORY = "partnercategory";
    this.PAYCHECK = "paycheck";
    this.PAYCHECK_JOURNAL = "paycheckjournal";
    this.PAYMENT_EVENT = "paymentevent";
    this.PAYMENT_INSTRUMENT = "paymentinstrument";
    this.PAYMENT_ITEM = "paymentitem";
    this.PAYMENT_METHOD = "paymentmethod";
    this.PAYMENT_OPTION = "paymentoption";
    this.PAYMENT_RESULT_PREVIEW = "paymentresultpreview";
    this.PAYROLL_SETUP = "payrollsetup";
    this.PAYROLL_ITEM = "payrollitem";
    this.PCT_COMPLETE_PROJECT_REVENUE_RULE = "pctcompleteprojectrevenuerule";
    this.PERFORMANCE_METRIC = "performancemetric";
    this.PERFORMANCE_REVIEW = "performancereview";
    this.PERFORMANCE_REVIEW_SCHEDULE = "performancereviewschedule";
    this.PERIOD_END_JOURNAL = "periodendjournal";
    this.PERMISSION = "permission";
    this.PHONE_CALL = "phonecall";
    this.PICK_STRATEGY = "pickstrategy";
    this.PICK_TASK = "picktask";
    this.PLANNED_ORDER = "plannedorder";
    this.PROJECT_TEMPLATE = "projecttemplate";
    this.PLANNING_ITEM_CATEGORY = "planningitemcategory";
    this.PLANNING_ITEM_GROUP = "planningitemgroup";
    this.PLANNING_RULE_GROUP = "planningrulegroup";
    this.PLANNING_VIEW = "planningview";
    this.PORTLET = "portlet";
    this.PRICE_BOOK = "pricebook";
    this.PRICE_LEVEL = "pricelevel";
    this.PRICE_PLAN = "priceplan";
    this.PRICING = "pricing";
    this.PRICING_GROUP = "pricinggroup";
    this.PROJECT_EXPENSE_TYPE = "projectexpensetype";
    this.PROJECT_IC_CHARGE_REQUEST = "projecticchargerequest";
    this.PROJECT_TASK = "projecttask";
    this.PROMISING_SETUP = "promisingsetup";
    this.PROMOTION_CODE = "promotioncode";
    this.PROSPECT = "prospect";
    this.PURCHASE_CONTRACT = "purchasecontract";
    this.PURCHASE_ORDER = "purchaseorder";
    this.PURCHASE_REQUISITION = "purchaserequisition";
    this.RECENT_RECORD = "recentrecord";
    this.RES_ALLOCATION_TIME_OFF_CONFLICT = "resallocationtimeoffconflict";
    this.RESOURCE_ALLOCATION = "resourceallocation";
    this.RESTLET = "restlet";
    this.RETURN_AUTHORIZATION = "returnauthorization";
    this.REVENUE_ARRANGEMENT = "revenuearrangement";
    this.REVENUE_COMMITMENT = "revenuecommitment";
    this.REVENUE_COMMITMENT_REVERSAL = "revenuecommitmentreversal";
    this.REVENUE_PLAN = "revenueplan";
    this.REV_REC_PLAN_AND_SCHEDULE = "revrecplanandschedule";
    this.REV_REC_SCHEDULE = "revrecschedule";
    this.REV_REC_TEMPLATE = "revrectemplate";
    this.ROLE = "role";
    this.S_C_M_PREDICTED_RISKS = "scmpredictedrisks";
    this.S_C_M_PREDICTION_TRAIN_HISTORY = "scmpredictiontrainhistory";
    this.SALES_ORDER = "salesorder";
    this.SALES_ROLE = "salesrole";
    this.SALES_TAX_ITEM = "salestaxitem";
    this.SAVED_SEARCH = "savedsearch";
    this.SCHEDULED_SCRIPT = "scheduledscript";
    this.SCHEDULED_SCRIPT_INSTANCE = "scheduledscriptinstance";
    this.SCRIPT_DEPLOYMENT = "scriptdeployment";
    this.SERIALIZED_ASSEMBLY_ITEM = "serializedassemblyitem";
    this.SERIALIZED_INVENTORY_ITEM = "serializedinventoryitem";
    this.SERVICE_ITEM = "serviceitem";
    this.SHIP_ITEM = "shipitem";
    this.SHOPPING_CART = "shoppingcart";
    this.SOLUTION = "solution";
    this.STATE = "state";
    this.STATISTICAL_JOURNAL_ENTRY = "statisticaljournalentry";
    this.STORE_PICKUP_FULFILLMENT = "storepickupfulfillment";
    this.SUBSCRIPTION = "subscription";
    this.SUBSCRIPTION_CHANGE_ORDER = "subscriptionchangeorder";
    this.SUBSCRIPTION_LINE = "subscriptionline";
    this.SUBSCRIPTION_LINE_REVISION = "subscriptionlinerevision";
    this.SUBSCRIPTION_PLAN = "subscriptionplan";
    this.SUBSCRIPTION_RENEWAL_HISTORY = "subscriptionrenewalhistory";
    this.SUBSIDIARY = "subsidiary";
    this.SUBTOTAL_ITEM = "subtotalitem";
    this.SUITELET = "suitelet";
    this.SUITE_SCRIPT_DETAIL = "suitescriptdetail";
    this.SUPPLY_CHAIN_SNAPSHOT = "supplychainsnapshot";
    this.SUPPLY_CHAIN_SNAPSHOT_DETAILS = "supplychainsnapshotdetails";
    this.SUPPLY_CHANGE_ORDER = "supplychangeorder";
    this.SUPPLY_PLAN_DEFINITION = "supplyplandefinition";
    this.SUPPORT_CASE = "supportcase";
    this.SYSTEM_NOTE = "systemnote";
    this.TASK = "task";
    this.TAX_DETAIL = "taxdetail";
    this.TAX_GROUP = "taxgroup";
    this.TAX_PERIOD = "taxperiod";
    this.TAX_TYPE = "taxtype";
    this.TERM = "term";
    this.TIMESHEET_APPROVAL = "timesheetapproval";
    this.TIME_APPROVAL = "timeapproval";
    this.TIME_BILL = "timebill";
    this.TIME_ENTRY = "timeentry";
    this.TIME_OFF_CHANGE = "timeoffchange";
    this.TIME_OFF_PLAN = "timeoffplan";
    this.TIME_OFF_REQUEST = "timeoffrequest";
    this.TIME_OFF_RULE = "timeoffrule";
    this.TIME_OFF_TYPE = "timeofftype";
    this.TIME_SHEET = "timesheet";
    this.TOPIC = "topic";
    this.TRANSACTION = "transaction";
    this.TRANSFER_ORDER = "transferorder";
    this.UBER = "uber";
    this.UNITS_TYPE = "unitstype";
    this.UNLOCKED_TIME_PERIOD = "unlockedtimeperiod";
    this.USAGE = "usage";
    this.USEREVENT_SCRIPT = "usereventscript";
    this.VENDOR = "vendor";
    this.VENDOR_BILL = "vendorbill";
    this.VENDOR_CATEGORY = "vendorcategory";
    this.VENDOR_CREDIT = "vendorcredit";
    this.VENDOR_PAYMENT = "vendorpayment";
    this.VENDOR_PREPAYMENT_APPLICATION = "vendorprepaymentapplication";
    this.VENDOR_RETURN_AUTHORIZATION = "vendorreturnauthorization";
    this.VENDOR_SUBSIDIARY_RELATIONSHIP = "vendorsubsidiaryrelationship";
    this.WAVE = "wave";
    this.WBS = "wbs";
    this.WEBSITE = "website";
    this.WORKFLOW_ACTION_SCRIPT = "workflowactionscript";
    this.WORK_ORDER = "workorder";
    this.WORK_ORDER_CLOSE = "workorderclose";
    this.WORK_ORDER_COMPLETION = "workordercompletion";
    this.WORK_ORDER_ISSUE = "workorderissue";
    this.WORKPLACE = "workplace";
    this.ZONE = "zone";
  }

  search.prototype.Operator = new Operator();

  search.prototype.Sort = new Sort();

  search.prototype.Summary = new Summary();

  search.prototype.Type = new Type();

  return new search();
})();