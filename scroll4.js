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
  var body = document.body.textContent;
  if (body.match(/(?:\$|\\\(|\\\[|\\begin\{.*?})/)) {
    if (!window.MathJax) {
      window.MathJax = {
        tex: {
          inlineMath: {'[+]': [['$', '$']]}
        }
      };
    }
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js';
    document.head.appendChild(script);
  }
})();
