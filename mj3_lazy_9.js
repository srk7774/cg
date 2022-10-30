window.MathJax = {
startup: {
	typeset: false,
  },
loader: {load: ['ui/lazy']},
  tex: {
    inlineMath: [["$","$"],["\\(","\\)"]]
  },
  svg: {
    matchFontHeight: false,
    scale: 0.9
  },
  options: {
    renderActions: {
      addMenu: [],
      checkLoading: []
    },
    
    ignoreHtmlClass: 'tex2jax_ignore',
    processHtmlClass: 'tex2jax_process'
  },
  options: {
    lazyMargin: '200px',
    lazyAlwaysTypeset: null
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
