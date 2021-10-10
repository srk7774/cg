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
//image defer
function init() {
var imgDefer = document.getElementsByTagName('img');
for (var i=0; i<imgDefer.length; i++) {
if(imgDefer[i].getAttribute('data-src')) {
imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
} } }
window.onload = init;
//tabcontent
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