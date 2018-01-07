<template>
  <div class="col-xs-12">
    <div class="item-block">
      <header>
        <img :src="degree.image" alt="Image institute">
        <div class="hgroup">
          <h4>{{ degree.title }}
            <small>{{ degree.degree }}</small>
          </h4>
          <h5>{{ degree.institute }}</h5>
        </div>
        <h6 class="time">{{ degree.years }}</h6>
      </header>
      <div class="item-body">
        <p>{{ degree.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['degree']
  }
</script>

