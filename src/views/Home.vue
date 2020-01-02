<template>
  <v-container>
    <Posts />
  </v-container>
</template>

<script>
import Posts from '../components/Posts/Index';

export default {
  name: 'home',
  components: {
    Posts
  }
};
</script>
