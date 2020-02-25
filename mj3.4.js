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

// Dynamic DOM insertion of a deferred script (script4.js)
            script4 = document.createElement('script');
            script4.setAttribute('defer', 'defer');
            script4.setAttribute('src', 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js');
            head.appendChild(script4);
//addtoany
(function() { var aa = document.createElement('script'); aa.type = 'text/javascript'; aa.async = false; aa.src = 'https://static.addtoany.com/menu/page.js'; var b = document.getElementsByTagName('script')[0]; b.parentNode.insertBefore(aa, b); })();

(function() { var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true; po.src = 'https://www.googletagmanager.com/gtag/js?id=UA-35192647-1'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s); })();

