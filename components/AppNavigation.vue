<template>
  <nav class="navbar">
    <div class="container">
      <!-- Logo -->
      <div class="pull-left">
        <a class="navbar-toggle" href="#" data-toggle="offcanvas">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </a>

        <!--<div class="logo-wrapper">
          <a class="logo" href="index.html">
            <img src="img/logo.png" alt="logo">
          </a>
          <a class="logo-alt" href="index.html">
            <img src="img/logo-alt.png" alt="logo-alt">
          </a>
        </div>-->

      </div>
      <!-- END Logo -->

      <!-- Navigation menu -->
      <ul class="nav-menu">
        <li>
          <nuxt-link to="/" exact>Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/blog" exact>Blog</nuxt-link>
        </li>
      </ul>
      <!-- END Navigation menu -->

    </div>
  </nav>
</template>

<script>
  /* eslint-disable */
  export default {
    mounted () {
      this.menuResponsive()
    },
    methods: {
      menuResponsive () {
        let lastScrollTop = 0
        let smartScrollTimeout
        $(window).on('scroll', function() {
          clearTimeout(smartScrollTimeout)
          var st = $(this).scrollTop()
          var navbar = $('.smart-nav.body-scrolled .navbar')

          if (st > 20) {
            $('body').addClass('body-scrolled')
          }
          else {
            $('body').removeClass('body-scrolled')
            navbar.css('top', '')
            return
          }

          if ($('body').hasClass('offcanvas-show') || navbar.find('.user-account.open').length) {
            return
          }

          // Smart scroll
          if (st >= lastScrollTop) { // Downscroll
            navbar.css('top', "-70px")
          }
          else { // Upscroll
            navbar.css('top', '0')
            smartScrollTimeout = setTimeout(function(){
              navbar.css('top', "-70px")
            }, 5000)
          }

          lastScrollTop = st
        })

        $('[data-toggle="offcanvas"]').on('click', function (e) {

          e.preventDefault()
          clearTimeout(smartScrollTimeout)

          $('body').addClass('offcanvas-show')
          $('.navbar').prepend('<div class="offcanvas-backdrop"></div>')
          //$(this).children().toggleClass('ti-menu ti-close')
          $('html').css('overflow', 'hidden')

          /*
          if ($('body').hasClass('offcanvas-show')) {
            $('html').css('overflow', 'hidden')
          }
          else {
            $('html').css('overflow', 'visible')
          }
          */

        })

        // Don't hide navbar if mouse hover on it
        $('.navbar').on('mouseenter', function(){
          clearTimeout(smartScrollTimeout)
        })

        $(document).on('click', '.offcanvas-backdrop', function(){
          $('body').removeClass('offcanvas-show')
          $('html').css('overflow', 'visible')
          $('.offcanvas-backdrop').remove()
        })

        $(window).on('resize', function(){
          if ($(window).width() > 991) {
            $('body').removeClass('offcanvas-show')
            $('html').css('overflow', 'visible')
          }
        })
      }
    }
  }
</script>
