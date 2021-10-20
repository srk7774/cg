//image defer
//<![CDATA[
function init() {
var imgDefer = document.getElementsByTagName('img');
for (var i=0; i<imgDefer.length; i++) {
if(imgDefer[i].getAttribute('data-src')) {
imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
} } }
window.onload = init;
//]]>
//tabcontent
//<![CDATA[
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
//]]>
// addtoany
  var a2a_config = a2a_config || {};
a2a_config.thanks = {
    postShare: false,
    ad: false
};
a2a_config.templates = a2a_config.templates || {};
a2a_config.templates.email = {
    subject: &quot;Check this out: ${title}&quot;,
    body: &quot;I thought this might be useful for you:\n${link}&quot;
};
(function() { var aa = document.createElement('script'); aa.type = 'text/javascript'; aa.defer = "defer"; aa.src = 'https://static.addtoany.com/menu/page.js'; var b = document.getElementsByTagName('script')[0]; b.parentNode.insertBefore(aa, b); })();

var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-167988617-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

