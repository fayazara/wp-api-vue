<template>
  <v-app-bar app fixed elevate-on-scroll>
    <router-link to="/" tag="span" class="pointer">
      <v-toolbar-title to="/" class="headline">
        <span class="font-weight-bold">Trucaller Blog</span>
      </v-toolbar-title>
    </router-link>
    <v-spacer />
    <v-toolbar-items>
      <v-btn
        title="Dark mode"
        text
        @click="$store.state.dark = !$store.state.dark"
        ><v-icon light>mdi-brightness-4</v-icon></v-btn
      >
    </v-toolbar-items>
  </v-app-bar>
</template>
<script>
export default {};
</script>
