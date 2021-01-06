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
(function() { 
var aa = document.createElement('script'); 
aa.type = 'text/javascript'; 
aa.async = true; 
aa.src = 'https://static.addtoany.com/menu/page.js'; 
var b = document.getElementsByTagName('script')[0]; 
b.parentNode.insertBefore(aa, b); })();
