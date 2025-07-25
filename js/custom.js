/*

Template: EV Spark - Electric Vehicle & Charging Stations HTML Template
Author: potenzaglobalsolutions
Design and Developed by: potenzaglobalsolutions.com

NOTE: This file contains all scripts for the actual Template.

*/

/*================================================
[  Table of contents  ]
================================================

:: Menu
:: Sticky
:: Counter
:: Countdown
:: Owl carousel
:: Swiper slider
:: Magnific Popup
:: Datetimepicker
:: Select2
:: Range Slider
:: Slickslider
:: Shuffle
:: Search
:: Back to Top

======================================
[ End table content ]
======================================*/
//POTENZA var

(function ($) {
  "use strict";
  var POTENZA = {};

/*************************
  Predefined Variables
*************************/
  var $window = $(window),
    $document = $(document),
    $body = $('body'),
    $countdownTimer = $('.countdown'),
    $pieChart = $('.round-chart'),
    $counter = $('.counter');
  //Check if function exists
  $.fn.exists = function () {
    return this.length > 0;
  };


/*************************
      Menu
  *************************/
  POTENZA.dropdownmenu = function () {
    if ($('.navbar').exists()) {
      $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
        if (!$(this).next().hasClass('show')) {
          $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');
        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
          $('.dropdown-submenu .show').removeClass("show");
        });
        return false;
      });
    }
  };

/*************************
         sticky
*************************/

POTENZA.isSticky = function () {
      var $window       = $(window);
      var lastScrollTop = 0;
      var $header       = $('.header');
      var headerHeight  = $header.outerHeight();

      $window.scroll(function() {

          var windowTop  = $window.scrollTop();

          if ( windowTop >= headerHeight ) {
            $header.addClass( 'is-sticky' );
          } else {
            $header.removeClass( 'is-sticky' );
            $header.removeClass( 'sticky-show' );
          }
        
          if ( $header.hasClass( 'is-sticky' ) ) {
            if ( windowTop < lastScrollTop ) {
              $header.addClass( 'sticky-show' );
            } else {
              $header.removeClass( 'sticky-show' );
            }
          }
          $('#lastscrolltop').text('LastscrollTop: ' + lastScrollTop);
        
          lastScrollTop = windowTop;
        
          $('#windowtop').text('scrollTop: ' + windowTop);
      } );
};



/*************************
       Counter
*************************/
  POTENZA.counters = function () {
    var counter = jQuery(".counter");
    if (counter.length > 0) {
      $counter.each(function () {
        var $elem = $(this);
        $elem.appear(function () {
          $elem.find('.timer').countTo();
        });
      });
    }
  }

/*************************
           Countdown
*************************/
  POTENZA.countdownTimer = function () {
    if ($countdownTimer.exists()) {
      $countdownTimer.downCount({
        date: '12/25/2023 12:00:00', // Month/Date/Year HH:MM:SS
        offset: -4
      });
    }
  }


/*************************
       Owl carousel
*************************/
  POTENZA.carousel = function () {
    var owlslider = jQuery("div.owl-carousel");
    if (owlslider.length > 0) {
      owlslider.each(function () {
        var $this = $(this),
          $items = ($this.data('items')) ? $this.data('items') : 1,
          $loop = ($this.attr('data-loop')) ? $this.data('loop') : true,
          $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : false,
          $navarrow = ($this.data('nav-arrow')) ? $this.data('nav-arrow') : false,
          $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : true,
          $autospeed = ($this.attr('data-autospeed')) ? $this.data('autospeed') : 5000,
          $smartspeed = ($this.attr('data-smartspeed')) ? $this.data('smartspeed') : 1000,
          $autohgt = ($this.data('autoheight')) ? $this.data('autoheight') : false,
          $space = ($this.attr('data-space')) ? $this.data('space') : 30,
          $animateOut = ($this.attr('data-animateOut')) ? $this.data('animateOut') : false;
        $(this).owlCarousel({
          loop: $loop,
          items: $items,
          responsive: {
            0: {
              items: $this.data('xx-items') ? $this.data('xx-items') : 1
            },
            480: {
              items: $this.data('xs-items') ? $this.data('xs-items') : 1
            },
            768: {
              items: $this.data('sm-items') ? $this.data('sm-items') : 2
            },
            980: {
              items: $this.data('md-items') ? $this.data('md-items') : 3
            },
            1200: {
              items: $items
            }
          },
          dots: $navdots,
          autoplayTimeout: $autospeed,
          smartSpeed: $smartspeed,
          autoHeight: $autohgt,
          margin: $space,
          nav: $navarrow,
          navText: ["<i class='fas fa-arrow-left-long'></i>", "<i class='fas fa-arrow-right-long'></i>"],
          autoplay: $autoplay,
          autoplayHoverPause: true
        });
      });
    }
  }


  /*************************
    Swiper slider
*************************/

  POTENZA.swiperAnimation = function () {
  var siperslider = jQuery(".swiper-container");
  if (siperslider.length > 0) {
  var swiperAnimation = new SwiperAnimation();
      var swiper = new Swiper(".swiper-container", {
        init : true,
        direction: "horizontal",
        effect: "fade",
        loop: true,

        keyboard: {
          enabled: true,
          onlyInViewport: true
        },
          // Navigation arrows
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        on: {
          init: function() {
            swiperAnimation.init(this).animate();
          },
          slideChange: function() {

            swiperAnimation.init(this).animate();
          }
        }
      });
    }
  }


  /*************************
      Magnific Popup
  *************************/
  POTENZA.mediaPopups = function () {
    if ($(".popup-single").exists() || $(".popup-gallery").exists() || $('.modal-onload').exists() || $(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
      if ($(".popup-single").exists()) {
        $('.popup-single').magnificPopup({
          type: 'image'
        });
      }
      if ($(".popup-gallery").exists()) {
        $('.popup-gallery').magnificPopup({
          delegate: 'a.portfolio-img',
          type: 'image',
          tLoading: 'Loading image #%curr%...',
          mainClass: 'mfp-img-mobile',
          gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
          }
        });
      }
      if ($(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
        });
      }
      var $modal = $('.modal-onload');
      if ($modal.length > 0) {
        $('.popup-modal').magnificPopup({
          type: 'inline'
        });
        $(document).on('click', '.popup-modal-dismiss', function (e) {
          e.preventDefault();
          $.magnificPopup.close();
        });
        var elementTarget = $modal.attr('data-target');
        setTimeout(function () {
          $.magnificPopup.open({
            items: {
              src: elementTarget
            },
            type: "inline",
            mainClass: "mfp-no-margins mfp-fade",
            closeBtnInside: !0,
            fixedContentPos: !0,
            removalDelay: 500
          }, 0)
        }, 1500);
      }
    }
  }

  /*************************
      Datetimepicker
  *************************/
  POTENZA.datetimepickers = function () {
    if ($('.datetimepickers').exists()) {
      $('#datetimepicker-01, #datetimepicker-02').datetimepicker({
        format: 'L'
      });
      $('#datetimepicker-03, #datetimepicker-04').datetimepicker({
        format: 'LT'
      });
    }
  };

  /*************************
      select2
  *************************/
  POTENZA.select2 = function () {
    if ($('.basic-select').exists()) {
      var select = jQuery(".basic-select");
      if (select.length > 0) {
        $('.basic-select').select2({dropdownCssClass : 'bigdrop'});
      }
    }
  };

/*************************
      Range Slider
*************************/
  POTENZA.rangesliders = function () {
    if ($('.property-price-slider').exists()) {
      var rangeslider = jQuery(".rangeslider-wrapper");
      $("#property-price-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 10000,
        from: 1000,
        to: 8000,
        prefix: "$",
        hide_min_max: true,
        hide_from_to: false
      });
    }
  };


/*************************
        Slickslider
*************************/
  POTENZA.slickslider = function () {
    if ($('.slider-for').exists()) {
      $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: false,
        focusOnSelect: true
      });
    }
  };

  /*************************
    Shuffle
  *************************/
   POTENZA.shuffle = function () {
    if (jQuery('.my-shuffle-container').exists()) {
    var Shuffle = window.Shuffle;
      var element = document.querySelector('.my-shuffle-container');
      var sizer = element.querySelector('.my-sizer-element');

      var shuffleInstance = new Shuffle(element, {
        itemSelector: '.grid-item',
        sizer: sizer, // could also be a selector: '.my-sizer-element'
        speed: 700,
        columnThreshold: 0
      });
      jQuery(document).ready(function(){
    jQuery( document ).on( 'click', '.btn-filter', function(){
          var data_group = jQuery(this).attr('data-group');
          if( data_group != 'all' ){
            shuffleInstance.filter([data_group]);
          } else {
            shuffleInstance.filter();
          }
        });
        $(".filters-group .btn-filter").on( 'click', function(){
            $(".filters-group .btn-filter").removeClass("active");
            $(this).addClass("active");
        });
      });
    }
 }


/*************************
     Search
*************************/
POTENZA.searchbox = function () {
  if ($("#search").exists()) {
    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });
    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
    //Do not include! This prevents the form from submitting for DEMO purposes only!
    $('form').submit(function(event) {
        event.preventDefault();
        return false;
    })
   }
}

/*************************
     Back to top
*************************/
  POTENZA.goToTop = function () {
    var $goToTop = $('#back-to-top');
    $goToTop.hide();
    $window.scroll(function () {
      if ($window.scrollTop() > 100) $goToTop.fadeIn();
      else $goToTop.fadeOut();
    });
    $goToTop.on("click", function () {
      $('body,html').animate({
        scrollTop: 0
      }, 1000);
      return false;
    });
  }




/*************************
     Featurebox
*************************/
POTENZA.featurebox = function () {
  $(".feature-item").hover(
      function() {
          $(".feature-item").removeClass('active');
          $(this).addClass('active');
      }
  );
}


/*************************
     Qty
*************************/
POTENZA.qty = function () {
  $(document).ready(function() {
      $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
      });
      $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
      });
    });
}

/****************************************************
    PieChart
****************************************************/
POTENZA.pieChart = function () {
  if ($pieChart.exists()) {
      $pieChart.each(function () {
          var $elem = $(this),
              pieChartSize = $elem.attr('data-size') || "100",
              pieChartAnimate = $elem.attr('data-animate') || "2000",
              pieChartWidth = $elem.attr('data-width') || "4",
              pieChartColor = $elem.attr('data-color') || "#ffffff",
              pieChartTrackColor = $elem.attr('data-trackcolor') || "$danger";
          $elem.find('span, i').css({
              'width': pieChartSize + 'px',
              'height': pieChartSize + 'px',
              'line-height': pieChartSize + 'px'
          });
          $elem.appear(function () {
              $elem.easyPieChart({
                  size: Number(pieChartSize),
                  animate: Number(pieChartAnimate),
                  trackColor: pieChartTrackColor,
                  lineWidth: Number(pieChartWidth),
                  barColor: pieChartColor,
                  scaleColor: false,
                  lineCap: 'square',
                  onStep: function (from, to, percent) {
                      $elem.find('span.percent').text(Math.round(percent));
                  }
              });
         });
      });
  }
}

//  use to mobile //

    // Scroll animation: reveal cards when in view
    const cards = document.querySelectorAll('.step-card');

    const revealOnScroll = () => {
      const triggerBottom = window.innerHeight * 0.9;

      cards.forEach(card => {
        const boxTop = card.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
          card.classList.add('show');
        } else {
          card.classList.remove('show');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);



  /****************************************************
       POTENZA Window load and functions
  ****************************************************/
  //Window load functions
  $window.on("load", function () {
     POTENZA.pieChart();
  });
  //Document ready functions
  $document.ready(function () {
    POTENZA.isSticky(),
    POTENZA.counters(),
    POTENZA.countdownTimer(),
    POTENZA.carousel(),
    POTENZA.swiperAnimation(),
    POTENZA.mediaPopups(),
    POTENZA.datetimepickers(),
    POTENZA.select2(),
    POTENZA.rangesliders(),
    POTENZA.slickslider(),
    POTENZA.shuffle(),
    POTENZA.searchbox(),
    POTENZA.featurebox(),
    POTENZA.goToTop(),
    POTENZA.qty();
  });
})(jQuery);


document.addEventListener('DOMContentLoaded', function () {
    const closeButton = document.querySelector('.btn-close-menu, .btn-close-menu-custom, .btn-close-circle');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (closeButton && navbarCollapse) {
      closeButton.addEventListener('click', function () {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) bsCollapse.hide();
      });
    }
  });