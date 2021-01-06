module.exports = (function () {

  // N/xml Module Members

  var xml = function() {};

  // Object

  var Parser = function() {};

  var XPath = function() {};

  var Node = function() {};

  var Document = function() {};

  var Element = function() {};

  var Attr = function() {};

  xml.prototype.Parser = Parser;

  xml.prototype.XPath = XPath;

  xml.prototype.Node = Node;

  xml.prototype.Document = Document;

  xml.prototype.Element = Element;

  xml.prototype.Attr = Attr;

  // Method

  xml.prototype.escape = function(options) {};

  xml.prototype.validate = function(options) {};

  // Parser Object Methods

  Parser.prototype.fromString = function(options) {};

  Parser.prototype.toString = function(options) {};

  // XPath Object Methods

  XPath.prototype.select = function(options) {};

  // Node Object Methods

  Node.prototype.appendChild = function(options) {};

  Node.prototype.cloneNode = function(options) {};

  Node.prototype.compareDocumentPosition = function(options) {};

  Node.prototype.hasAttributes = function() {};

  Node.prototype.hasChildNodes = function() {};

  Node.prototype.insertBefore = function(options) {};

  Node.prototype.isDefaultNamespace = function(options) {};

  Node.prototype.isEqualNode = function(options) {};

  Node.prototype.isSameNode = function(options) {};

  Node.prototype.lookupNamespaceURI = function(options) {};

  Node.prototype.lookupPrefix = function(options) {};

  Node.prototype.normalize = function(options) {};

  Node.prototype.removeChild = function(options) {};

  Node.prototype.replaceChild = function(options) {};

  // Document Object Methods

  Document.prototype.adoptNode = function(options) {};

  Document.prototype.createAttribute = function(options) {};

  Document.prototype.createAttributeNS = function(options) {};

  Document.prototype.createCDATASection = function(options) {};

  Document.prototype.createComment = function(options) {};

  Document.prototype.createDocumentFragment = function(options) {};

  Document.prototype.createElement = function(options) {};

  Document.prototype.createElementNS = function(options) {};

  Document.prototype.createProcessingInstruction = function(options) {};

  Document.prototype.createTextNode = function(options) {};

  Document.prototype.getElementById = function(options) {};

  Document.prototype.getElementsByTagName = function(options) {};

  Document.prototype.getElementsByTagNameNS = function(options) {};

  Document.prototype.importNode = function(options) {};

  // Element Object Methods

  Element.prototype.getAttribute = function(options) {};

  Element.prototype.getAttributeNode = function(options) {};

  Element.prototype.getAttributeNodeNS = function(options) {};

  Element.prototype.getAttributeNS = function(options) {};

  Element.prototype.getElementsByTagName = function(options) {};

  Element.prototype.getElementsByTagNameNS = function(options) {};

  Element.prototype.hasAttribute = function(options) {};

  Element.prototype.hasAttributeNS = function(options) {};

  Element.prototype.removeAttribute = function(options) {};

  Element.prototype.removeAttributeNode = function(options) {};

  Element.prototype.removeAttributeNS = function(options) {};

  Element.prototype.setAttribute = function(options) {};

  Element.prototype.setAttributeNode = function(options) {};

  Element.prototype.setAttributeNodeNS = function(options) {};

  Element.prototype.setAttributeNS = function(options) {};

  // Enum

  function NodeType() {
    this.ATTRIBUTE_NODE = "ATTRIBUTE_NODE";
    this.CDATA_SECTION_NODE = "CDATA_SECTION_NODE";
    this.COMMENT_NODE = "COMMENT_NODE";
    this.DOCUMENT_FRAGMENT_NODE = "DOCUMENT_FRAGMENT_NODE";
    this.DOCUMENT_NODE = "DOCUMENT_NODE";
    this.DOCUMENT_TYPE_NODE = "DOCUMENT_TYPE_NODE";
    this.ELEMENT_NODE = "ELEMENT_NODE";
    this.ENTITY_NODE = "ENTITY_NODE";
    this.ENTITY_REFERENCE_NODE = "ENTITY_REFERENCE_NODE";
    this.NOTATION_NODE = "NOTATION_NODE";
    this.PROCESSING_INSTRUCTION_NODE = "PROCESSING_INSTRUCTION_NODE";
    this.TEXT_NODE = "TEXT_NODE";
  }

  xml.prototype.NodeType = new NodeType();

  return new xml();
})();