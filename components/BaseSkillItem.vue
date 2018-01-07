<template>
  <li>
    <div>
      <span class="skill-name">{{ skill.name }}</span>
      <span class="skill-value">{{ skill.value }}</span>
    </div>
    <div class="progress">
      <div class="progress-bar" :style="progressBar"></div>
    </div>
  </li>
</template>

<script>
  export default {
    props: ['skill'],
    computed: {
      progressBar () {
        return `width: ${this.skill.value}`
      }
    }
  }
</script>

