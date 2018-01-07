<template>
  <div class="nav-on-header smart-nav">
    <!-- Navigation bar -->
    <app-navigation />
    <!-- END Navigation bar -->

    <!-- Site header -->
    <header class="page-header bg-img size-lg" style="background-image: url(img/bg-banner2.jpg); background-size: cover; background-position: bottom;">
      <div class="container no-shadow">
        <h1 class="text-center">Blog</h1>
        <p class="lead text-center">Keep up to date with the latest news</p>
      </div>
    </header>
    <!-- END Site header -->


    <!-- Main container -->
    <main class="container blog-page">

      <div class="row">

        <div class="col-md-8 col-lg-9">

          <article class="post">
            <div class="post-media">
              <a href="page-post.html"><img src="assets/img/blog-1.jpg" alt="..."></a>
            </div>

            <header>
              <h2><a href="page-post.html">How to Design Your Workspace for Productivity</a></h2>
              <time datetime="2016-04-04 20:00">April 04, 2016</time>
            </header>

            <div class="blog-content">
              <p class="text-justify">One of the greatest benefits of a well-designed workspace and consequently, the option of privacy in the office is an increase in engagement and productivity among workers. Of the 11 percent of survey respondents who were highly satisfied with their work environments, the majority said that their workplace allowed them to concentrate easily, work in teams without being interrupted, choose where to work based on their task, and feel a sense of belonging to the company and its culture.</p>
            </div>

            <p class="read-more">
              <a class="btn btn-primary btn-outline" href="page-post.html">Continue reading</a>
            </p>
          </article>


          <article class="post">
            <div class="post-media">
              <a href="page-post.html"><img src="assets/img/blog-2.jpg" alt="..."></a>
            </div>

            <header>
              <h2><a href="page-post.html">Office Dress Code Do's and Don'ts</a></h2>
              <time datetime="2016-03-28 20:00">March 28, 2016</time>
            </header>

            <div class="blog-content">
              <p class="text-justify">Office-appropriate fashion seems fairly obvious. So why do so many employees still make eyebrow-raising mistakes, especially during summer? The problem could be your company’s dress code policy, or lack of one. If you still don’t have a policy, you’re not alone: Plenty of companies are content to work without a formal dress code. That is, until the receptionist waltzes in one sweltering day in shorts, a tank top, and gladiator sandals.</p>
            </div>

            <p class="read-more">
              <a class="btn btn-primary btn-outline" href="page-post.html">Continue reading</a>
            </p>
          </article>


          <article class="post">
            <div class="post-media">
              <a href="page-post.html"><img src="assets/img/blog-3.jpg" alt="..."></a>
            </div>

            <header>
              <h2><a href="page-post.html">Why People Thrive in Coworking Spaces</a></h2>
              <time datetime="2016-03-17 20:00">March 17, 2016</time>
            </header>

            <div class="blog-content">
              <p class="text-justify">There seems to be something special about coworking spaces. As researchers who have, for years, studied how employees thrive, we were surprised to discover that people who belong to them report levels of thriving that approach an average of 6 on a 7-point scale. This is at least a point higher than the average for employees who do their jobs in regular offices, and something so unheard of that we had to look at the data again.</p>
            </div>

            <p class="read-more">
              <a class="btn btn-primary btn-outline" href="page-post.html">Continue reading</a>
            </p>
          </article>


          <nav>
            <ul class="pager">
              <li class="previous"><a href="#"><i class="ti-arrow-left"></i> Older posts</a></li>
              <li class="next"><a href="#">Newer posts <i class="ti-arrow-right"></i></a></li>
            </ul>
          </nav>

        </div>

        <div class="col-md-4 col-lg-3">

          <div class="widget">
            <h6 class="widget-title">Search</h6>
            <div class="widget-body">
              <form method="get" target="#">
                <input class="form-control" type="text" name="s" placeholder="Enter your keyword">
              </form>
            </div>
          </div>

          <div class="widget">
            <h6 class="widget-title">Popular</h6>
            <ul class="widget-body media-list">
              <li>
                <div class="thumb"><a href="page-post.html"><img src="assets/img/blog-1-thumb.jpg" alt="..."></a></div>
                <div class="content">
                  <h5><a href="page-post.html">How to Design Your Workspace for Productivity</a></h5>
                  <time datetime="2016-04-04 20:00">April 04, 2016</time>
                </div>
              </li>

              <li>
                <div class="thumb"><a href="page-post.html"><img src="assets/img/blog-2-thumb.jpg" alt="..."></a></div>
                <div class="content">
                  <h5><a href="page-post.html">Office Dress Code Do's and Don'ts</a></h5>
                  <time datetime="2016-03-28 20:00">March 28, 2016</time>
                </div>
              </li>

              <li>
                <div class="thumb"><a href="page-post.html"><img src="assets/img/blog-3-thumb.jpg" alt="..."></a></div>
                <div class="content">
                  <h5><a href="page-post.html">Why People Thrive in Coworking Spaces</a></h5>
                  <time datetime="2016-03-17 20:00">March 17, 2016</time>
                </div>
              </li>
            </ul>
          </div>

          <div class="widget widget_categories">
            <h6 class="widget-title">Categories</h6>
            <ul class="widget-body">
              <li class="cat-item"><a href="#">News</a></li>
              <li class="cat-item"><a href="#">Companies</a></li>
              <li class="cat-item"><a href="#">Market</a></li>
              <li class="cat-item"><a href="#">Candidates</a></li>
              <li class="cat-item"><a href="#">Positions</a></li>
              <li class="cat-item"><a href="#">Stats</a></li>
            </ul>
          </div>

          <div class="widget widget_tag_cloud">
            <h6 class="widget-title">Tags</h6>
            <div class="widget-body">
              <a href="#">blog</a>
              <a href="#">new</a>
              <a href="#">google</a>
              <a href="#">position</a>
              <a href="#">facebook</a>
              <a href="#">hire</a>
              <a href="#">chance</a>
              <a href="#">resume</a>
              <a href="#">tip</a>
            </div>
          </div>

        </div>

      </div>

    </main>
    <!-- END Main container -->


    <!-- Site footer -->
    <app-footer />
    <!-- END Site footer -->

    <!-- Back to top button -->
    <a id="scroll-up" href="#">
      <i class="fa fa-angle-up"></i>
    </a>
    <!-- END Back to top button -->
  </div>
</template>

<script>
  import AppHeader from '~/components/AppHeader.vue'
  import AppNavigation from '~/components/AppNavigation.vue'
  import AppFooter from '~/components/AppFooter.vue'

  export default {
    components: {
      AppHeader,
      AppNavigation,
      AppFooter
    },
    mounted () {

    },
    methods: {
      /* eslint-disable */
      backToTop () {
        $('#scroll-up').on( 'click', function() {
          $('html, body').animate({scrollTop : 0}, 600)
          return false
        })
      }
    }
  }
</script>
