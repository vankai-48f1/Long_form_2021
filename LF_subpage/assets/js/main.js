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

// back to top

const buttonBackToTop = document.querySelector('.btn-back-to-top');

if (buttonBackToTop)
    window.onscroll = function () { scrollFunction() };

function scrollFunction() {

    if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
        buttonBackToTop.classList.add('show-btn')
    } else {
        buttonBackToTop.classList.remove('show-btn');
    }
}

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


$('.carousel_1').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ["<div><img src='./assets/images/images-page4/arrow_left.png' alt='lỗi'></div>", "<div><img src='./assets/images/images-page4/arrow_right.png' alt='lỗi'></div>"],
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

$('.carousel_2').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})