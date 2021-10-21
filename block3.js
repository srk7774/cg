(function() {
      function getScript(url,success){
        var script=document.createElement(&#39;script&#39;);
        script.src=url;
        var head=document.getElementsByTagName(&#39;head&#39;)[0],
            done=false;
        script.onload=script.onreadystatechange = function(){
          if ( !done &amp;&amp; (!this.readyState || this.readyState == &#39;loaded&#39; || this.readyState == &#39;complete&#39;) ) {
            done=true;
            success();
            script.onload = script.onreadystatechange = null;
            head.removeChild(script);
          }
        };
        head.appendChild(script);
      }
        getScript(&#39;https://cdnjs.cloudflare.com/ajax/libs/cash/8.1.0/cash.min.js&#39;,function(){
         $(window).on(&#39;load&#39;, function () {
    $(&quot;iframe[id^=&#39;dsq-app&#39;]&quot;).each(function (i, el) {
        if(i===0 || i===2) {
            el.remove();
        };
    });
        });
    const disqus = cash(&#39;#disqus_thread&#39;);

disqus.ready(function() {
  setTimeout(function() {
    if (disqus.children().length &gt;= 2) {
      const comments = disqus.find(&#39;iframe:nth-child(2)&#39;).detach();
      disqus.empty().append(comments);
    }
  }, 2000);
});
        });
    })();
