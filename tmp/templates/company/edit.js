(function() {
  this.JST || (this.JST = {});
  this.JST["templates/company/edit"] = function(__obj) {
  if (!__obj) __obj = {};
  var __out = [], __capture = function(callback) {
    var out = __out, result;
    __out = [];
    callback.call(this);
    result = __out.join('');
    __out = out;
    return __safe(result);
  }, __sanitize = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else if (typeof value !== 'undefined' && value != null) {
      return __escape(value);
    } else {
      return '';
    }
  }, __safe, __objSafe = __obj.safe, __escape = __obj.escape;
  __safe = __obj.safe = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else {
      if (!(typeof value !== 'undefined' && value != null)) value = '';
      var result = new String(value);
      result.ecoSafe = true;
      return result;
    }
  };
  if (!__escape) {
    __escape = __obj.escape = function(value) {
      return ('' + value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    };
  }
  (function() {
    (function() {
    
      __out.push('<form>\n  <label for=\'day_rate\'>Day Rate</label>\n  <input name=\'day_rate\' id="day_rate" type="text" value="');
    
      __out.push(__sanitize(this.day_rate));
    
      __out.push('">\n\n  <label for=\'time_unchanged\'>Since</label>\n  <input name=\'time_unchanged\' id="time_unchanged" type="text" value="');
    
      __out.push(__sanitize(this.time_unchanged));
    
      __out.push('">\n\n  <label for=\'monthly_revenue\'>Monthly Revenue</label>\n  <input name=\'monthly_revenue\' id="monthly_revenue" type="text" value="');
    
      __out.push(__sanitize(this.monthly_revenue));
    
      __out.push('">\n\n</form>\n');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
}
}).call(this);