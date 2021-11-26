jQuery(document).ready(function () {


    function sliderCustom(sliderContainer, appendDots, sliderItem) {
        jQuery(sliderContainer).slick({
            dots: true,
            arrows: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            // autoplay: true,
            autoplaySpeed: 5000,
            appendDots: jQuery(appendDots),
            customPaging: function (slider, i) {

                let dot_logo = jQuery(slider.$slides[i]).find(sliderItem).attr("data-dot-logo");
                let number = jQuery(slider.$slides[i]).find(sliderItem).attr("data-number");
                let views = `<div class="dot-logo" data-slide-name="${sliderContainer}"><span class="dot-number" data-number="${number}">${number}</span><p class="dot-img" data-dot-logo="${dot_logo}">${dot_logo}</p></div>`;

                // return views;
                return `${number ? views : ''}`;
            }
        })
    }

    function singleSlider(sliderContainer) {
        jQuery(sliderContainer).slick({
            dots: true,
            arrows: true,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            // autoplay: true,
            autoplaySpeed: 5000,
        })
    }

    function createListDotCustom(slideItem, containerSlide) {
        let listSlideItem = jQuery(slideItem);
        let i = 0;

        listSlideItem.each((index, item) => {
            i++;

            let notSlideClone = jQuery(item).closest('.slick-slide');

            // console.log(!notSlideClone.hasClass('slick-cloned'));
            if (!notSlideClone.hasClass('slick-cloned')) {

                let dataNumber = Number(jQuery(item).attr('data-number'));
                let itemDot = '<li data-number="' + dataNumber + '"><button type="button"></button></li>';

                if (notSlideClone.hasClass('slick-current')) itemDot = '<li data-number="' + dataNumber + '" class="slick-active"><button type="button"></button></li>';

                let containerDot = jQuery(item).closest(containerSlide).find(".dots-custom");

                containerDot.append(itemDot);
            }
        })

    }

    function activeDotCustom(itemDotCustom, containerSlide, slide, dotDataNumber) {
        jQuery(document).on('click', itemDotCustom, function (e) {
            e.stopPropagation();


            let numberDotCustom = jQuery(this).attr('data-number');

            let dotLogo = jQuery(this).closest(containerSlide).find('.slider__dots .dot-number[data-number="' + numberDotCustom + '"]');

            dotLogo.closest('li').trigger('click');

        })

        dotDataNumber ? dotDataNumber : dotDataNumber = '.slider__dots li.slick-active .dot-number';

        jQuery(slide).on('afterChange', function (event, slick, direction) {
            let dotNumber = jQuery(this).closest(containerSlide).find(dotDataNumber).attr('data-number');
            console.log(dotNumber);
            jQuery(this).closest(containerSlide).find('.dots-custom li').removeClass('slick-active');

            jQuery(this).closest(containerSlide).find('.dots-custom li[data-number="' + dotNumber + '"]').addClass('slick-active');
        });
    }


    // slide
    // slide
    // slide

    // Long Form Page 1
    sliderCustom('.slider__prm-list', '.slider__prm .slider__dots', '.slider__prm-item');
    sliderCustom('.slider__second-list', '.slider__second .slider__dots', '.slider__second-item');
    sliderCustom('.slider__fourth-list', '.slider__fourth .slider__dots', '.slider__fourth-item');

    singleSlider('.slider__third-list');



    // long form page 2
    sliderCustom('.slider-lf2__prm-list', '.slider-lf2__prm .slider__dots', '.slider-lf2__prm-item');
    sliderCustom('.slider-lf2__second-list', '.slider-lf2__second .slider__dots', '.slider-lf2__prm-item');
    sliderCustom('.slider-lf2__fifth-list-mb', '.slider-lf2__fifth-dots-mb .slider__dots', '.slider-lf2__fifth-item');


    singleSlider('.slider-lf2__third-list');
    singleSlider('.slider-lf2__fifth-list');


    
    // Custom dot slick
    // Custom dot slick
    // Custom dot slick
    // Custom dot slick

    // Long Form 1 
    createListDotCustom('.slider__prm-list .slider__prm-item', '.slider-container');
    activeDotCustom('.slider__prm .dots-custom li', '.slider-container', '.slider__prm-list');

    createListDotCustom('.slider__second-list .slider__second-item', '.slider-container');
    activeDotCustom('.slider__second .dots-custom li', '.slider-container', '.slider__second-list');

    createListDotCustom('.slider__fourth-list .slider__fourth-item', '.slider-container');
    activeDotCustom('.slider__fourth .dots-custom li', '.slider-container', '.slider__fourth-list');


    // Long Form 2 
    createListDotCustom('.slider-lf2__prm-list .slider-lf2__prm-item', '.slider-container');
    activeDotCustom('.slider-lf2__prm .dots-custom li', '.slider-container', '.slider-lf2__prm-list');

    createListDotCustom('.slider-lf2__second-list .slider-lf2__second-item', '.slider-container');
    activeDotCustom('.slider-lf2__second .dots-custom li', '.slider-container', '.slider-lf2__second-list');

    // createListDotCustom('.slider-lf2__fifth-list .slider-lf2__fifth-item', '.slider-container');
    // activeDotCustom('.slider-lf2__fifth .dots-custom li', '.slider-container', '.slider-lf2__fifth-list', '.slider-lf2__fifth-dots .slider__dots li.slick-active .dot-number');

    // createListDotCustom('.slider-lf2__fifth-list-mb .slider-lf2__fifth-item', '.slider-container');
    // activeDotCustom('.slider-lf2__fifth-dots-mb .slider__dots li', '.slider-container', '.slider-lf2__fifth-list-mb');


    // custom dot logo slide fifth - long form 2

    const quantitySlideFifthItem = jQuery('.slider-lf2__fifth-list .slick-dots li');

    quantitySlideFifthItem.each((index, dotItem) => {
        jQuery(dotItem).attr("data-slide-num", index)
    })

    jQuery('.slider-lf2__fifth-dots .slider__dots li').on('click', function (e) {
        e.stopPropagation();


        let numberDotCustom = jQuery(this).attr('data-target-slide');
        let slideNam = jQuery(this).find('.dot-logo').attr("data-slide-name");
        let offsetTopSlide = jQuery(slideNam).offset().top;

        let dotSlide = jQuery(this).closest('.slider-container').find('.slider-lf2__fifth-list .slick-dots li[data-slide-num="' + numberDotCustom + '"]');
        // console.log(dotSlide);
        dotSlide.trigger('click');

        jQuery("html,body").scrollTop(offsetTopSlide)

    })



    // Set Position Arrow

    // set positin arrow slider primary
    const heightImageSlidePrm = jQuery('.slider__prm-item-thumb img').height();
    const offsetLeftWrap = jQuery('.header > .wrap').offset().left;
    const heightImageSliderThird = jQuery('.slider__third-item-thumb > img').height();

    // long form 2
    const heightImageSlideLf2Prm = jQuery('.slider-lf2__prm-product').outerHeight();
    const heightImageSlideLf2Third = jQuery('.slider-lf2__third-thumb-prd').outerHeight();
    const heightSlideLf2ThirdDesc = jQuery('.slider-lf2__third-thumb-prd .slider-lf2__prm-desc-content').outerHeight();


    jQuery('.slider__prm .slick-prev').css('top', heightImageSlidePrm / 2 + 'px');
    jQuery('.slider__prm .slick-next').css('top', heightImageSlidePrm / 2 + 'px');

    // Position dots custom slide primary
    jQuery('.slider__prm .dots-custom').css('top', heightImageSlidePrm - 50 + 'px');



    if (jQuery(window).width() > 1140) {

        jQuery('.slider__second-col--right').css('right', offsetLeftWrap + 'px');
        jQuery('.slider__fourth-desc--left').css('padding-left', offsetLeftWrap + 'px');
        jQuery('.slider__fourth-desc--right').css('padding-right', offsetLeftWrap + 'px');

    }

    if (jQuery(window).width() < 1024) {

        const heightImageSlideSecond = jQuery('.slider__second-item-thumb img').height();
        const heightImageSlideFourth = jQuery('.slider__fourth-item-thumb-bg img').height();


        jQuery('.slider__second .slick-arrow').css('top', heightImageSlideSecond / 2 + 'px');
        jQuery('.slider__fourth .slick-arrow').css('top', heightImageSlideFourth / 2 + 'px');

        // position arrow slide long form 2
        jQuery('.slider-lf2__prm .slick-prev').css('bottom', (heightImageSlideLf2Prm / 2) + 'px');
        jQuery('.slider-lf2__prm .slick-next').css('bottom', (heightImageSlideLf2Prm / 2) + 'px');

        jQuery('.slider-lf2__second .slick-prev').css('bottom', (heightImageSlideLf2Prm / 2) + 'px');
        jQuery('.slider-lf2__second .slick-next').css('bottom', (heightImageSlideLf2Prm / 2) + 'px');

        jQuery('.slider-lf2__third .slick-prev').css('bottom', (heightImageSlideLf2Third / 2) + 'px');
        jQuery('.slider-lf2__third .slick-next').css('bottom', (heightImageSlideLf2Third / 2) + 'px');

        jQuery('.slider-lf2__fourth .slick-prev').css('bottom', (heightImageSlideLf2Third / 2) + (heightSlideLf2ThirdDesc / 2) + 'px');
        jQuery('.slider-lf2__fourth .slick-next').css('bottom', (heightImageSlideLf2Third / 2) + (heightSlideLf2ThirdDesc / 2) + 'px');
    } else {

        jQuery('.slider-lf2__prm .slick-prev').css('left', offsetLeftWrap - 100 + 'px');
        jQuery('.slider-lf2__prm .slick-next').css('right', offsetLeftWrap - 100 + 'px');
        jQuery('.slider-lf2__prm .slick-prev').css('bottom', (heightImageSlideLf2Prm / 2) + 100 + 'px');
        jQuery('.slider-lf2__prm .slick-next').css('bottom', (heightImageSlideLf2Prm / 2) + 100 + 'px');

        jQuery('.slider-lf2__second .slick-prev').css('left', offsetLeftWrap - 100 + 'px');
        jQuery('.slider-lf2__second .slick-next').css('right', offsetLeftWrap - 100 + 'px');
        jQuery('.slider-lf2__second .slick-prev').css('bottom', (heightImageSlideLf2Prm / 2) + 100 + 'px');
        jQuery('.slider-lf2__second .slick-next').css('bottom', (heightImageSlideLf2Prm / 2) + 100 + 'px');

        jQuery('.slider-lf2__third .slick-prev').css('left', offsetLeftWrap - 100 + 'px');
        jQuery('.slider-lf2__third .slick-next').css('right', offsetLeftWrap - 100 + 'px');
        jQuery('.slider-lf2__third .slick-prev').css('bottom', (heightImageSlideLf2Third / 2) + 100 + 'px');
        jQuery('.slider-lf2__third .slick-next').css('bottom', (heightImageSlideLf2Third / 2) + 100 + 'px');

        jQuery('.slider-lf2__fourth .slick-prev').css('left', offsetLeftWrap - 100 + 'px');
        jQuery('.slider-lf2__fourth .slick-next').css('right', offsetLeftWrap - 100 + 'px');
        jQuery('.slider-lf2__fourth .slick-prev').css('bottom', (heightImageSlideLf2Third / 2) + 100 + 'px');
        jQuery('.slider-lf2__fourth .slick-next').css('bottom', (heightImageSlideLf2Third / 2) + 100 + 'px');

        // jQuery('.slider-lf2__fifth .slick-prev').css('left', offsetLeftWrap - 100 + 'px');
        // jQuery('.slider-lf2__fifth .slick-next').css('right', offsetLeftWrap - 100 + 'px');
    }

    if (jQuery(window).width() < 768) {
        jQuery('.slider__third-list .slick-dots').css('top', heightImageSliderThird - 50 + 'px');
    }


})





