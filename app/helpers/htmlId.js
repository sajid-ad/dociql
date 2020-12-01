/**
 * Replace all characters that may not be used in HTML id-attributes by '-'.
 * Uses punycode lib to ensure that pretty much all characters are allowed.
 */
const punycode = require("punycode");

module.exports = function (value) {
  return punycode.toASCII(value.replace(/[\s\/]+/g, "-"));
};
