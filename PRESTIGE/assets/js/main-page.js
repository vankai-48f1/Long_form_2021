jQuery(document).ready(function () {
    // Open Menu Side
    jQuery('.hamburger-icon').on('click', function (e) {
        e.stopPropagation();

        jQuery('.header-side').addClass('open-menu');
        jQuery('.bg-opacity-dark').addClass('visible');
    })

    jQuery(document).on('click', (e) => {
        e.stopPropagation();

        if (!jQuery(e.target).closest('.header-side').length) {
            jQuery('.header-side').removeClass('open-menu');
            jQuery('.bg-opacity-dark').removeClass('visible');
        }

    })

    jQuery('.header-side__close-box').on('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        jQuery('.header-side').removeClass('open-menu');
        jQuery('.bg-opacity-dark').removeClass('visible');
    });

    jQuery('.main-page__open-btn-discover').on('click', (e) => {
        e.stopPropagation();

        // PAGE VIDEO
        jQuery('.main-page__open').addClass('hidden-ss');
        jQuery('.main-page__video').addClass('visible-ss')

        // auto play video after 2.5s
        // setTimeout(() => {
        //     jQuery('.main-page__video.visible-ss #mainPageVideo').get(0).play();
        //     jQuery('.main-page__video-icon-play').trigger('click')
        // }, 2500)

        // PAGE COLLECTION
        jQuery('.main-page__collection').addClass('visible-ss')
        jQuery('.main-page__collection-mb').addClass('visible-ss')
    })


    // const videoNode = jQuery('#mainPageVideo').get(0);

    // jQuery('.main-page__video-icon-play').on('click', (e) => {

    //     jQuery('.main-page__video-action-icon').addClass('action');

    //     let videoDuration = videoNode.duration;
    //     let videoTimeLine = jQuery('.main-page__video-timeline > span');

    //     videoNode.play();

    //     jQuery("#mainPageVideo").on("timeupdate", function () {

    //         let durationCurrent = jQuery(this).get(0).currentTime;
    //         let widthTimeLine = (durationCurrent / videoDuration) * 100;

    //         widthTimeLine = parseInt(widthTimeLine)

    //         videoTimeLine.css('width', widthTimeLine + '%')
    //         widthTimeLine === 100 ? jQuery('.main-page__video-icon-pause').trigger('click') : null;
    //     })
    // })

    // jQuery('.main-page__video-icon-pause').on('click', (e) => {
    //     videoNode.pause();

    //     jQuery('.main-page__video-action-icon').removeClass('action');
    // })

    // jQuery('.main-page__video-skip').on('click', (e) => {
    //     e.stopPropagation();

    //     jQuery('.main-page__video-icon-pause').trigger('click');

    //     jQuery('.main-page__video').removeClass('visible-ss');
    //     jQuery('.main-page__video').addClass('hidden-ss');

    //     jQuery('.main-page__collection').addClass('visible-ss')
    //     jQuery('.main-page__collection-mb').addClass('visible-ss')
    // })

    jQuery('.main-page__collection-mb-slide').slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 5000,
    })

})