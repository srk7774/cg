window.MathJax = {
"fast-preview": {disabled: false},
  tex2jax: {preview: "none"},
    CommonHTML: {
        styles: {'.mjx-chtml': {padding: '6px 0'}},
		matchFontHeight: false,
        scale: 110,
EqnChunk: 20,
EqnChunkFactor: 2.5,
EqnChunkDelay: 200,
    },
    tex2jax: {inlineMath: [["$","$"],["\\(","\\)"]]},
    messageStyle: "none",
    showMathMenu: false,
  };
(function () {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src  = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.9/MathJax.js?config=TeX-AMS_CHTML";
  document.getElementsByTagName("head")[0].appendChild(script);
})();
