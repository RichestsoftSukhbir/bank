// header top position changer
let menu = document.querySelector(".menu");
let header = document.querySelector('header');
let ham = document.querySelector(".hamburger");

window.addEventListener("load", function () {
    headerTop();
});
window.addEventListener("resize", function () {
    headerTop();
});

ham.addEventListener("click", function () {
    menu.classList.toggle('active');
    ham.classList.toggle('active');
});

function headerTop() {
    let headerHeight = header.clientHeight;
    menu.style.top = (headerHeight + 1) + "px";
}

// nav active toggler
let menuItems = document.querySelectorAll(".menu-list a");



    // menuItems.forEach(function (element) {
    //     if (url == element.pathname) {
    //         element.classList.add("active");
    //     } else {
    //         element.classList.remove("active");
    //     }
    //     if (url == "" || url == "/") {
    //         document.querySelector(".menu-list:nth-child(1) a").classList.add("active");
    //     }
    // });

    $(function () {
        // infinite slide js
        $('.bank-logos').infiniteslide({
            speed: 50
        });

        // let url = window.location.href;
        // var page_id = url.substring(url.lastIndexOf('#') + 1);

        // if (page_id == "our-guarantee") {
        //     $('html, body').animate({
        //         scrollTop: $("#" + page_id).offset().top - 500
        //     }, 1000);
        // }

        var addClassOnScroll = function () {
            var windowTop = $(window).scrollTop();
            $('section[id]').each(function (index, elem) {
                var offsetTop = $(elem).offset().top;
                var outerHeight = $(this).outerHeight(true);

                let headHeight = $(".header").height();

                if( windowTop > (offsetTop - (headHeight + 10)) && windowTop < ( offsetTop + outerHeight)) {
                    var elemId = $(elem).attr('id');
                    $(".menu a.active").removeClass('active');
                    $(".menu a[href='#" + elemId + "']").addClass('active');
                }
            });
        };

        $(window).on('scroll', function () {
            addClassOnScroll();
        });

        $(".menu a[href^='#']").click(function(e) {
            e.preventDefault();
            $(".menu a.active").removeClass("active");
            $(this).addClass("active");
            
            let headHeight = $(".header").height();
            
            var position = $($(this).attr("href")).offset().top - headHeight;
        
            $("body, html").animate({
                scrollTop: position
            }, 0);
        });
    });