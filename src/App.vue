<template>
  <v-app
    :dark="
      $store.state.dark
        ? ($vuetify.theme.dark = true)
        : ($vuetify.theme.dark = false)
    "
  >
    <Navbar />
    <Main />
  </v-app>
</template>

<script>
import Main from './components/Layout/Main';
import Navbar from './components/Layout/Navbar';
export default {
  components: {
    Navbar,
    Main
  }
};
</script>
