<template>
  <v-content>
    <div>
      <transition name="scroll-y-transition" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </v-content>
</template>
