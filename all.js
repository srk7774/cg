(function() { var aa = document.createElement('script'); aa.type = 'text/javascript'; aa.async = true; aa.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'; var b = document.getElementsByTagName('script')[0]; b.parentNode.insertBefore(aa, b); })();

(function() { var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true; po.src = 'https://www.googletagmanager.com/gtag/js?id=UA-35192647-1'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s); })();

(function() { var aa = document.createElement('script'); aa.type = 'text/javascript'; aa.async = true; aa.src = 'https://static.addtoany.com/menu/page.js'; var b = document.getElementsByTagName('script')[0]; b.parentNode.insertBefore(aa, b); })();

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-35192647-1');

window.MathJax = {
  tex: {
    inlineMath: [["$","$"],["\\(","\\)"]]
  },
  svg: {
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
  },
  startup: {
    ready: function () {
      var SVG = MathJax._.output.svg_ts.SVG;
      var percent = MathJax._.util.lengths.percent;
      SVG.prototype.setScale = function (node) {
        if (this.options.scale !== 1) {
          this.adaptor.setStyle(node, 'fontSize', percent(this.options.scale));
        }
      }
      MathJax.startup.defaultReady();
    }
  }
};
(function () {
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
  script.async = true;
  document.head.appendChild(script);
})();