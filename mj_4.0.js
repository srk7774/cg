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
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@4.0.0-beta.4/tex-chtml.js';
  script.async = true;
  document.head.appendChild(script);
})();
