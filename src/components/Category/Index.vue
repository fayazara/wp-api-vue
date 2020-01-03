<template>
  <section>
    <p class="title my-4">Category: {{ $route.query.title }}</p>
    <transition name="fade-transition" mode="out-in">
      <v-row v-if="$store.state.posts_by_category.length > 0" key="1">
        <v-col
          cols="12"
          sm="3"
          md="4"
          v-for="post in $store.state.posts_by_category"
          :key="post.id"
        >
          <Post :post="post" />
        </v-col>
      </v-row>
      <div
        v-else
        key="2"
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
  </section>
</template>

<script>
import Post from '../Common/Post';
export default {
  name: 'Posts',
  props: ['id'],
  methods: {
    getPosts() {
      this.page++;
      this.$store.dispatch('getPostsByCategories', this.id);
    }
  },
  components: {
    Post
  },
  mounted(){
    this.getPosts();
  },
  watch: {
    $route() {
      this.getPosts();
    }
  }
};
</script>
