<template>
  <div  class="nav-on-header smart-nav">
    <!-- Navigation bar -->
    <app-navigation />
    <!-- END Navigation bar -->


    <!-- Page header -->
    <app-header />
    <!-- END Page header -->


    <!-- Main container -->
    <main>


      <!-- Work Experience -->
      <base-work-experience />
      <!-- END Work Experience -->


      <!-- Skills -->
      <base-skills />
      <!-- END Skills -->


      <!-- Education -->
      <base-education />
      <!-- END Education -->


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
import BaseEducation from '~/components/BaseEducation.vue'
import BaseSkills from '~/components/BaseSkills.vue'
import BaseWorkExperience from '~/components/BaseWorkExperience.vue'

export default {
  components: {
    AppHeader,
    AppNavigation,
    AppFooter,
    BaseEducation,
    BaseSkills,
    BaseWorkExperience
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
