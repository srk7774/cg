window.MathJax = {
  tex: {
    inlineMath: [["$","$"],["\\(","\\)"]]
  },
  chtml: {
    matchFontHeight: false,
    scale: 1.1
  },
  options: {
    renderActions: {
      addMenu: [],
      checkLoading: []
    },
    ignoreHtmlClass: 'tex2jax_ignore',
    processHtmlClass: 'tex2jax_process'
  }
};

// Dynamic DOM insertion of a deferred script (script4.js)
(function () {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.defer = "defer";
  script.src  = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js";
  document.getElementsByTagName("head")[0].appendChild(script);
})();
//addtoany
(function() { var aa = document.createElement('script'); aa.type = 'text/javascript'; aa.defer = "defer"; aa.src = 'https://static.addtoany.com/menu/page.js'; var b = document.getElementsByTagName('script')[0]; b.parentNode.insertBefore(aa, b); })();

(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    i.initAnalytics = function() {
        a = s.createElement(o), m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    }
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-35192647-1');
ga('send', 'pageview');

function atOnload() {
    initAnalytics();
}
if (window.addEventListener) window.addEventListener("load", atOnload, false);
else if (window.attachEvent) window.attachEvent("onload", atOnload);
else window.onload = atOnload;
