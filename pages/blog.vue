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

        <div class="col-xs-12">
          <base-post v-for="(post, key) in posts" :post="post" :key="key" />
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
  import axios from 'axios'

  import AppHeader from '~/components/AppHeader.vue'
  import AppNavigation from '~/components/AppNavigation.vue'
  import AppFooter from '~/components/AppFooter.vue'
  import BasePost from '~/components/BasePost.vue'

  export default {
    components: {
      AppHeader,
      AppNavigation,
      AppFooter,
      BasePost
    },
    data () {
      return { posts: [] }
    },
    async mounted () {
      this.backToTop()
      const { data } = await axios.get('api/medium')
      const posts = data.payload.references.Post
      this.posts = posts
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
