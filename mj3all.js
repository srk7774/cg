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
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src  = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js";
  document.getElementsByTagName("head")[0].appendChild(script);
})();

//addtoany
(function() { var aa = document.createElement('script'); aa.type = 'text/javascript'; aa.async = false; aa.src = 'https://static.addtoany.com/menu/page.js'; var b = document.getElementsByTagName('script')[0]; b.parentNode.insertBefore(aa, b); })();

(function() { var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true; po.src = 'https://www.googletagmanager.com/gtag/js?id=UA-35192647-1'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s); })();

// image defer
function init() {
var imgDefer = document.getElementsByTagName('img');
for (var i=0; i<imgDefer.length; i++) {
if(imgDefer[i].getAttribute('data-src')) {
imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
} } }
window.onload = init;

//tabs
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

//analytics
window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag(&#39;js&#39;, new Date());

  gtag(&#39;config&#39;, &#39;UA-35192647-1&#39;);

//disqus
var comments = document.getElementsByClassName('comments')[0],
disqusLoaded = false;
function loadDisqus() {
var disqus_shortname = 'campusgate';
var dsq = document.createElement('script');
dsq.type = 'text/javascript';
dsq.async = true;
dsq.src = 'https://' + disqus_shortname + '.disqus.com/embed.js';
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
disqusLoaded = true;
}
//Get the offset of an object
function findTop(obj) {
var curtop = 0;
if (obj.offsetParent) {
do {
curtop += obj.offsetTop;
} while (obj = obj.offsetParent);
return curtop;
}
}
  if (window.location.href.indexOf("#comment") > -1) {
loadDisqus();
  }
if(comments) {
var commentsOffset = findTop(comments);
window.onscroll = function() {
if(!disqusLoaded && window.pageYOffset > commentsOffset - 2000) {
console.log('load comments, NOW!!');
loadDisqus();
}
}
}
var disqus_url = &quot;<data:blog.canonicalUrl/>&quot;; if (!disqus_url.length) { disqus_url = &quot;<data:blog.url/>&quot;; }