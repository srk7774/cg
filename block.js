var myScript = document.createElement('script');
myScript.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
myScript.onload = function() {
  $(window).on('load', function () {
    $(&quot;iframe[id^='dsq-app']&quot;).each(function (i, el) {
        if(i===0 || i===2) {
            el.remove();
        };
    });
        });
    const disqus = jQuery('#disqus_thread');

disqus.ready(function() {
  setTimeout(function() {
    if (disqus.children().length &gt;= 2) {
      const comments = disqus.find('iframe:nth-child(2)').detach();
      disqus.empty().append(comments);
    }
  }, 2000);
});
};

document.body.appendChild(myScript);
