<template>
  <v-container>
    <Post :id="id" />
  </v-container>
</template>

<script>
import Post from '../components/Post/Index';

export default {
  props: ['id'],
  name: 'post',
  components: {
    Post
  }
};
</script>
