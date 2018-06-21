;(function(win, undefined) {
  var doc = win.document
    , docEl = doc.documentElement
    , dpr = win.devicePixelRatio || 1
    , evtName = 'resize'
    , resizeEvt = function() {
      // UI设计师以 iPhone6 为设置标准
      var docWidth = docEl.getBoundingClientRect().width || 375;
      docEl.style.fontSize = (docWidth / 10) * 2 + 'px'; // 当屏幕尺寸为 375 * 667时 根节点 font-size 为 75px
    };
  if (win.addEventListener) {
    win.addEventListener(evtName, resizeEvt, false);
  }
  docEl.setAttribute('data-dpr', dpr);
  var ua = window.navigator.userAgent;
  // 苹果系统
  if (/iPhone/.test(ua)) {
    docEl.setAttribute('data-iphone', true);
  }
  // 安卓系统
  if (/Android/.test(ua)) {
    docEl.setAttribute('data-android', true);
  }
  resizeEvt();
})(window);