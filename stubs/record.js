module.exports = (function () {

  // N/record Module Members

  var record = function () { };

  // Object

  var Column = function () { };

  var Field = function () { };

  var Macro = function (options) { };

  var Record = function () { };

  var Sublist = function () { };

  record.prototype.Column = Column;

  record.prototype.Field = Field;

  record.prototype.Macro = Macro;

  record.prototype.Record = Record;

  record.prototype.Sublist = Sublist;

  // Method

  record.prototype.attach = function (options) { };

  record.prototype.attach.promise = function (options) { };

  record.prototype.copy = function (options) { };

  record.prototype.copy.promise = function (options) { };

  record.prototype.create = function (options) { };

  record.prototype.create.promise = function (options) { };

  record.prototype["delete"] = function (options) { };

  record.prototype["delete"].promise = function (options) { };

  record.prototype.detach = function (options) { };

  record.prototype.detach.promise = function (options) { };

  record.prototype.load = function (options) { };

  record.prototype.load.promise = function (options) { };

  record.prototype.submitFields = function (options) { };

  record.prototype.submitFields.promise = function (options) { };

  record.prototype.transform = function (options) { };

  record.prototype.transform.promise = function (options) { };

  // Field Object Methods

  Field.prototype.getSelectOptions = function (options) { };

  // Macro Object Methods

  Macro.prototype.execute = function (options) { };

  Macro.prototype.execute.promise = function (options) { };

  Macro.promise = function (options) { };

  // Record Object Methods

  Record.prototype.cancelLine = function (options) { };

  Record.prototype.commitLine = function (options) { };

  Record.prototype.executeMacro = function (options) { };

  Record.prototype.findMatrixSublistLineWithValue = function (options) { };

  Record.prototype.findSublistLineWithValue = function (options) { };

  Record.prototype.getCurrentMatrixSublistValue = function (options) { };

  Record.prototype.getCurrentSublistField = function (options) { };

  Record.prototype.getCurrentSublistIndex = function (options) { };

  Record.prototype.getCurrentSublistSubrecord = function (options) { };

  Record.prototype.getCurrentSublistText = function (options) { };

  Record.prototype.getCurrentSublistValue = function (options) { };

  Record.prototype.getField = function (options) { };

  Record.prototype.getFields = function () { };

  Record.prototype.getLineCount = function (options) { };

  Record.prototype.getMacro = function (options) { };

  Record.prototype.getMacros = function () { };

  Record.prototype.getMatrixHeaderCount = function (options) { };

  Record.prototype.getMatrixHeaderField = function (options) { };

  Record.prototype.getMatrixHeaderValue = function (options) { };

  Record.prototype.getMatrixSublistField = function (options) { };

  Record.prototype.getMatrixSublistValue = function (options) { };

  Record.prototype.getSublist = function (options) { };

  Record.prototype.getSublists = function () { };

  Record.prototype.getSublistField = function (options) { };

  Record.prototype.getSublistFields = function (options) { };

  Record.prototype.getSublistSubrecord = function (options) { };

  Record.prototype.getSublistText = function (options) { };

  Record.prototype.getSublistValue = function (options) { };

  Record.prototype.getSubrecord = function (options) { };

  Record.prototype.getText = function (options) { };

  Record.prototype.getValue = function (options) { };

  Record.prototype.hasCurrentSublistSubrecord = function (options) { };

  Record.prototype.hasSublistSubrecord = function (options) { };

  Record.prototype.hasSubrecord = function (options) { };

  Record.prototype.insertLine = function (options) { };

  Record.prototype.removeCurrentSublistSubrecord = function (options) { };

  Record.prototype.removeLine = function (options) { };

  Record.prototype.removeSublistSubrecord = function (options) { };

  Record.prototype.removeSubrecord = function (options) { };

  Record.prototype.save = function (options) { };

  Record.prototype.save.promise = function (options) { };

  Record.prototype.selectLine = function (options) { };

  Record.prototype.selectNewLine = function (options) { };

  Record.prototype.setCurrentMatrixSublistValue = function (options) { };

  Record.prototype.setCurrentSublistText = function (options) { };

  Record.prototype.setCurrentSublistValue = function (options) { };

  Record.prototype.setMatrixHeaderValue = function (options) { };

  Record.prototype.setMatrixSublistValue = function (options) { };

  Record.prototype.setSublistText = function (options) { };

  Record.prototype.setSublistValue = function (options) { };

  Record.prototype.setText = function (options) { };

  Record.prototype.setValue = function (options) { };

  // Sublist Object Methods

  Sublist.prototype.getColumn = function (options) { };

  // Enum

  function Type() {
    this.ACCOUNT = 'account';
    this.ACCOUNTING_BOOK = 'accountingbook';
    this.ACCOUNTING_CONTEXT = 'accountingcontext';
    this.ACCOUNTING_PERIOD = 'accountingperiod';
    this.ADV_INTER_COMPANY_JOURNAL_ENTRY = 'advintercompanyjournalentry';
    this.ALLOCATION_SCHEDULE = 'allocationschedule';
    this.AMORTIZATION_SCHEDULE = 'amortizationschedule';
    this.AMORTIZATION_TEMPLATE = 'amortizationtemplate';
    this.AS_CHARGED_PROJECT_REVENUE_RULE = 'aschargedprojectrevenuerule';
    this.ASSEMBLY_BUILD = 'assemblybuild';
    this.ASSEMBLY_ITEM = 'assemblyitem';
    this.ASSEMBLY_UNBUILD = 'assemblyunbuild';
    this.BALANCE_TRX_BY_SEGMENTS = 'balancetrxbysegments';
    this.BILLING_ACCOUNT = 'billingaccount';
    this.BILLING_CLASS = 'billingclass';
    this.BILLING_RATE_CARD = 'billingratecard';
    this.BILLING_REVENUE_EVENT = 'billingrevenueevent';
    this.BILLING_SCHEDULE = 'billingschedule';
    this.BIN = 'bin';
    this.BIN_TRANSFER = 'bintransfer';
    this.BIN_WORKSHEET = 'binworksheet';
    this.BLANKET_PURCHASE_ORDER = 'blanketpurchaseorder';
    this.BOM = 'bom';
    this.BOM_REVISION = 'bomrevision';
    this.BONUS = 'bonus';
    this.BONUS_TYPE = 'bonustype';
    this.BUDGET_EXCHANGE_RATE = 'budgetexchangerate';
    this.BULK_OWNERSHIP_TRANSFER = 'bulkownershiptransfer';
    this.BUNDLE_INSTALLATION_SCRIPT = 'bundleinstallationscript';
    this.CALENDAR_EVENT = 'calendarevent';
    this.CAMPAIGN = 'campaign';
    this.CAMPAIGN_RESPONSE = 'campaignresponse';
    this.CAMPAIGN_TEMPLATE = 'campaigntemplate';
    this.CASH_REFUND = 'cashrefund';
    this.CASH_SALE = 'cashsale';
    this.CHARGE = 'charge';
    this.CHARGE_RULE = 'chargerule';
    this.CHECK = 'check';
    this.CLASSIFICATION = 'classification';
    this.CLIENT_SCRIPT = 'clientscript';
    this.CMS_CONTENT = 'cmscontent';
    this.CMS_CONTENT_TYPE = 'cmscontenttype';
    this.CMS_PAGE = 'cmspage';
    this.COMMERCE_CATEGORY = 'commercecategory';
    this.COMPETITOR = 'competitor';
    this.CONSOLIDATED_EXCHANGE_RATE = 'consolidatedexchangerate';
    this.CONTACT = 'contact';
    this.CONTACT_CATEGORY = 'contactcategory';
    this.CONTACT_ROLE = 'contactrole';
    this.COST_CATEGORY = 'costcategory';
    this.COUPON_CODE = 'couponcode';
    this.CREDIT_CARD_CHARGE = 'creditcardcharge';
    this.CREDIT_CARD_REFUND = 'creditcardrefund';
    this.CREDIT_MEMO = 'creditmemo';
    this.CURRENCY = 'currency';
    this.CUSTOM_PURCHASE = 'custompurchase';
    this.CUSTOMER = 'customer';
    this.CUSTOMER_CATEGORY = 'customercategory';
    this.CUSTOMER_DEPOSIT = 'customerdeposit';
    this.CUSTOMER_MESSAGE = 'customermessage';
    this.CUSTOMER_PAYMENT = 'customerpayment';
    this.CUSTOMER_PAYMENT_AUTHORIZATION = 'customerpaymentauthorization';
    this.CUSTOM_RECORD = 'customrecord';
    this.CUSTOMER_REFUND = 'customerrefund';
    this.CUSTOMER_STATUS = 'customerstatus';
    this.CUSTOMER_SUBSIDIARY_RELATIONSHIP = 'customersubsidiaryrelationship';
    this.CUSTOM_TRANSACTION = 'customtransaction';
    this.DEPARTMENT = 'department';
    this.DEPOSIT = 'deposit';
    this.DEPOSIT_APPLICATION = 'depositapplication';
    this.DESCRIPTION_ITEM = 'descriptionitem';
    this.DISCOUNT_ITEM = 'discountitem';
    this.DOWNLOAD_ITEM = 'downloaditem';
    this.EMAIL_TEMPLATE = 'emailtemplate';
    this.EMPLOYEE = 'employee';
    this.EMPLOYEE_CHANGE_REQUEST = 'employeechangerequest';
    this.EMPLOYEE_CHANGE_TYPE = 'employeechangetype';
    this.ENTITY_ACCOUNT_MAPPING = 'entityaccountmapping';
    this.ESTIMATE = 'estimate';
    this.EXPENSE_AMORTIZATION_EVENT = 'expenseamortizationevent';
    this.EXPENSE_CATEGORY = 'expensecategory';
    this.EXPENSE_PLAN = 'expenseplan';
    this.EXPENSE_REPORT = 'expensereport';
    this.FAIR_VALUE_PRICE = 'fairvalueprice';
    this.FINANCIAL_INSTITUTION = 'financialinstitution';
    this.FIXED_AMOUNT_PROJECT_REVENUE_RULE = 'fixedamountprojectrevenuerule';
    this.FOLDER = 'folder';
    this.FULFILLMENT_REQUEST = 'fulfillmentrequest';
    this.GENERAL_TOKEN = 'generaltoken';
    this.GENERIC_RESOURCE = 'genericresource';
    this.GIFT_CERTIFICATE = 'giftcertificate';
    this.GIFT_CERTIFICATE_ITEM = 'giftcertificateitem';
    this.GLOBAL_ACCOUNT_MAPPING = 'globalaccountmapping';
    this.GLOBAL_INVENTORY_RELATIONSHIP = 'globalinventoryrelationship';
    this.GL_NUMBERING_SEQUENCE = 'glnumberingsequence';
    this.GOAL = 'goal';
    this.INBOUND_SHIPMENT = 'inboundshipment';
    this.INTERCOMP_ALLOCATION_SCHEDULE = 'intercompallocationschedule';
    this.INTER_COMPANY_JOURNAL_ENTRY = 'intercompanyjournalentry';
    this.INTER_COMPANY_TRANSFER_ORDER = 'intercompanytransferorder';
    this.INVENTORY_ADJUSTMENT = 'inventoryadjustment';
    this.INVENTORY_COST_REVALUATION = 'inventorycostrevaluation';
    this.INVENTORY_COUNT = 'inventorycount';
    this.INVENTORY_DETAIL = 'inventorydetail';
    this.INVENTORY_ITEM = 'inventoryitem';
    this.INVENTORY_NUMBER = 'inventorynumber';
    this.INVENTORY_STATUS = 'inventorystatus';
    this.INVENTORY_STATUS_CHANGE = 'inventorystatuschange';
    this.INVENTORY_TRANSFER = 'inventorytransfer';
    this.INVOICE = 'invoice';
    this.ISSUE = 'issue';
    this.ISSUE_PRODUCT = 'issueproduct';
    this.ISSUE_PRODUCT_VERSION = 'issueproductversion';
    this.ITEM_ACCOUNT_MAPPING = 'itemaccountmapping';
    this.ITEM_COLLECTION = 'itemcollection';
    this.ITEM_COLLECTION_ITEM_MAP = 'itemcollectionitemmap';
    this.ITEM_DEMAND_PLAN = 'itemdemandplan';
    this.ITEM_FULFILLMENT = 'itemfulfillment';
    this.ITEM_GROUP = 'itemgroup';
    this.ITEM_LOCATION_CONFIGURATION = 'itemlocationconfiguration';
    this.ITEM_PROCESS_FAMILY = 'itemprocessfamily';
    this.ITEM_PROCESS_GROUP = 'itemprocessgroup';
    this.ITEM_RECEIPT = 'itemreceipt';
    this.ITEM_REVISION = 'itemrevision';
    this.ITEM_SUPPLY_PLAN = 'itemsupplyplan';
    this.JOB = 'job';
    this.JOB_STATUS = 'jobstatus';
    this.JOB_TYPE = 'jobtype';
    this.JOURNAL_ENTRY = 'journalentry';
    this.KIT_ITEM = 'kititem';
    this.LABOR_BASED_PROJECT_REVENUE_RULE = 'laborbasedprojectrevenuerule';
    this.LEAD = 'lead';
    this.LOCATION = 'location';
    this.LOT_NUMBERED_ASSEMBLY_ITEM = 'lotnumberedassemblyitem';
    this.LOT_NUMBERED_INVENTORY_ITEM = 'lotnumberedinventoryitem';
    this.MANUFACTURING_COST_TEMPLATE = 'manufacturingcosttemplate';
    this.MANUFACTURING_OPERATION_TASK = 'manufacturingoperationtask';
    this.MANUFACTURING_ROUTING = 'manufacturingrouting';
    this.MAP_REDUCE_SCRIPT = 'mapreducescript';
    this.MARKUP_ITEM = 'markupitem';
    this.MASSUPDATE_SCRIPT = 'massupdatescript';
    this.MEM_DOC = 'memdoc';
    this.MERCHANDISE_HIERARCHY_LEVEL = 'merchandisehierarchylevel';
    this.MERCHANDISE_HIERARCHY_NODE = 'merchandisehierarchynode';
    this.MERCHANDISE_HIERARCHY_VERSION = 'merchandisehierarchyversion';
    this.MESSAGE = 'message';
    this.MFG_PLANNED_TIME = 'mfgplannedtime';
    this.NEXUS = 'nexus';
    this.NON_INVENTORY_ITEM = 'noninventoryitem';
    this.NOTE = 'note';
    this.NOTE_TYPE = 'notetype';
    this.OPPORTUNITY = 'opportunity';
    this.ORDER_SCHEDULE = 'orderschedule';
    this.OTHER_CHARGE_ITEM = 'otherchargeitem';
    this.OTHER_NAME = 'othername';
    this.OTHER_NAME_CATEGORY = 'othernamecategory';
    this.PARTNER = 'partner';
    this.PARTNER_CATEGORY = 'partnercategory';
    this.PARTNER_COMMISSION_PLAN = 'partnercommissionplan';
    this.PAYCHECK = 'paycheck';
    this.PAYCHECK_JOURNAL = 'paycheckjournal';
    this.PAYMENT_CARD = 'paymentcard';
    this.PAYMENT_CARD_TOKEN = 'paymentcardtoken';
    this.PAYMENT_ITEM = 'paymentitem';
    this.PAYMENT_METHOD = 'paymentmethod';
    this.PAYROLL_ITEM = 'payrollitem';
    this.PCT_COMPLETE_PROJECT_REVENUE_RULE = 'pctcompleteprojectrevenuerule';
    this.PERFORMANCE_METRIC = 'performancemetric';
    this.PERFORMANCE_REVIEW = 'performancereview';
    this.PERFORMANCE_REVIEW_SCHEDULE = 'performancereviewschedule';
    this.PERIOD_END_JOURNAL = 'periodendjournal';
    this.PHONE_CALL = 'phonecall';
    this.PICK_STRATEGY = 'pickstrategy';
    this.PICK_TASK = 'picktask';
    this.PORTLET = 'portlet';
    this.PRICE_BOOK = 'pricebook';
    this.PRICE_LEVEL = 'pricelevel';
    this.PRICE_PLAN = 'priceplan';
    this.PRICING_GROUP = 'pricinggroup';
    this.PROJECT_EXPENSE_TYPE = 'projectexpensetype';
    this.PROJECT_TASK = 'projecttask';
    this.PROJECT_TEMPLATE = 'projecttemplate';
    this.PROMOTION_CODE = 'promotioncode';
    this.PROSPECT = 'prospect';
    this.PURCHASE_CONTRACT = 'purchasecontract';
    this.PURCHASE_ORDER = 'purchaseorder';
    this.PURCHASE_REQUISITION = 'purchaserequisition';
    this.REALLOCATE_ITEM = 'reallocateitem';
    this.RECEIVE_INBOUND_SHIPMENT = 'receiveinboundshipment';
    this.RESOURCE_ALLOCATION = 'resourceallocation';
    this.RESTLET = 'restlet';
    this.RETURN_AUTHORIZATION = 'returnauthorization';
    this.REVENUE_ARRANGEMENT = 'revenuearrangement';
    this.REVENUE_COMMITMENT = 'revenuecommitment';
    this.REVENUE_COMMITMENT_REVERSAL = 'revenuecommitmentreversal';
    this.REVENUE_PLAN = 'revenueplan';
    this.REV_REC_SCHEDULE = 'revrecschedule';
    this.REV_REC_TEMPLATE = 'revrectemplate';
    this.SALES_ORDER = 'salesorder';
    this.SALES_ROLE = 'salesrole';
    this.SALES_TAX_ITEM = 'salestaxitem';
    this.SCHEDULED_SCRIPT = 'scheduledscript';
    this.SCHEDULED_SCRIPT_INSTANCE = 'scheduledscriptinstance';
    this.SCRIPT_DEPLOYMENT = 'scriptdeployment';
    this.SERIALIZED_ASSEMBLY_ITEM = 'serializedassemblyitem';
    this.SERIALIZED_INVENTORY_ITEM = 'serializedinventoryitem';
    this.SERVICE_ITEM = 'serviceitem';
    this.SHIP_ITEM = 'shipitem';
    this.SOLUTION = 'solution';
    this.STATISTICAL_JOURNAL_ENTRY = 'statisticaljournalentry';
    this.STORE_PICKUP_FULFILLMENT = 'storepickupfulfillment';
    this.SUBSCRIPTION = 'subscription';
    this.SUBSCRIPTION_CHANGE_ORDER = 'subscriptionchangeorder';
    this.SUBSCRIPTION_LINE = 'subscriptionline';
    this.SUBSCRIPTION_PLAN = 'subscriptionplan';
    this.SUBSIDIARY = 'subsidiary';
    this.SUBSIDIARY_SETTINGS = 'subsidiarysettings';
    this.SUBTOTAL_ITEM = 'subtotalitem';
    this.SUITELET = 'suitelet';
    this.SUPPLY_CHAIN_SNAPSHOT = 'supplychainsnapshot';
    this.SUPPLY_CHAIN_SNAPSHOT_SIMULATION = 'supplychainsnapshotsimulation';
    this.SUPPORT_CASE = 'supportcase';
    this.TASK = 'task';
    this.TAX_ACCT = 'taxacct';
    this.TAX_GROUP = 'taxgroup';
    this.TAX_PERIOD = 'taxperiod';
    this.TAX_TYPE = 'taxtype';
    this.TERM = 'term';
    this.TIME_BILL = 'timebill';
    this.TIME_ENTRY = 'timeentry';
    this.TIME_OFF_CHANGE = 'timeoffchange';
    this.TIME_OFF_PLAN = 'timeoffplan';
    this.TIME_OFF_REQUEST = 'timeoffrequest';
    this.TIME_OFF_RULE = 'timeoffrule';
    this.TIME_OFF_TYPE = 'timeofftype';
    this.TIME_SHEET = 'timesheet';
    this.TOPIC = 'topic';
    this.TRANSFER_ORDER = 'transferorder';
    this.UNITS_TYPE = 'unitstype';
    this.UNLOCKED_TIME_PERIOD = 'unlockedtimeperiod';
    this.USAGE = 'usage';
    this.USEREVENT_SCRIPT = 'usereventscript';
    this.VENDOR = 'vendor';
    this.VENDOR_BILL = 'vendorbill';
    this.VENDOR_CATEGORY = 'vendorcategory';
    this.VENDOR_CREDIT = 'vendorcredit';
    this.VENDOR_PAYMENT = 'vendorpayment';
    this.VENDOR_PREPAYMENT = 'vendorprepayment';
    this.VENDOR_PREPAYMENT_APPLICATION = 'vendorprepaymentapplication';
    this.VENDOR_RETURN_AUTHORIZATION = 'vendorreturnauthorization';
    this.VENDOR_SUBSIDIARY_RELATIONSHIP = 'vendorsubsidiaryrelationship';
    this.WAVE = 'wave';
    this.WBS = 'wbs';
    this.WEBSITE = 'website';
    this.WORKFLOW_ACTION_SCRIPT = 'workflowactionscript';
    this.WORK_ORDER = 'workorder';
    this.WORK_ORDER_CLOSE = 'workorderclose';
    this.WORK_ORDER_COMPLETION = 'workordercompletion';
    this.WORK_ORDER_ISSUE = 'workorderissue';
    this.WORKPLACE = 'workplace';
    this.ZONE = 'zone';
  }

  record.prototype.Type = new Type();

  return new record();

})();