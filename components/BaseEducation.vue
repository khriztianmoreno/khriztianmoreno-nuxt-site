<template>
  <section>
    <div class="container">

      <header class="section-header">
        <span>Latest degrees</span>
        <h2>Education</h2>
      </header>

      <div class="row">
        <base-education-degree v-for="(degree, key) in degrees" :key="key" :degree="degree" />
      </div>

    </div>
  </section>
</template>

<script>
  import BaseEducationDegree from '~/components/BaseEducationDegree.vue'

  import degrees from '@/assets/content/education'

  export default {
    components: {
      BaseEducationDegree
    },
    data () {
      return {
        degrees
      }
    }
  }
</script>
