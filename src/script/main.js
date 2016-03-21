/*
*   BTN MENU [ < 1200px ]
*/
$('.navbar-hidemenu-btn').on('click', function() {
    $(this).toggleClass('btn-animation');
    $('.navbar-hidemenu-block').toggleClass('block-animation');
});