var $buoop = {
    c:2,
    text_en: "Your browser %s is out of date. <a%s>Update your browser</a> for more security, and the best experience on this site.",
    url: "http://outdatedbrowser.com"
};

function $buo_f() {
    var e = document.createElement("script");
    e.src = "//browser-update.org/update.min.js";
    document.body.appendChild(e);
};

try {document.addEventListener("DOMContentLoaded", $buo_f,false)}
catch(e){window.attachEvent("onload", $buo_f)}

$(function () {
    $(".Plicense").popover({
        toggle: 'popover',
        html: true,
        trigger: 'hover focus',
        delay: {show: 10, hide: 300},
        placement: 'top',
        title: 'Parallax.js License',
        content: function() {
            return $('#p-popover-content').html();
        }
    });
});

$(function () {
    $(".Blicense").popover({
        toggle: 'popover',
        html: true,
        trigger: 'hover focus',
        delay: {show: 10, hide: 300},
        placement: 'top',
        title: 'Twitter Bootstrap License',
        content: function() {
            return $('#b-popover-content').html();
        }
    });
});

$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() > $(document).height() - 350) {
        $( 'footer').fadeIn('fast');
    } else {
        console.log('there');
        $('footer').fadeOut();
    }});
