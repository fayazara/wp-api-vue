<template>
  <transition name="fade-transition" mode="out-in">
    <div v-if="$store.state.posts.length > 0">
      <v-row>
        <v-col
          cols="12"
          sm="3"
          md="4"
          v-for="post in $store.state.posts"
          :key="post.id"
        >
          <Post :post="post" />
        </v-col>
      </v-row>
      <div class="d-flex justify-center">
        <v-btn depressed @click="getPosts">Load more</v-btn>
      </div>
    </div>
    <div
      v-else
      class="text-center d-flex justify-center align-center flex-column"
      style="height:100vh;"
    >
      <v-progress-circular
        :size="50"
        color="primary"
        indeterminate
        class="mb-8"
      ></v-progress-circular>
      <p>Loading posts</p>
    </div>
  </transition>
</template>

<script>
import Post from './Post';
export default {
  name: 'Posts',
  data() {
    return {
      page: 0
    };
  },
  methods: {
    getPosts() {
      this.page++;
      this.$store.dispatch('getAllPosts', this.page);
    }
  },
  created() {
    this.getPosts();
  },
  components: {
    Post
  }
};
</script>
