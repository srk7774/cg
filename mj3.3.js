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

(function () {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src  = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js";
  document.getElementsByTagName("head")[0].appendChild(script);
})();

//addtoany
(function() { var aa = document.createElement('script'); aa.type = 'text/javascript'; aa.async = false; aa.src = 'https://static.addtoany.com/menu/page.js'; var b = document.getElementsByTagName('script')[0]; b.parentNode.insertBefore(aa, b); })();

(function() { var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true; po.src = 'https://www.googletagmanager.com/gtag/js?id=UA-35192647-1'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s); })();

function init() {
var imgDefer = document.getElementsByTagName('img');
for (var i=0; i<imgDefer.length; i++) {
if(imgDefer[i].getAttribute('data-src')) {
imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
} } }
window.onload = init;

 window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag(&#39;js&#39;, new Date());

  gtag(&#39;config&#39;, &#39;UA-35192647-1&#39;);

