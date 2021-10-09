let myCoolCode = document.createElement("script");
    myCoolCode.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/cash/8.1.0/cash.min.js");
    document.body.appendChild(myCoolCode);

(function($){
    setInterval(() => {
        $.each($('iframe'), (arr,x) => {
            let src = $(x).attr('src');
            if (src && src.match(/(ads-iframe)|(disqusads)/gi)) {
                $(x).remove();
            }
        });
    }, 300);
})(cash);
