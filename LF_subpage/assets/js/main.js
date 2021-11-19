// menu mobile
    jQuery(document).ready(function () {
        // open header menu side
        jQuery('.header__menu-bar-box').on('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            jQuery('.header-side').addClass('open-menu');
            jQuery('.bg-opacity-dark').addClass('visible');
        });


        jQuery('.header-side__close-box').on('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            jQuery('.header-side').removeClass('open-menu');
            jQuery('.bg-opacity-dark').removeClass('visible');
        });


        jQuery(document).on('click', (e) => {
            e.stopPropagation();

            if (!jQuery(e.target).closest('.header-side').length) {
                jQuery('.header-side').removeClass('open-menu');
                jQuery('.bg-opacity-dark').removeClass('visible');

            }

        })


    })


$('.carousel_2').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})