<template>
  <v-container>
    <Post :id="id" />
  </v-container>
</template>

<script>
import Post from '../components/Category/Index';

export default {
  props: ['id'],
  name: 'category',
  components: {
    Post
  }
};
</script>
