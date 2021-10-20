    var disqus_config = function () {
        // Replace PAGE_URL with your page&#39;s canonical URL variable
        this.page.url = <data:blog.canonicalUrl/>;  
        
        // Replace PAGE_IDENTIFIER with your page&#39;s unique identifier variable
        this.page.identifier = <data:blog.pageId/>; 
    };
    */
    
    (function() {  // REQUIRED CONFIGURATION VARIABLE: EDIT THE SHORTNAME BELOW
        var d = document, s = d.createElement(&#39;script&#39;);
        
        // IMPORTANT: Replace EXAMPLE with your forum shortname!
        s.src = &#39;https://campusgate.disqus.com/embed.js&#39;;
        
        s.setAttribute(&#39;data-timestamp&#39;, +new Date());
        (d.head || d.body).appendChild(s);
    })();
