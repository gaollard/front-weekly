/**
 * ES5
 */

var http_build_query = function (url, name, value) {
  if (url.indexOf('?') === -1) {
    url += '?';
  } else {
    url += '&';
  }
  url += encodeURIComponent(name) + '=' + encodeURIComponent(value);
}

var http_build_querys = function (url, obj) {
  let str = '';
  if (url.indexOf('?') === -1) {
    url += '?';
  } else {
    url += '&';
  }
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      str += '&' + encodeURIComponent(key) + '=' + encodeURIComponent(obj[key])
    }
  }
  return url += str.substring(1)
}