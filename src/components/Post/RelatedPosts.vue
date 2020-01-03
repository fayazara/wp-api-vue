<template>
  <v-row class="mt-4">
    <v-col cols="12" sm="3" md="4" v-for="post in filteredPosts" :key="post.id">
      <Post :post="post" />
    </v-col>
  </v-row>
</template>

<script>
import Post from '../Common/Post';
export default {
  props: ['posts'],
  data() {
    return {
      filteredPosts: []
    };
  },
  components: {
    Post
  },
  mounted() {
    this.posts.map(post => {
      this.filteredPosts.push({
        id: post.id,
        date: post.date,
        title: post.title,
        excerpt: post.excerpt,
        featured_image: post.img.src
      });
    });
  }
};
</script>

<style></style>
