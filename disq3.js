var disqus_config = function () {
        // Replace PAGE_URL with your page&#39;s canonical URL variable
        this.page.url = <data:blog.canonicalUrl/>;  
        
        // Replace PAGE_IDENTIFIER with your page&#39;s unique identifier variable
        this.page.identifier = <data:blog.pageId/>; 
    };
    */
    
    (function() {  // REQUIRED CONFIGURATION VARIABLE: EDIT THE SHORTNAME BELOW
        var d = document, s = d.createElement(&#39;script&#39;);
      s.defer = true;
        
        // IMPORTANT: Replace EXAMPLE with your forum shortname!
        s.src = &#39;https://campusgate.disqus.com/embed.js&#39;;
        
        s.setAttribute(&#39;data-timestamp&#39;, +new Date());
        (d.head || d.body).appendChild(s);
    })();
  var disqus_url = &quot;<data:blog.canonicalUrl/>&quot;; if (!disqus_url.length) { disqus_url = &quot;<data:blog.url/>&quot;; }
var async = async || [];
(function () {
    var done = false;
    var script = document.createElement("script"),
    head = document.getElementsByTagName("head")[0] || document.documentElement;
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
    script.type = 'text/javascript'; 
    script.async = true;
    script.onload = script.onreadystatechange = function() {
        if (!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
            done = true;
            // Process async variable
            while(async.length) { // there is some syncing to be done
                var obj = async.shift();
                if (obj[0] =="ready") {
                    $(obj[1]);
                }else if (obj[0] =="load"){
                    $(window).load(obj[1]);
                }
            }
            async = {
                push: function(param){
                    if (param[0] =="ready") {
                        $(param[1]);
                    }else if (param[0] =="load"){
                        $(window).load(param[1]);
                    }
                }
            };
            // End of processing
            script.onload = script.onreadystatechange = null;
            if (head && script.parentNode) {
                head.removeChild(script);
            }
        }
    };
head.insertBefore(script, head.firstChild);
})();
// 

$(window).on(&#39;load&#39;, function () {
    $(&quot;iframe[id^=&#39;dsq-app&#39;]&quot;).each(function (i, el) {
        if(i===0 || i===2) {
            el.remove();
        };
    });
        });
const disqus = jQuery(&#39;#disqus_thread&#39;);

disqus.ready(function() {
  setTimeout(function() {
    if (disqus.children().length &gt;= 2) {
      const comments = disqus.find(&#39;iframe:nth-child(2)&#39;).detach();
      disqus.empty().append(comments);
    }
  }, 2000);
});
