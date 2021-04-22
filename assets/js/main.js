
(function($) {
    'use strict';

    //===== 01. Main Menu
    function mainMenu() {
        // Variables
        var var_window = $(window),
            navContainer = $('.header-navigation'),
            navbarToggler = $('.navbar-toggler'),
            navMenu = $('.nav-menu'),
            navMenuLi = $('.nav-menu ul li ul li'),
            closeIcon = $('.navbar-close');
        // navbar toggler
        navbarToggler.on('click', function() {
            navbarToggler.toggleClass('active');
            navMenu.toggleClass('menu-on');
        });
        // close icon
        closeIcon.on('click', function() {
            navMenu.removeClass('menu-on');
            navbarToggler.removeClass('active');
        });
        // adds toggle button to li items that have children
        navMenu.find('li a').each(function() {
            if ($(this).next().length > 0) {
                $(this).parent('li').append('<span class="dd-trigger"><i class="fas fa-angle-down"></i></span>');
            }
        });
        // expands the dropdown menu on each click
        navMenu.find('li .dd-trigger').on('click', function(e) {
            e.preventDefault();
            $(this).parent('li').children('ul').stop(true, true).slideToggle(350);
            $(this).parent('li').toggleClass('active');
        });
        // check browser width in real-time
        function breakpointCheck() {
            var windoWidth = window.innerWidth;
            if (windoWidth <= 1199) {
                navContainer.addClass('breakpoint-on');
            } else {
                navContainer.removeClass('breakpoint-on');
            }
        }
        breakpointCheck();
        var_window.on('resize', function() {
            breakpointCheck();
        });
    };
    // Panel Widget
    var panelIcon = $('.off-menu'),
    panelClose = $('.panel-close'),
    panelWrap = $('.offcanvas-panel');

    panelIcon.on('click', function (e) {
        panelWrap.toggleClass('panel-on');
        e.preventDefault();
    });
    panelClose.on('click', function (e) {
        panelWrap.removeClass('panel-on');
        e.preventDefault();
    });
    // Document Ready
    $(document).ready(function() {
        mainMenu();
    });
    //===== Prealoder
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut('500');
    })
    
    //===== Sticky
    $(window).on('scroll', function(event) {
        var scroll = $(window).scrollTop();
        if (scroll < 190) {
            $(".header-navigation").removeClass("sticky");
        } else {
            $(".header-navigation").addClass("sticky");
        }
    });

    //===== Back to top
    $(window).on('scroll', function(event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });
    /*----------------------
        Counter js
    ------------------------*/
    $('.counter').counterUp({
        delay: 80,
        time: 4000
    });
    /*---------------------- 
       Slick Slider js
    ------------------------*/
    $('.hero-slider-one').slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="fal fa-long-arrow-left"></i></div>',
		nextArrow: '<div class="next"><i class="fal fa-long-arrow-right"></i></div>',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    $('.hero-slider-two').slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="fal fa-long-arrow-left"></i></div>',
		nextArrow: '<div class="next"><i class="fal fa-long-arrow-right"></i></div>',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    $('.sponsor-slide-one').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    var sliderArrows = $('.team-arrows-one');
    $('.team-slider-one').slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        appendArrows: sliderArrows,
        prevArrow: '<div class="prev"><i class="fal fa-long-arrow-left"></i></div>',
        nextArrow: '<div class="next"><i class="fal fa-long-arrow-right"></i></div>',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.testimonial-slider-one').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.testimonial-slider-two').slick({
        dots: true,
        arrows: false,
        infinite: false,
        autoplay: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    arrows: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 991,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.blog-slider-one').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    var sliderArrows = $('.blog-arrows-two');
    $('.blog-slider-two').slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        appendArrows: sliderArrows,
        prevArrow: '<div class="prev"><i class="fal fa-long-arrow-left"></i></div>',
        nextArrow: '<div class="next"><i class="fal fa-long-arrow-right"></i></div>',
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    /*---------------------- 
        Slick Slider js
    ------------------------*/
    /*---------------------- 
        magnific-popup js
    ----------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });

    // Isotope js
    $('#masonry-portfolio').imagesLoaded( function() {
        // items on button click
        $('.filter-btn').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        // menu active class
        $('.filter-btn li').on('click', function (e) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
        });
        var $grid = $('.masonry-row').isotope({
            itemSelector: '.product-column',
            percentPosition: true,
            masonry: {
                columnWidth: 1
            }
        });
    });

})(window.jQuery);