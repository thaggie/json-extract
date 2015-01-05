var jsonExtractValue = function (data, pattern) {
  var parts = pattern.split('.');
  var i, part;

  for (i=0; i<parts.length;++i) {
    part = parts[i];
    if (data.hasOwnProperty(part)) {
      data = data[part];
    } else {
      return undefined;
    }
  }

  return data;
};

var jsonExtractObject = function (data, pattern) {
  var result = {};
  var item, value;

  for (item in pattern) {
    if (pattern.hasOwnProperty(item)) {
      value = jsonExtractValue(data, pattern[item]);
      if (value !== undefined) {
        result[item] = value;
      }
    }
  }
  
  return result;
};

var jsonExtract = function(data, pattern) {
  'use strict';
  if (typeof pattern === 'string') {
    return jsonExtractValue(data, pattern);
  } else {
    return jsonExtractObject(data, pattern);
  }

  return 'unsupported';
};

module.exports = jsonExtract