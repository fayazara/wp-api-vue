<template>
  <section>
    <p class="title my-4">Tag: {{ $route.query.title }}</p>
    <transition name="fade-transition" mode="out-in">
      <v-row v-if="posts.length > 0" key="1">
        <v-col
          cols="12"
          sm="3"
          md="4"
          v-for="post in posts"
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
import { API } from '../../api';
import Post from '../Common/Post';
export default {
  name: 'Posts',
  props: ['id'],
  data() {
    return {
      posts: []
    };
  },
  methods: {
    getPosts() {
      API.get('posts?_embed', {
        params: {
          per_page: '25',
          tags: this.id
        }
      })
        .then(response => {
          response.data.map(post => {
            this.posts.push({
              id: post.id,
              date: post.date,
              title: post.title.rendered,
              content: post.content.rendered,
              excerpt: post.excerpt.rendered,
              author: post._embedded.author[0].name,
              featured_image: post._embedded['wp:featuredmedia'][0].link,
              related_posts: post['jetpack-related-posts']
            });
          });
        })
        .catch(err => {
          alert(`Something went wrong - ${err}. Please reload the page`);
        });
    }
  },
  components: {
    Post
  },
  mounted() {
    this.getPosts();
  }
};
</script>
