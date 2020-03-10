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

(function() { var aa = document.createElement('script'); aa.type = 'text/javascript'; aa.defer = "defer"; aa.src = 'https://static.addtoany.com/menu/page.js'; var b = document.getElementsByTagName('script')[0]; b.parentNode.insertBefore(aa, b); })();

var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-35192647-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();