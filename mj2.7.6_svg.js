window.MathJax = {
'fast-preview': {disabled: true},
  tex2jax: {preview: 'none'},
 SVG: {
 styles: {'.MathJax_SVG': {padding: '6px 0'}},
 matchFontHeight: false,
 scale: 90},
  jax: ["input/TeX","output/SVG", "output/PreviewHTML"],
tex2jax: {inlineMath: [["$","$"],["\\(","\\)"]]},
messageStyle: "none",
};
(function() {
    var jax = document.createElement('script'); jax.type = 'text/javascript'; jax.async = true;
    jax.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.6/MathJax.js?config=TeX-AMS_SVG';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(jax, s);
  })();