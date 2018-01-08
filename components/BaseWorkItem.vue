<template>
  <div class="col-xs-12">
    <div class="item-block">
      <header>
        <img :src="work.logo" alt="Logo Company">
        <div class="hgroup">
          <h4>{{ work.company }}</h4>
          <h5>{{ work.title }}</h5>
        </div>
        <h6 class="time">{{ work.years }}</h6>
      </header>
      <div class="item-body">
        <p>Responsibilities:</p>
        <ul>
          <li v-for="(responsibility, key) in work.responsibilities" :key="key">
            {{ responsibility }}.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['work']
  }
</script>
