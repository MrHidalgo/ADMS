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
$('.navbar-hidemenu-btn').on('click', function(e) {
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
*   A SMOOTH TRANSITION FOR ANCHORS
*/
$(document).ready(function(){
    $(".navbar-menu, .navbar-hidemenu-block").on("click","a", function (event) {
        event.preventDefault();

        var id  = $(this).attr('href'),
            top = $(id).offset().top;

        $('body,html').animate(
            {
                scrollTop: top - 75
            }, 1000
        );
    });
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

    $('.ourProduct-container > h1, .ourProduct-container > p').addClass('hidden').viewportChecker(
        {
            classToAdd: 'visible animated fadeInDown',
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
            classToAdd: 'visible animated slideInUp',
            classToRemove : 'hidden',
            offset: 350
        }
    );


});