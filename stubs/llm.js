module.exports = (function () {

  // N/llm Module Members

  var llm = function() {};

  // Object

  var ChatMessage = function() {};

  var Citation = function() {};

  var Document = function() {};

  var EmbedResponse = function() {};

  var Response = function() {};

  var StreamedResponse = function() {};

  var Tool = function() {};

  var ToolCall = function() {};

  var ToolParameter = function() {};

  var ToolResult = function() {};

  var Usage = function() {};

  llm.prototype.ChatMessage = ChatMessage;

  llm.prototype.Citation = Citation;

  llm.prototype.Document = Document;

  llm.prototype.EmbedResponse = EmbedResponse;

  llm.prototype.Response = Response;

  llm.prototype.StreamedResponse = StreamedResponse;

  llm.prototype.Tool = Tool;

  llm.prototype.ToolCall = ToolCall;

  llm.prototype.ToolParameter = ToolParameter;

  llm.prototype.ToolResult = ToolResult;

  llm.prototype.Usage = Usage;

  // Method

  llm.prototype.chat = function(options) {};

  llm.prototype.chat.promise = function(options) {};

  llm.prototype.chatStreamed = function(options) {};

  llm.prototype.chatStreamed.promise = function(options) {};

  llm.prototype.createChatMessage = function(options) {};

  llm.prototype.createDocument = function(options) {};

  llm.prototype.createTool = function(options) {};

  llm.prototype.createToolParameter = function(options) {};

  llm.prototype.createToolResult = function(options) {};

  llm.prototype.embed = function(options) {};

  llm.prototype.embed.promise = function(options) {};

  llm.prototype.evaluatePrompt = function(options) {};

  llm.prototype.evaluatePrompt.promise = function(options) {};

  llm.prototype.evaluatePromptStreamed = function(options) {};

  llm.prototype.evaluatePromptStreamed.promise = function(options) {};

  llm.prototype.executePrompt = function(options) {};

  llm.prototype.executePrompt.promise = function(options) {};

  llm.prototype.executePromptStreamed = function(options) {};

  llm.prototype.executePromptStreamed.promise = function(options) {};

  llm.prototype.generateText = function(options) {};

  llm.prototype.generateText.promise = function(options) {};

  llm.prototype.generateTextStreamed = function(options) {};

  llm.prototype.generateTextStreamed.promise = function(options) {};

  llm.prototype.getRemainingFreeEmbedUsage = function() {};

  llm.prototype.getRemainingFreeEmbedUsage.promise = function() {};

  llm.prototype.getRemainingFreeUsage = function() {};

  llm.prototype.getRemainingFreeUsage.promise = function() {};

  // ChatMessage Object Properties

  ChatMessage.prototype.role = undefined;

  ChatMessage.prototype.text = undefined;

  // Citation Object Properties

  Citation.prototype.documentIds = undefined;

  Citation.prototype.end = undefined;

  Citation.prototype.start = undefined;

  Citation.prototype.text = undefined;

  // Document Object Properties

  Document.prototype.data = undefined;

  Document.prototype.id = undefined;

  // EmbedResponse Object Properties

  EmbedResponse.prototype.embeddings = undefined;

  EmbedResponse.prototype.inputs = undefined;

  EmbedResponse.prototype.model = undefined;

  // Response Object Properties

  Response.prototype.chatHistory = undefined;

  Response.prototype.citations = undefined;

  Response.prototype.documents = undefined;

  Response.prototype.model = undefined;

  Response.prototype.text = undefined;

  Response.prototype.toolCalls = undefined;

  Response.prototype.usage = undefined;

  // StreamedResponse Object Properties

  StreamedResponse.prototype.chatHistory = undefined;

  StreamedResponse.prototype.citations = undefined;

  StreamedResponse.prototype.documents = undefined;

  StreamedResponse.prototype.model = undefined;

  StreamedResponse.prototype.text = undefined;

  StreamedResponse.prototype.toolCalls = undefined;

  // Tool Object Properties

  Tool.prototype.description = undefined;

  Tool.prototype.name = undefined;

  Tool.prototype.parameters = undefined;

  // ToolCall Object Properties

  ToolCall.prototype.name = undefined;

  ToolCall.prototype.parameters = undefined;

  // ToolParameter Object Properties

  ToolParameter.prototype.description = undefined;

  ToolParameter.prototype.name = undefined;

  ToolParameter.prototype.type = undefined;

  // ToolResult Object Properties

  ToolResult.prototype.call = undefined;

  ToolResult.prototype.outputs = undefined;

  // Usage Object Properties

  Usage.prototype.completionTokens = undefined;

  Usage.prototype.promptTokens = undefined;

  Usage.prototype.totalTokens = undefined;

  // Enum

  function ChatRole() {
    this.USER = "USER";
    this.CHATBOT = "CHATBOT";
  }

  function EmbedModelFamily() {
    this.COHERE_EMBED = "cohere.embed-v4.0";
    this.COHERE_EMBED_LATEST = "cohere.embed-v4.0";
  }

  function ModelFamily() {
    this.COHERE_COMMAND = "cohere.command-a-03-2025";
    this.COHERE_COMMAND_LATEST = "cohere.command-a-03-2025";
    this.GPT_OSS = "openai.gpt-oss-120b";
    this.GPT_OSS_LATEST = "openai.gpt-oss-120b";
  }

  function SafetyMode() {
    this.CONTEXTUAL = "CONTEXTUAL";
    this.STRICT = "STRICT";
  }

  function ToolParameterType() {
    this.ARRAY = "ARRAY";
    this.BOOLEAN = "BOOLEAN";
    this.FLOAT = "FLOAT";
    this.INTEGER = "INTEGER";
    this.OBJECT = "OBJECT";
    this.STRING = "STRING";
  }

  function Truncate() {
    this.END = "END";
    this.NONE = "NONE";
    this.START = "START";
  }

  llm.prototype.ChatRole = new ChatRole();

  llm.prototype.EmbedModelFamily = new EmbedModelFamily();

  llm.prototype.ModelFamily = new ModelFamily();

  llm.prototype.SafetyMode = new SafetyMode();

  llm.prototype.ToolParameterType = new ToolParameterType();

  llm.prototype.Truncate = new Truncate();

  return new llm();
})();
