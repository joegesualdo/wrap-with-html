function wrapWithHTML(opts) {
  var string = opts.string;
  var tagName = opts.tagName || "div";
  var customId = opts.customId || "";
  var customClass = opts.customClass || "";

  var htmlString = "<" + tagName + " id='" + customId + "' class='" + customClass + "'>" + string + "</" + tagName + ">";

  return htmlString;
}

module.exports = wrapWithHTML;
