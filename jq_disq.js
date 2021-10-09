                var element6 = document.createElement(&quot;script&quot;);
element6.src = &quot;https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js&quot;;
document.body.appendChild(element6);

(function($){
    setInterval(() => {
        $.each($('iframe'), (arr,x) => {
            let src = $(x).attr('src');
            if (src && src.match(/(ads-iframe)|(disqusads)/gi)) {
                $(x).remove();
            }
        });
    }, 300);
})(jQuery);
