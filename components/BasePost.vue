<template>
  <article class="post">
    <div class="post-media">
      <a :href="url" target="_blank">
        <img :src="imgCover" alt="Post Cover">
      </a>
    </div>

    <header>
      <h2>
        <a :href="url" target="_blank">{{ post.title }}</a>
      </h2>
      <time datetime="2016-04-04 20:00">{{ date }}</time>
    </header>

    <div class="blog-content">
      <p class="text-justify">
        {{ post.content.subtitle }}
      </p>
    </div>

    <p class="read-more">
      <a class="btn btn-primary btn-outline" :href="url" target="_blank">Continue reading</a>
    </p>
  </article>
</template>

<script>
  import moment from 'moment'

  export default {
    props: ['post'],
    computed: {
      date () {
        const date = new Date(this.post.createdAt)
        return moment(date).format('MMMM DD, YYYY')
      },
      url () {
        return `https://medium.com/@khriztianmoreno/${this.post.uniqueSlug}`
      },
      imgCover () {
        return `https://cdn-images-1.medium.com/fit/t/1600/480/${this.post.virtuals.previewImage.imageId}`
      }
    }
  }
</script>
