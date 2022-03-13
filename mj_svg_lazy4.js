window.MathJax = {
  loader: {
    load: ['ui/lazy']
  },
  tex: {
    inlineMath: [["$","$"],["\\(","\\)"]]
  },
  svg: {
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
  startup: {
    typeset: false,
    ready: function () {
      var SVG = MathJax._.output.svg_ts.SVG;
      var percent = MathJax._.util.lengths.percent;
      SVG.prototype.setScale = function (node) {
        if (this.options.scale !== 1) {
          this.adaptor.setStyle(node, 'fontSize', percent(this.options.scale));
        }
      }
      //
      // Adjust the lazy observer to have a margin of 500px so expressions
      //   will be typeset a little when they are still a little bit away from being seen.
      //
      MathJax.startup.extendHandler(handler => {
        handler.documentClass = class extends handler.documentClass {
          constructor(...args) {
            super(...args);
            this.lazyObserver = new IntersectionObserver(this.lazyObserve.bind(this), {rootMargin: '500px'});
          }
        };
        return handler;
      }, 100);
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
