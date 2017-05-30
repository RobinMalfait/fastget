function get(cb, defaultValue) {
  try {
    return cb() || defaultValue;
  } catch (err) {
    return defaultValue;
  }
}

module.exports = module.exports.default = get;
