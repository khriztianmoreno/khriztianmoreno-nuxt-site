<template>
  <footer class="site-footer">

    <!-- Top section -->
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-9">
          <h6>About</h6>
          <p class="text-justify">
            Currently co-organizing Medellin.js (Biggest JavaScript user group in Colombia), Avanet,
            MongoDB Medellin and Azure Cloud Medellin. I'm also part of the organizers team of .NETConf Colombia,
            the main .NET conference in the country.
          </p>
          <p class="text-justify">
            I have experience with Backend technologies such as Node.js,
            .Net and MongoDB. Cloud computing with Amazon AWS (S3, Lambda), Microsoft Azure
            (VM, Functions, Tables and Blob Storage, etc). Mobile experiencie with React Native also web mobile apps
            in HTML5. In frontend technologies such as Vue.JS, Vuex, NuxtJ.S, React, Redux, Angular,
            Immutable data structures, Bootstrap, Material design. Tools such as NPM, Yarn,
            Continuos Integration services such as CircleCI and Travis, Gulp, Grunt, Rollup and Webpack.
          </p>
        </div>

        <div class="col-xs-6 col-md-3">
          <h6>Communities</h6>
          <ul class="footer-links">
            <li>
              <a href="http://avanet.org/" target="_blank">Avanet</a>
            </li>
            <li>
              <a href="http://medellinjs.org/" target="_blank">MedellinJS</a>
            </li>
            <li>
              <a href="https://www.meetup.com/azure-cloud-medellin/" target="_blank">Azure Cloud Medellin</a>
            </li>
            <li>
              <a href="https://www.meetup.com/mongodb-medellin/" target="_blank">MongoDB Medellin</a>
            </li>
          </ul>
        </div>
      </div>

      <hr>
    </div>
    <!-- END Top section -->

    <!-- Bottom section -->
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-sm-6 col-xs-12">
          <p class="copyright-text">Copyrights &copy; 2018 All Rights.</p>
        </div>

        <div class="col-md-4 col-sm-6 col-xs-12">
          <base-network-social />
        </div>
      </div>
    </div>
    <!-- END Bottom section -->

  </footer>
</template>

<script>
  import BaseNetworkSocial from '~/components/BaseNetworkSocial.vue'
  export default {
    components: {
      BaseNetworkSocial
    }
  }
</script>
