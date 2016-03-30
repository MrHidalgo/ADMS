/*
*   REMOVE/CLOSE RIGHT MENU FUNCTION
*/
function closeRemoveRightMenu() {
    $('.navbar-hidemenu-block').removeClass('block-animation');
    $('.navbar-hidemenu-btn').removeClass('btn-animation');
}

/*
*   BTN MENU CLICK [ < 1200px ]
*/
$('.navbar-hidemenu-btn').on('click', function() {
    $(this).toggleClass('btn-animation');
    $('.navbar-hidemenu-block').toggleClass('block-animation');
});


/*
*   CLOSE RIGHT MENU IF CLICK OUT BLOCK
*/
$(document).click( function(e) {
    var et = $(e.target);

    if(et.closest('.navbar-hidemenu-btn').length === 1)
        return;

    if(et.closest('.navbar-hidemenu-block').length === 0) {
        closeRemoveRightMenu();
    }

    e.stopPropagation();
});


/*
*   NAVIGATION FIXED IN TOP AFTER SCROLL
*/
$(window).scroll( function() {
    var countScroll     = $(window).scrollTop(),
        headerOffset    = $('section.header-navigation'),
        hiddenMenu      = $('.navbar-hidemenu-block');


    if (countScroll > 27 ) {
        headerOffset.css(
            {
                'top'           : '0',
                'transition'    : '.6s'
            }
        );
    }
    else {
        headerOffset.css(
            {
                'top'           : '1.6875em',
                'transition'    : '.6s'
            }
        );
    }

    /* if scroll window and menu right/visible then close */
    if(countScroll && hiddenMenu.is(':visible')) {
        closeRemoveRightMenu();
    }
});


/*
*   A SMOOTH TRANSITION FOR ANCHORS & SCROLLSPY
*/
(function($) {
    // Cache selectors
    var lastId,
        topMenu         = $(".navbar-menu-list"),
        topMenuHeight   = topMenu.outerHeight(),
            // All list items
        menuItems       = topMenu.find("a"),
            // Anchors corresponding to menu items
        scrollItems     = menuItems.map(function(){
            var item    = $($(this).attr("href"));

            if (item.length) {
                return item;
            }
        });

    function clickItemMenu(id){
        var offsetTop = $(id).offset().top - topMenuHeight + 1;

        $('html, body').stop().animate(
            {
                scrollTop: offsetTop
            }, 1000
        );
    }

    // Bind click handler to menu items, so we can get a fancy scroll animation
    menuItems.click( function(e){
        var href = $(this).attr("href");

        clickItemMenu(href);

        e.preventDefault();
    });

    /* skip video btn */
    $(".header-btn-video").on("click","a", function (event) {
        var href = $(this).attr("href");

        clickItemMenu(href);

        event.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function(){
                // Get container scroll position
        var fromTop = $(this).scrollTop() + topMenuHeight,
                // Get id of current scroll item
            cur     = scrollItems.map(function(){
                if ($(this).offset().top < fromTop){
                    return this;
                }
            });

        // Get the id of the current element
        cur = cur[cur.length-1];

        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems.removeClass("active").filter("[href='#" + id + "']").addClass("active");
        }
    });
})(jQuery);


/*
*   LOGOTYPE CLICK BACK TO TOP
*/
$('.navbar-logo').click( function () {
    $('body,html').animate(
        {
            scrollTop: 0
        }, 1000
    );
});


/*
*   ACCORDION
*/
$(document).ready(function() {
    function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(500).removeClass('open');
    }

    $('.accordion-section-title').click(function(e) {
        var currentAttrValue = $(this).attr('href');

        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();

            $(this).addClass('active');
            $('.accordion ' + currentAttrValue).slideDown(500).addClass('open');
        }

        e.preventDefault();
    });
});


/*
*   VIDEO CLICK PLAY/PAUSE
*/
$('video').click( function() {
    var self = this,
        bool = self.paused;

    /* function play video */
    function playVideo(opt){
        opt.play();
    }

    /* function pause video */
    function pauseVideo(opt){
        opt.pause();
    }

    bool === false ? pauseVideo(self) : playVideo(self);
});


/*
*   PAUSE VIDEO BTN
*/
function pauseVideo() {
    var vid = document.getElementById('video');

    if(vid.paused === false)
        vid.pause();
}


/*
*   ADD ACTIVE CLASS FOR MENU ITEM
*/
// $('.navbar-menu-list li a').on('click', function () {
//     $('.navbar-menu-list li a').removeClass('active');
//     $(this).addClass('active');
// });


/*
*   SIGN IN PAGE 
*/
$('.btn-signin').on('click', function() {
    var loginValue   = $('.signin-login').val(),
        passValue    = $('.signin-password').val();

    if(loginValue === 'admin' && passValue === 'admin') {
        $('.signin-login, .signin-password').css(
            'border' , '1px solid #008fc0'
        );
        $.ajax(
            {
                url     : 'index-main.html',
                cache   : false,
                success : function(html){
                    setTimeout( function(){
                            $('section#signin').fadeOut('slow')
                    }, 500);
                    setTimeout( function(){
                            $('body').fadeIn('slow').html(html)
                    }, 1000);
                }
            }
        );
    } else{
        $('.signin-login, .signin-password').css(
                'border' , '1px solid red'
        );
    }
});


/*
*   AFTER SCROLL & VISIBLE BLOCK ADD ANIMATION
*/
$(document).ready( function() {
    $('.about-container').addClass('hidden').viewportChecker(
        {
            classToAdd: 'visible animated fadeInRight',
            classToRemove : 'hidden',
            offset: 350
        }
    );

    $('.philosophy-container').addClass('hidden').viewportChecker(
        {
            classToAdd: 'visible animated fadeIn',
            classToRemove : 'hidden',
            offset: 350
        }
    );

    $('.ourProduct-info .ebs, .ourProduct-info .ais').addClass('hidden').viewportChecker(
        {
            classToAdd: 'visible animated fadeInLeft',
            classToRemove : 'hidden',
            offset: 350
        }
    );

    $('.ourProduct-info .outsourcing, .ourProduct-info .operational').addClass('hidden').viewportChecker(
        {
            classToAdd: 'visible animated fadeInRight',
            classToRemove : 'hidden',
            offset: 350
        }
    );

    $('.product-container').addClass('hidden').viewportChecker(
        {
            classToAdd: 'visible animated fadeInLeft',
            classToRemove : 'hidden',
            offset: 350
        }
    );

    $('.ebs-block-container').addClass('hidden').viewportChecker(
        {
            classToAdd: 'visible animated slideInRight',
            classToRemove : 'hidden',
            offset: 350
        }
    );

    $('.atm-block-container').addClass('hidden').viewportChecker(
        {
            classToAdd: 'visible animated slideInLeft',
            classToRemove : 'hidden',
            offset: 350
        }
    );

    $('.system-row').addClass('hidden').viewportChecker(
        {
            classToAdd: 'visible animated slideInUp',
            classToRemove : 'hidden',
            offset: 350
        }
    );

    $('.out-service-container').addClass('hidden').viewportChecker(
        {
            classToAdd: 'visible animated slideInRight',
            classToRemove : 'hidden',
            offset: 350
        }
    );

    $('.electronicSystem-container').addClass('hidden').viewportChecker(
        {
            classToAdd: 'visible animated slideInRight',
            classToRemove : 'hidden',
            offset: 350
        }
    );
});
