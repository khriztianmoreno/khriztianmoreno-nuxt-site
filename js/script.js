
/*
 *----------------------------------------------------------------------
 * Functions
 *----------------------------------------------------------------------
 */

/**
 * [removeModal to remove the Modal View]
 */
function removeModal () {
  'use strict';
  $('.rex-modal').removeClass('rex-show').remove();
  $('.rex-overlay').remove();
}

/**
 * Function for re arranging Heading for the featured portfolio.
 * @param  {[jquery object]} obj [description]
 */
function moveH (obj) {
  'use strict';
  var h3 = obj.find('h3.rex-portfolio-name');
  var h4 = obj.find('h4.rex-portfolio-category');
  var hr = h3.next('hr');

  h3.insertAfter(hr);
  h4.insertBefore(hr);

  return obj;
}


// IIFE with jQuery Wrapper
(function($) {
  'use strict';

 // DOM Content Load Event Actions;
  $( window ).load(function() {
    $('div.loading').remove();
    $('body').removeClass('loading');
  });

  /*
   *----------------------------------
   * Document Ready
   *----------------------------------
   */
  $(document).ready(function() {


  // Reference Slider
  $('#reference').owlCarousel({
    items: 2,
    itemsDesktop: [1199,2],
    itemsDesktopSmall: [979,2],
    itemsTablet: [768,2],
    // autoPlay: 3500,
    pagination: true,
    navigation: false,
    navigationText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
  });

  if ( $('#skills').length ) {
    $(window).on('scroll.skill', function() {
      var hT = $('#skills').offset().top,
      hH = $('#skills').outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
      if (wS > (hT+hH-wH)){
        $('.skillbar').each(function(){
          $(this).find('.skillbar-bar').animate({
          width:$(this).attr('data-percent')
          },1500);
        });
        $(this).off('scroll.skill');
      }
    });
  }

  // flexNav

  $('.flexnav').flexNav({
    navArrow: '<i class="navicon fa fa-plus"></i>',
    'animationSpeed' : 300
  });



  $(window).on('load', function () {
    // Masonry
    $('.grid').masonry({
      // options...
      itemSelector: '.grid-item'
    });

  });


  // One Page Nav
  $('#navigation-menu').onePageNav({
    scrollThreshold: 0.8
  });




    // Sticky Nav
    if( $( window ).width() > 1024 ){
      // stellar prallax effect
      $('#rex-sticky').sticky({topSpacing:0});
    }

    // blog Nav
    if( $( window ).width() < 991 ){
      $('#rex-blog-slider').owlCarousel({
        items: 2,
        itemsDesktop: [1199,2],
        itemsDesktopSmall: [979,2],
        itemsTablet: [768,2],
        // autoPlay: 3500,
        pagination: true,
        navigation: false,
        navigationText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
      });

      // Experience Section
      $('#rex-experience-slider').owlCarousel({
        items: 2,
        itemsDesktop: [1199,2],
        itemsDesktopSmall: [979,1],
        itemsTablet: [768,1],
        // autoPlay: 3500,
        pagination: true,
        navigation: false,
        navigationText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
      });


      // Education Section
      $('#rex-education-slider').owlCarousel({
        items: 2,
        itemsDesktop: [1199,2],
        itemsDesktopSmall: [979,1],
        itemsTablet: [768,1],
        // autoPlay: 3500,
        pagination: true,
        navigation: false,
        navigationText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
      });

    }


  // scroll Up
  $.scrollUp();

  // Wow js
  if( $( window ).width() > 1024 ){
    // stellar prallax effect
    new WOW().init();
  }

  $('#typeText').typed({
    strings: ['Professional Photographer', 'Professional Web Designer', 'Professional Speaker', 'Professional Writer'],
    typeSpeed: 100,
    loop: true
  });

    // Activate Portfolio Filtering
    var portfolios      = $('#rex-portfolios');
    var figures         = portfolios.find('figure');
    var filters         = $('div.portfolio-filter');
    var first_portfolio = '';

    figures.find('figcaption').addClass('animated');
    filters.find('div').first().addClass('active');

    filters.on('click', 'div.filter', function() {
      // remove all animation properties
      figures.removeAttr('style data-wow-delay').removeClass('animated fadeIn fadeInUp');
      $('#portfolio-intro').removeAttr('style data-wow-delay').removeClass('animated fadeIn fadeInUp');

      filters.find('.active').removeClass('active');
      $(this).addClass('active');

      var currentFilter = $(this).data('filter');

      if (currentFilter === 'all') {
        figures.hide();
        $('#portfolio-intro').show().addClass('animated fadeIn');
        $('.dom-featured').remove();
        figures.show().addClass('animated fadeInUp');
      }else{
        figures.hide();
        var i = 0;
        $('.dom-featured').remove();
        $('#portfolio-intro').hide();
        $.each(figures, function(index, val) {
          if ($(val).hasClass(currentFilter)) {
            if (i === 0) {
              first_portfolio = val;
              i++;
              return;
            }
            $(val).show().addClass('animated fadeInUp');
          }
        });

        //Show the first item as featured
        var restult = $(first_portfolio).clone();
        restult
          .removeClass('col-lg-4 col-sm-6 rex-portfolio-item animated fadeInUp')
          .addClass('row rex-featured-portfolio dom-featured animated fadeIn')
          .insertBefore( '#rex-portfolios' );

        moveH(restult)
          .show()
          .closest('figure.rex-featured-portfolio.dom-featured')
            .find('img')
            .addClass('col-md-6')
            .next('figcaption').removeClass('animated zoomIn').addClass('col-md-6').show();

      }
    }); // end click

    // Disable Portfolio Hover Effect for Touch Devices;
    if (Modernizr.touch){
      $.each($('#rex-portfolios figure'), function() {
        $(this).find('figcaption').hide();
        $(this).find('figcaption img').css('transform', 'none');
      });
      $('div.owl-buttons').hide();
    }
    /**
     * Portfolio Modal
     */
    $('#rex-portfolios').on('click', 'figure.rex-portfolio-item', function(event) {
      event.preventDefault();

      var img = $(this).find('img').attr('src');
      var caption = $(this).find('figcaption').html();

      var modal = '';
      modal +='<figure class="rex-modal animated fadeIn rex-effect-1" id="modal-1">';
        modal +='<div class="rex-content">';

          modal += '<img class="img-responsive col-md-6" src="'+img+'">';
          modal += '<figcaption class="col-md-6 rex-modal-figcaption">'+caption+'</figcaption>';


          modal +='<button onclick="removeModal()" class="rex-close-modal"><i class="fa fa-times"></i></button>';
        modal +='</div>';
      modal +='</figure>';
      modal +='<div class="rex-overlay"></div>';
      // var ofSet = $(this).position().top - 168;// - $(window).scrollTop();
      var ofSet = window.scrollY + 100;
      $(modal).insertBefore('#portfolio-intro').css('top',  ofSet);
      $('.rex-modal').toggleClass('rex-show');
    });

    // Modal Hide on outside click.
    $('body').on( 'click', function() {

      // Hide the Portfolio Pop-UP on Outside click;
      $('div.rex-overlay').on('click', function() {
        if ($('figure.rex-modal').length) {
          $('.rex-modal').removeClass('rex-show').remove();
          $('.rex-overlay').remove();
        }
      });

    });

  /**
   * Modify navigation href on single pages
   */
  if( $('body').hasClass('single') ) {
    var $links = $('.flexnav li a');
    $links.each(function () {
      var currentHref = $(this).attr('href');
      $(this).attr('href', './' + currentHref);
    });
  }



  });// DOM Ready

}(jQuery)); // IIFE
