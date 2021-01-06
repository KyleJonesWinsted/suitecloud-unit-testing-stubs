module.exports = (function () {

  // N/record Module Members

  var record = function() {};

  // Object

  var Column = function() {};

  var Field = function() {};

  var Macro = function(options) {};

  var Record = function() {};

  var Sublist = function() {};

  record.prototype.Column = Column;
  
  record.prototype.Field = Field;
  
  record.prototype.Macro = Macro;

  record.prototype.Record = Record;

  record.prototype.Sublist = Sublist;

  // Method

  record.prototype.attach = function(options) {};

  record.prototype.attach.promise = function(options) {};

  record.prototype.copy = function(options) {};

  record.prototype.copy.promise = function(options) {};

  record.prototype.create = function(options) {};

  record.prototype.create.promise = function(options) {};

  record.prototype["delete"] = function(options) {};

  record.prototype["delete"].promise = function(options) {};

  record.prototype.detach = function(options) {};

  record.prototype.detach.promise = function(options) {};

  record.prototype.load = function(options) {};

  record.prototype.load.promise = function(options) {};

  record.prototype.submitFields = function(options) {};

  record.prototype.submitFields.promise = function(options) {};

  record.prototype.transform = function(options) {};

  record.prototype.transform.promise = function(options) {};

  // Field Object Methods

  Field.prototype.getSelectOptions = function(options) {};

  // Macro Object Methods

  Macro.prototype.execute = function(options) {};

  Macro.prototype.execute.promise = function(options) {};

  Macro.promise = function(options) {};

  // Record Object Methods

  Record.prototype.cancelLine = function(options) {};

  Record.prototype.commitLine = function(options) {};

  Record.prototype.executeMacro = function(options) {};

  Record.prototype.findMatrixSublistLineWithValue = function(options) {};

  Record.prototype.findSublistLineWithValue = function(options) {};

  Record.prototype.getCurrentMatrixSublistValue = function(options) {};

  Record.prototype.getCurrentSublistField = function(options) {};

  Record.prototype.getCurrentSublistIndex = function(options) {};

  Record.prototype.getCurrentSublistSubrecord = function(options) {};

  Record.prototype.getCurrentSublistText = function(options) {};

  Record.prototype.getCurrentSublistValue = function(options) {};

  Record.prototype.getField = function(options) {};

  Record.prototype.getFields = function() {};

  Record.prototype.getLineCount = function(options) {};

  Record.prototype.getMacro = function(options) {};

  Record.prototype.getMacros = function() {};

  Record.prototype.getMatrixHeaderCount = function(options) {};

  Record.prototype.getMatrixHeaderField = function(options) {};

  Record.prototype.getMatrixHeaderValue = function(options) {};

  Record.prototype.getMatrixSublistField = function(options) {};

  Record.prototype.getMatrixSublistValue = function(options) {};

  Record.prototype.getSublist = function(options) {};

  Record.prototype.getSublists = function() {};

  Record.prototype.getSublistField = function(options) {};

  Record.prototype.getSublistFields = function(options) {};

  Record.prototype.getSublistSubrecord = function(options) {};

  Record.prototype.getSublistText = function(options) {};

  Record.prototype.getSublistValue = function(options) {};

  Record.prototype.getSubrecord = function(options) {};

  Record.prototype.getText = function(options) {};

  Record.prototype.getValue = function(options) {};

  Record.prototype.hasCurrentSublistSubrecord = function(options) {};

  Record.prototype.hasSublistSubrecord = function(options) {};

  Record.prototype.hasSubrecord = function(options) {};

  Record.prototype.insertLine = function(options) {};

  Record.prototype.removeCurrentSublistSubrecord = function(options) {};

  Record.prototype.removeLine = function(options) {};

  Record.prototype.removeSublistSubrecord = function(options) {};

  Record.prototype.removeSubrecord = function(options) {};

  Record.prototype.save = function(options) {};

  Record.prototype.save.promise = function(options) {};

  Record.prototype.selectLine = function(options) {};

  Record.prototype.selectNewLine = function(options) {};

  Record.prototype.setCurrentMatrixSublistValue = function(options) {};

  Record.prototype.setCurrentSublistText = function(options) {};

  Record.prototype.setCurrentSublistValue = function(options) {};

  Record.prototype.setMatrixHeaderValue = function(options) {};

  Record.prototype.setMatrixSublistValue = function(options) {};

  Record.prototype.setSublistText = function(options) {};

  Record.prototype.setSublistValue = function(options) {};

  Record.prototype.setText = function(options) {};

  Record.prototype.setValue = function(options) {};

  // Sublist Object Methods

  Sublist.prototype.getColumn = function(options) {};

  // Enum

  function Type() {
    this.ACCOUNT = 'ACCOUNT';
    this.ACCOUNTING_BOOK = 'ACCOUNTINGBOOK';
    this.ACCOUNTING_CONTEXT = 'ACCOUNTINGCONTEXT';
    this.ACCOUNTING_PERIOD = 'ACCOUNTINGPERIOD';
    this.ADV_INTER_COMPANY_JOURNAL_ENTRY = 'ADVINTERCOMPANYJOURNALENTRY';
    this.ALLOCATION_SCHEDULE = 'ALLOCATIONSCHEDULE';
    this.AMORTIZATION_SCHEDULE = 'AMORTIZATIONSCHEDULE';
    this.AMORTIZATION_TEMPLATE = 'AMORTIZATIONTEMPLATE';
    this.AS_CHARGED_PROJECT_REVENUE_RULE = 'ASCHARGEDPROJECTREVENUERULE';
    this.ASSEMBLY_BUILD = 'ASSEMBLYBUILD';
    this.ASSEMBLY_ITEM = 'ASSEMBLYITEM';
    this.ASSEMBLY_UNBUILD = 'ASSEMBLYUNBUILD';
    this.BALANCE_TRX_BY_SEGMENTS = 'BALANCETRXBYSEGMENTS';
    this.BILLING_ACCOUNT = 'BILLINGACCOUNT';
    this.BILLING_CLASS = 'BILLINGCLASS';
    this.BILLING_RATE_CARD = 'BILLINGRATECARD';
    this.BILLING_REVENUE_EVENT = 'BILLINGREVENUEEVENT';
    this.BILLING_SCHEDULE = 'BILLINGSCHEDULE';
    this.BIN = 'BIN';
    this.BIN_TRANSFER = 'BINTRANSFER';
    this.BIN_WORKSHEET = 'BINWORKSHEET';
    this.BLANKET_PURCHASE_ORDER = 'BLANKETPURCHASEORDER';
    this.BOM = 'BOM';
    this.BOM_REVISION = 'BOMREVISION';
    this.BONUS = 'BONUS';
    this.BONUS_TYPE = 'BONUSTYPE';
    this.BUDGET_EXCHANGE_RATE = 'BUDGETEXCHANGERATE';
    this.BULK_OWNERSHIP_TRANSFER = 'BULKOWNERSHIPTRANSFER';
    this.BUNDLE_INSTALLATION_SCRIPT = 'BUNDLEINSTALLATIONSCRIPT';
    this.CALENDAR_EVENT = 'CALENDAREVENT';
    this.CAMPAIGN = 'CAMPAIGN';
    this.CAMPAIGN_RESPONSE = 'CAMPAIGNRESPONSE';
    this.CAMPAIGN_TEMPLATE = 'CAMPAIGNTEMPLATE';
    this.CASH_REFUND = 'CASHREFUND';
    this.CASH_SALE = 'CASHSALE';
    this.CHARGE = 'CHARGE';
    this.CHARGE_RULE = 'CHARGERULE';
    this.CHECK = 'CHECK';
    this.CLASSIFICATION = 'CLASSIFICATION';
    this.CLIENT_SCRIPT = 'CLIENTSCRIPT';
    this.CMS_CONTENT = 'CMSCONTENT';
    this.CMS_CONTENT_TYPE = 'CMSCONTENTTYPE';
    this.CMS_PAGE = 'CMSPAGE';
    this.COMMERCE_CATEGORY = 'COMMERCECATEGORY';
    this.COMPETITOR = 'COMPETITOR';
    this.CONSOLIDATED_EXCHANGE_RATE = 'CONSOLIDATEDEXCHANGERATE';
    this.CONTACT = 'CONTACT';
    this.CONTACT_CATEGORY = 'CONTACTCATEGORY';
    this.CONTACT_ROLE = 'CONTACTROLE';
    this.COST_CATEGORY = 'COSTCATEGORY';
    this.COUPON_CODE = 'COUPONCODE';
    this.CREDIT_CARD_CHARGE = 'CREDITCARDCHARGE';
    this.CREDIT_CARD_REFUND = 'CREDITCARDREFUND';
    this.CREDIT_MEMO = 'CREDITMEMO';
    this.CURRENCY = 'CURRENCY';
    this.CUSTOM_PURCHASE = 'CUSTOMPURCHASE';
    this.CUSTOMER = 'CUSTOMER';
    this.CUSTOMER_CATEGORY = 'CUSTOMERCATEGORY';
    this.CUSTOMER_DEPOSIT = 'CUSTOMERDEPOSIT';
    this.CUSTOMER_MESSAGE = 'CUSTOMERMESSAGE';
    this.CUSTOMER_PAYMENT = 'CUSTOMERPAYMENT';
    this.CUSTOMER_PAYMENT_AUTHORIZATION = 'CUSTOMERPAYMENTAUTHORIZATION';
    this.CUSTOM_RECORD = 'CUSTOMRECORD';
    this.CUSTOMER_REFUND = 'CUSTOMERREFUND';
    this.CUSTOMER_STATUS = 'CUSTOMERSTATUS';
    this.CUSTOMER_SUBSIDIARY_RELATIONSHIP = 'CUSTOMERSUBSIDIARYRELATIONSHIP';
    this.CUSTOM_TRANSACTION = 'CUSTOMTRANSACTION';
    this.DEPARTMENT = 'DEPARTMENT';
    this.DEPOSIT = 'DEPOSIT';
    this.DEPOSIT_APPLICATION = 'DEPOSITAPPLICATION';
    this.DESCRIPTION_ITEM = 'DESCRIPTIONITEM';
    this.DISCOUNT_ITEM = 'DISCOUNTITEM';
    this.DOWNLOAD_ITEM = 'DOWNLOADITEM';
    this.EMAIL_TEMPLATE = 'EMAILTEMPLATE';
    this.EMPLOYEE = 'EMPLOYEE';
    this.EMPLOYEE_CHANGE_REQUEST = 'EMPLOYEECHANGEREQUEST';
    this.EMPLOYEE_CHANGE_TYPE = 'EMPLOYEECHANGETYPE';
    this.ENTITY_ACCOUNT_MAPPING = 'ENTITYACCOUNTMAPPING';
    this.ESTIMATE = 'ESTIMATE';
    this.EXPENSE_AMORTIZATION_EVENT = 'EXPENSEAMORTIZATIONEVENT';
    this.EXPENSE_CATEGORY = 'EXPENSECATEGORY';
    this.EXPENSE_PLAN = 'EXPENSEPLAN';
    this.EXPENSE_REPORT = 'EXPENSEREPORT';
    this.FAIR_VALUE_PRICE = 'FAIRVALUEPRICE';
    this.FINANCIAL_INSTITUTION = 'FINANCIALINSTITUTION';
    this.FIXED_AMOUNT_PROJECT_REVENUE_RULE = 'FIXEDAMOUNTPROJECTREVENUERULE';
    this.FOLDER = 'FOLDER';
    this.FULFILLMENT_REQUEST = 'FULFILLMENTREQUEST';
    this.GENERAL_TOKEN = 'GENERALTOKEN';
    this.GENERIC_RESOURCE = 'GENERICRESOURCE';
    this.GIFT_CERTIFICATE = 'GIFTCERTIFICATE';
    this.GIFT_CERTIFICATE_ITEM = 'GIFTCERTIFICATEITEM';
    this.GLOBAL_ACCOUNT_MAPPING = 'GLOBALACCOUNTMAPPING';
    this.GLOBAL_INVENTORY_RELATIONSHIP = 'GLOBALINVENTORYRELATIONSHIP';
    this.GL_NUMBERING_SEQUENCE = 'GLNUMBERINGSEQUENCE';
    this.GOAL = 'GOAL';
    this.INBOUND_SHIPMENT = 'INBOUNDSHIPMENT';
    this.INTERCOMP_ALLOCATION_SCHEDULE = 'INTERCOMPALLOCATIONSCHEDULE';
    this.INTER_COMPANY_JOURNAL_ENTRY = 'INTERCOMPANYJOURNALENTRY';
    this.INTER_COMPANY_TRANSFER_ORDER = 'INTERCOMPANYTRANSFERORDER';
    this.INVENTORY_ADJUSTMENT = 'INVENTORYADJUSTMENT';
    this.INVENTORY_COST_REVALUATION = 'INVENTORYCOSTREVALUATION';
    this.INVENTORY_COUNT = 'INVENTORYCOUNT';
    this.INVENTORY_DETAIL = 'INVENTORYDETAIL';
    this.INVENTORY_ITEM = 'INVENTORYITEM';
    this.INVENTORY_NUMBER = 'INVENTORYNUMBER';
    this.INVENTORY_STATUS = 'INVENTORYSTATUS';
    this.INVENTORY_STATUS_CHANGE = 'INVENTORYSTATUSCHANGE';
    this.INVENTORY_TRANSFER = 'INVENTORYTRANSFER';
    this.INVOICE = 'INVOICE';
    this.ISSUE = 'ISSUE';
    this.ISSUE_PRODUCT = 'ISSUEPRODUCT';
    this.ISSUE_PRODUCT_VERSION = 'ISSUEPRODUCTVERSION';
    this.ITEM_ACCOUNT_MAPPING = 'ITEMACCOUNTMAPPING';
    this.ITEM_COLLECTION = 'ITEMCOLLECTION';
    this.ITEM_COLLECTION_ITEM_MAP = 'ITEMCOLLECTIONITEMMAP';
    this.ITEM_DEMAND_PLAN = 'ITEMDEMANDPLAN';
    this.ITEM_FULFILLMENT = 'ITEMFULFILLMENT';
    this.ITEM_GROUP = 'ITEMGROUP';
    this.ITEM_LOCATION_CONFIGURATION = 'ITEMLOCATIONCONFIGURATION';
    this.ITEM_PROCESS_FAMILY = 'ITEMPROCESSFAMILY';
    this.ITEM_PROCESS_GROUP = 'ITEMPROCESSGROUP';
    this.ITEM_RECEIPT = 'ITEMRECEIPT';
    this.ITEM_REVISION = 'ITEMREVISION';
    this.ITEM_SUPPLY_PLAN = 'ITEMSUPPLYPLAN';
    this.JOB = 'JOB';
    this.JOB_STATUS = 'JOBSTATUS';
    this.JOB_TYPE = 'JOBTYPE';
    this.JOURNAL_ENTRY = 'JOURNALENTRY';
    this.KIT_ITEM = 'KITITEM';
    this.LABOR_BASED_PROJECT_REVENUE_RULE = 'LABORBASEDPROJECTREVENUERULE';
    this.LEAD = 'LEAD';
    this.LOCATION = 'LOCATION';
    this.LOT_NUMBERED_ASSEMBLY_ITEM = 'LOTNUMBEREDASSEMBLYITEM';
    this.LOT_NUMBERED_INVENTORY_ITEM = 'LOTNUMBEREDINVENTORYITEM';
    this.MANUFACTURING_COST_TEMPLATE = 'MANUFACTURINGCOSTTEMPLATE';
    this.MANUFACTURING_OPERATION_TASK = 'MANUFACTURINGOPERATIONTASK';
    this.MANUFACTURING_ROUTING = 'MANUFACTURINGROUTING';
    this.MAP_REDUCE_SCRIPT = 'MAPREDUCESCRIPT';
    this.MARKUP_ITEM = 'MARKUPITEM';
    this.MASSUPDATE_SCRIPT = 'MASSUPDATESCRIPT';
    this.MEM_DOC = 'MEMDOC';
    this.MERCHANDISE_HIERARCHY_LEVEL = 'MERCHANDISEHIERARCHYLEVEL';
    this.MERCHANDISE_HIERARCHY_NODE = 'MERCHANDISEHIERARCHYNODE';
    this.MERCHANDISE_HIERARCHY_VERSION = 'MERCHANDISEHIERARCHYVERSION';
    this.MESSAGE = 'MESSAGE';
    this.MFG_PLANNED_TIME = 'MFGPLANNEDTIME';
    this.NEXUS = 'NEXUS';
    this.NON_INVENTORY_ITEM = 'NONINVENTORYITEM';
    this.NOTE = 'NOTE';
    this.NOTE_TYPE = 'NOTETYPE';
    this.OPPORTUNITY = 'OPPORTUNITY';
    this.ORDER_SCHEDULE = 'ORDERSCHEDULE';
    this.OTHER_CHARGE_ITEM = 'OTHERCHARGEITEM';
    this.OTHER_NAME = 'OTHERNAME';
    this.OTHER_NAME_CATEGORY = 'OTHERNAMECATEGORY';
    this.PARTNER = 'PARTNER';
    this.PARTNER_CATEGORY = 'PARTNERCATEGORY';
    this.PARTNER_COMMISSION_PLAN = 'PARTNERCOMMISSIONPLAN';
    this.PAYCHECK = 'PAYCHECK';
    this.PAYCHECK_JOURNAL = 'PAYCHECKJOURNAL';
    this.PAYMENT_CARD = 'PAYMENTCARD';
    this.PAYMENT_CARD_TOKEN = 'PAYMENTCARDTOKEN';
    this.PAYMENT_ITEM = 'PAYMENTITEM';
    this.PAYMENT_METHOD = 'PAYMENTMETHOD';
    this.PAYROLL_ITEM = 'PAYROLLITEM';
    this.PCT_COMPLETE_PROJECT_REVENUE_RULE = 'PCTCOMPLETEPROJECTREVENUERULE';
    this.PERFORMANCE_METRIC = 'PERFORMANCEMETRIC';
    this.PERFORMANCE_REVIEW = 'PERFORMANCEREVIEW';
    this.PERFORMANCE_REVIEW_SCHEDULE = 'PERFORMANCEREVIEWSCHEDULE';
    this.PERIOD_END_JOURNAL = 'PERIODENDJOURNAL';
    this.PHONE_CALL = 'PHONECALL';
    this.PICK_STRATEGY = 'PICKSTRATEGY';
    this.PICK_TASK = 'PICKTASK';
    this.PORTLET = 'PORTLET';
    this.PRICE_BOOK = 'PRICEBOOK';
    this.PRICE_LEVEL = 'PRICELEVEL';
    this.PRICE_PLAN = 'PRICEPLAN';
    this.PRICING_GROUP = 'PRICINGGROUP';
    this.PROJECT_EXPENSE_TYPE = 'PROJECTEXPENSETYPE';
    this.PROJECT_TASK = 'PROJECTTASK';
    this.PROJECT_TEMPLATE = 'PROJECTTEMPLATE';
    this.PROMOTION_CODE = 'PROMOTIONCODE';
    this.PROSPECT = 'PROSPECT';
    this.PURCHASE_CONTRACT = 'PURCHASECONTRACT';
    this.PURCHASE_ORDER = 'PURCHASEORDER';
    this.PURCHASE_REQUISITION = 'PURCHASEREQUISITION';
    this.REALLOCATE_ITEM = 'REALLOCATEITEM';
    this.RECEIVE_INBOUND_SHIPMENT = 'RECEIVEINBOUNDSHIPMENT';
    this.RESOURCE_ALLOCATION = 'RESOURCEALLOCATION';
    this.RESTLET = 'RESTLET';
    this.RETURN_AUTHORIZATION = 'RETURNAUTHORIZATION';
    this.REVENUE_ARRANGEMENT = 'REVENUEARRANGEMENT';
    this.REVENUE_COMMITMENT = 'REVENUECOMMITMENT';
    this.REVENUE_COMMITMENT_REVERSAL = 'REVENUECOMMITMENTREVERSAL';
    this.REVENUE_PLAN = 'REVENUEPLAN';
    this.REV_REC_SCHEDULE = 'REVRECSCHEDULE';
    this.REV_REC_TEMPLATE = 'REVRECTEMPLATE';
    this.SALES_ORDER = 'SALESORDER';
    this.SALES_ROLE = 'SALESROLE';
    this.SALES_TAX_ITEM = 'SALESTAXITEM';
    this.SCHEDULED_SCRIPT = 'SCHEDULEDSCRIPT';
    this.SCHEDULED_SCRIPT_INSTANCE = 'SCHEDULEDSCRIPTINSTANCE';
    this.SCRIPT_DEPLOYMENT = 'SCRIPTDEPLOYMENT';
    this.SERIALIZED_ASSEMBLY_ITEM = 'SERIALIZEDASSEMBLYITEM';
    this.SERIALIZED_INVENTORY_ITEM = 'SERIALIZEDINVENTORYITEM';
    this.SERVICE_ITEM = 'SERVICEITEM';
    this.SHIP_ITEM = 'SHIPITEM';
    this.SOLUTION = 'SOLUTION';
    this.STATISTICAL_JOURNAL_ENTRY = 'STATISTICALJOURNALENTRY';
    this.STORE_PICKUP_FULFILLMENT = 'STOREPICKUPFULFILLMENT';
    this.SUBSCRIPTION = 'SUBSCRIPTION';
    this.SUBSCRIPTION_CHANGE_ORDER = 'SUBSCRIPTIONCHANGEORDER';
    this.SUBSCRIPTION_LINE = 'SUBSCRIPTIONLINE';
    this.SUBSCRIPTION_PLAN = 'SUBSCRIPTIONPLAN';
    this.SUBSIDIARY = 'SUBSIDIARY';
    this.SUBSIDIARY_SETTINGS = 'SUBSIDIARYSETTINGS';
    this.SUBTOTAL_ITEM = 'SUBTOTALITEM';
    this.SUITELET = 'SUITELET';
    this.SUPPLY_CHAIN_SNAPSHOT = 'SUPPLYCHAINSNAPSHOT';
    this.SUPPLY_CHAIN_SNAPSHOT_SIMULATION = 'SUPPLYCHAINSNAPSHOTSIMULATION';
    this.SUPPORT_CASE = 'SUPPORTCASE';
    this.TASK = 'TASK';
    this.TAX_ACCT = 'TAXACCT';
    this.TAX_GROUP = 'TAXGROUP';
    this.TAX_PERIOD = 'TAXPERIOD';
    this.TAX_TYPE = 'TAXTYPE';
    this.TERM = 'TERM';
    this.TIME_BILL = 'TIMEBILL';
    this.TIME_ENTRY = 'TIMEENTRY';
    this.TIME_OFF_CHANGE = 'TIMEOFFCHANGE';
    this.TIME_OFF_PLAN = 'TIMEOFFPLAN';
    this.TIME_OFF_REQUEST = 'TIMEOFFREQUEST';
    this.TIME_OFF_RULE = 'TIMEOFFRULE';
    this.TIME_OFF_TYPE = 'TIMEOFFTYPE';
    this.TIME_SHEET = 'TIMESHEET';
    this.TOPIC = 'TOPIC';
    this.TRANSFER_ORDER = 'TRANSFERORDER';
    this.UNITS_TYPE = 'UNITSTYPE';
    this.UNLOCKED_TIME_PERIOD = 'UNLOCKEDTIMEPERIOD';
    this.USAGE = 'USAGE';
    this.USEREVENT_SCRIPT = 'USEREVENTSCRIPT';
    this.VENDOR = 'VENDOR';
    this.VENDOR_BILL = 'VENDORBILL';
    this.VENDOR_CATEGORY = 'VENDORCATEGORY';
    this.VENDOR_CREDIT = 'VENDORCREDIT';
    this.VENDOR_PAYMENT = 'VENDORPAYMENT';
    this.VENDOR_PREPAYMENT = 'VENDORPREPAYMENT';
    this.VENDOR_PREPAYMENT_APPLICATION = 'VENDORPREPAYMENTAPPLICATION';
    this.VENDOR_RETURN_AUTHORIZATION = 'VENDORRETURNAUTHORIZATION';
    this.VENDOR_SUBSIDIARY_RELATIONSHIP = 'VENDORSUBSIDIARYRELATIONSHIP';
    this.WAVE = 'WAVE';
    this.WBS = 'WBS';
    this.WEBSITE = 'WEBSITE';
    this.WORKFLOW_ACTION_SCRIPT = 'WORKFLOWACTIONSCRIPT';
    this.WORK_ORDER = 'WORKORDER';
    this.WORK_ORDER_CLOSE = 'WORKORDERCLOSE';
    this.WORK_ORDER_COMPLETION = 'WORKORDERCOMPLETION';
    this.WORK_ORDER_ISSUE = 'WORKORDERISSUE';
    this.WORKPLACE = 'WORKPLACE';
    this.ZONE = 'ZONE';
  }

  record.prototype.Type = new Type();

  return new record();

})();