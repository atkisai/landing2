$(document).ready(function () {

    //parallax
    $('.parallax-window-header').parallax({
        naturalWidth: 1400,
        naturalHeight: 1400,
        speed: 0.2
    });
    jQuery(window).trigger('resize').trigger('scroll');
});
