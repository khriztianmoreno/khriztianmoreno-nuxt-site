<template>
  <section>
    <div class="container">
      <header class="section-header">
        <span>Past positions</span>
        <h2>Work Experience</h2>
      </header>

      <div class="row">

        <!-- Work item -->
        <base-work-item v-for="(exp, key) in experiences" :work="exp" :key="key"/>
        <!-- END Work item -->

      </div>

    </div>
  </section>
</template>

<script>
  import BaseWorkItem from '~/components/BaseWorkItem.vue'

  import experiences from '@/assets/content/workExperience'

  export default {
    components: {
      BaseWorkItem
    },
    data () {
      return {
        experiences
      }
    }
  }
</script>
