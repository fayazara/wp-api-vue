<template>
  <v-row>
    <v-col cols="12" lg="9" md="8" sm="12">
      <div v-if="post">
        <p class="display-2">{{ post.title }}</p>
        <v-img class="mb-4" :src="post.featured_image"></v-img>
        <div class="d-flex justify-space-between mb-4">
          <p><v-icon>mdi-account</v-icon> {{ post.author }}</p>
          <p><time-ago :datetime="post.date" locale="en" long></time-ago></p>
        </div>
        <div v-html="post.content"></div>
        <v-divider />
        <p class="title mt-4">Related posts</p>
        <RelatedPosts :posts="post.related_posts" />
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
        <p>Loading post</p>
      </div>
    </v-col>
    <v-col cols="12" lg="3" md="8" sm="12">
      <Sidebar />
    </v-col>
  </v-row>
</template>

<script>
import { API } from '../../api';
import Sidebar from './Sidebar';
import TimeAgo from 'vue2-timeago';
import RelatedPosts from './RelatedPosts';

export default {
  props: ['id'],
  data() {
    return {
      post: null
    };
  },
  components: {
    Sidebar,
    TimeAgo,
    RelatedPosts
  },
  methods: {
    getPost() {
      this.post = null;
      API.get(`posts/${this.id}?_embed`)
        .then(response => {
          this.post = {
            id: response.data.id,
            date: response.data.date,
            featured_image: response.data._embedded['wp:featuredmedia'][0].link,
            title: response.data.title.rendered,
            content: response.data.content.rendered,
            author: response.data._embedded.author[0].name,
            related_posts: response.data['jetpack-related-posts']
          };
        })
        .catch(err => {
          alert(`Something went wrong - ${err}. Please reload the page`);
        });
    }
  },
  mounted() {
    this.getPost();
  },
  watch: {
    $route() {
      window.location.reload();
    }
  }
};
</script>

<style>
.max-width-875 {
  max-width: 875;
}
</style>
