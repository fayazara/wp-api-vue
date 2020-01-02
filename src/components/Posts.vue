<template>
  <v-container>
    <ul>
      <li v-for="post in $store.state.posts" :key="post.id">
        <p>{{ post.title }}</p>
      </li>
    </ul>
    <button @click="getPosts">Load more</button>
  </v-container>
</template>

<script>
export default {
  name: 'Posts',
  data() {
    return {
      page: 0,
    };
  },
  methods: {
    getPosts() {
      this.page++;
      this.$store.dispatch('getAllPosts', this.page);
    }
  },
  mounted() {
    this.getPosts();
  }
};
</script>
