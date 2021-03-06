MathJax.Hub.Config({
    CommonHTML: {
        styles: {'.mjx-chtml': {padding: '6px 0'}},
		matchFontHeight: false,
        scale: 110,
    },
    tex2jax: {inlineMath: [["$","$"],["\\(","\\)"]]},
    messageStyle: "none",
    showMathMenu: false,
}); 
(function () {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src  = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML";
  document.getElementsByTagName("head")[0].appendChild(script);
})();