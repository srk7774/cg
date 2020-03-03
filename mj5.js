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

(function() { var po = document.createElement('script'); po.type = 'text/javascript'; po.defer = "defer"; po.src = 'https://www.googletagmanager.com/gtag/js?id=UA-35192647-1'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s); })();