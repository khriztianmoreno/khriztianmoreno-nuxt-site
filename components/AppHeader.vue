<template>
  <header class="page-header bg-img" style="background-image: url(img/bg-banner2.jpg); background-size: cover; background-position: bottom;">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-4">
          <img src="img/profile.jpg" alt="Profile Image">
        </div>

        <div class="col-xs-12 col-sm-8 header-detail">
          <div class="hgroup">
            <h1>Cristian Moreno</h1>
            <h3>FullStack Javascript Developer</h3>
          </div>
          <hr>
          <p class="lead">
            I'm a community leader and altruistic speaker, JavaScript/Node.js evangelist and Fullstack Javascript Developer.
            Currently co-organize Medellin.js (Biggest JavaScript user group in Colombia), Avanet and Azure Cloud Medellin communities.
          </p>
          <p class="lead">
            I love developing things, especially ideas, giving them a new perspective and making them shine! products and applications
            come after I transform ideas into code; I'm passionate about software development and related stuff.
          </p>

          <ul class="details cols-2">
            <li>
              <i class="fa fa-map-marker"></i>
              <span>Medellín, Colombia</span>
            </li>

            <li>
              <i class="fa fa-globe"></i>
              <a href="//www.khriztianmoreno.com">khriztianmoreno.com</a>
            </li>

            <li>
              <i class="fa fa-money"></i>
              <span>$60 / hour</span>
            </li>

            <li>
              <i class="fa fa-birthday-cake"></i>
              <span>{{ yearsOld }} years-old</span>
            </li>

            <li>
              <i class="fa fa-phone"></i>
              <span>(+57) 300 525 2805</span>
            </li>

            <li>
              <i class="fa fa-envelope"></i>
              <a href="mailto:khriztianmoreno@gmail.com">khriztianmoreno@gmail.com</a>
            </li>
          </ul>

          <div class="tag-list">
            <span>Node.JS</span>
            <span>Express.JS</span>
            <span>VueJS</span>
            <span>React.JS</span>
            <span>FlexBox</span>
            <span>SASS / LESS</span>
            <span>NoSQL / SQL</span>
            <span>Webpack</span>
            <span>Git</span>
          </div>
        </div>
      </div>

      <div class="button-group">
        <base-network-social />

        <div class="action-buttons">
          <a class="btn btn-gray" href="https://res.cloudinary.com/khriztianmoreno/image/upload/v1611186445/cv_cristian/CV_Cristian.pdf" target="_blank">Download CV</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import moment from 'moment'
  import BaseNetworkSocial from '~/components/BaseNetworkSocial.vue'

  export default {
    components: {
      BaseNetworkSocial
    },
    computed: {
      yearsOld: function () {
        return moment().diff('1989-09-18', 'years', false)
      }
    }
  }
</script>
