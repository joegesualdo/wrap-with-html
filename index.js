var wrapString = require("wrap-string");

function wrapWithHTML(opts) {
  // Argument error checking.
  if (!opts || !opts.string) {
    throw new Error(
      "Must provide an argument object with the following keys: 'string'"
    );
  }

  // Set defaults.
  var DEFAULT_ID = "";
  var DEFAULT_TAG_NAME = "div";
  var DEFAULT_CLASS_NAME = "";

  // Set variables.
  var originalString = opts.string;
  var tagName = opts.tagName || DEFAULT_TAG_NAME;
  var customId = opts.customId || DEFAULT_ID;
  var customClass = opts.customClass || DEFAULT_CLASS_NAME;

  // Create html strings.
  var openingHTML = "<" + tagName + " id='" + customId + "' class='" + customClass + "'>"
  var closingHTML = "</" + tagName + ">"

  return wrapString({
    string: originalString,
    prepend: openingHTML,
    append: closingHTML
  });
}

module.exports = wrapWithHTML;
