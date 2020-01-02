<template>
  <v-list>
    <v-subheader>Categories</v-subheader>
    <div v-for="category in $store.state.categories" :key="category.id">
      <v-list-item link :to="`categories/${category.id}`">
        <v-list-item-content>
          <v-list-item-title>{{ category.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </div>
    <v-divider />
    <div class="pa-2">
      <v-subheader>Tags</v-subheader>
      <v-chip-group multiple column>
        <v-chip v-for="tag in $store.state.tags" :key="tag.id">
          {{ tag.name }}
        </v-chip>
      </v-chip-group>
    </div>
  </v-list>
</template>
