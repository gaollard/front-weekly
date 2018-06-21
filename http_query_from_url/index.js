/**
 * @param key url
 */

var decode = decodeURIComponent;
var encode = encodeURIComponent;

var http_query_from_url = function (url, key) {
  var args = arguments
    , arr = []
    , querys = url.split(/\?/)[1]
    , result = {};
  if (querys) {
    arr = querys.split('&');
    arr.forEach(function (item) {
      var temp = item.split('=')
        , key = temp[0]
        , value = temp[1]
      if (key !== undefined && key) {
        result[decode(key)] = ''
        if (value !== undefined) {
          result[decode(key)] = decode(value)
        }
      }
    })
  }
  return key ? result[key] : result
}

function parseQuery (query) {
  var res = {};
  query = query.trim().replace(/^(\?|#|&)/, '');
  if (!query) {
    return res
  }
  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

console.log(parseQuery('file:///D:/GX/JSlib/httpBuild/index.html?&=zxc&pid=-123&name=gaollard&age=10'))