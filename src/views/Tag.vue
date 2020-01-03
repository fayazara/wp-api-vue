<template>
  <v-container>
    <Post :id="id" />
  </v-container>
</template>

<script>
import Post from '../components/Tag/Index';

export default {
  props: ['id'],
  name: 'tag',
  components: {
    Post
  }
};
</script>
