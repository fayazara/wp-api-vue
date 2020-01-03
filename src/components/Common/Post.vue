<template>
  <v-card :to="`/post/${post.id}`" height="100%" outlined>
    <v-img :src="post.featured_image">
      <span class="timestamp"
        ><time-ago :datetime="post.date" locale="en" long></time-ago
      ></span>
    </v-img>
    <v-card-text>
      <p class="title">{{ post.title }}</p>
      <p v-html="post.excerpt"></p>
    </v-card-text>
  </v-card>
</template>

<script>
import TimeAgo from 'vue2-timeago';

export default {
  props: ['post'],
  components: {
    TimeAgo
  }
};
</script>

<style>
.timestamp {
  padding: 4px;
  position: absolute;
  right: 0;
  background-color: #edf2f7bf;
  border-bottom-left-radius: 4px;
}
</style>
