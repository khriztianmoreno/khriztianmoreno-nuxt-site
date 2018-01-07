<template>
  <section class="bg-alt">
    <div class="container">
      <header class="section-header">
        <span>Expertise Areas</span>
        <h2>Skills</h2>
      </header>

      <br>
      <ul class="skills cols-3">
        <base-skill-item v-for="(skill, key) in skills" :skill="skill" :key="key" />
      </ul>

    </div>
  </section>
</template>

<script>
  import BaseSkillItem from '~/components/BaseSkillItem.vue'

  import skills from '@/assets/content/skills'

  export default {
    components: {
      BaseSkillItem
    },
    data () {
      return {
        skills
      }
    }
  }
</script>
