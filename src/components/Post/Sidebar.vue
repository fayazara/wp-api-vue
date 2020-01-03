<template>
  <v-list>
    <v-subheader>Categories</v-subheader>
    <div v-for="category in $store.state.categories" :key="category.id">
      <v-list-item
        link
        :append="false"
        :to="`/category/${category.id}?title=${category.name}`"
      >
        <v-list-item-content>
          <v-list-item-title>{{ category.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </div>
    <v-divider />
    <div class="pa-2">
      <v-subheader>Top 10 Tags</v-subheader>
      <v-chip-group multiple column>
        <v-chip
          pill
          v-for="tag in $store.state.tags"
          :key="tag.id"
          :append="false"
          :to="`/tag/${tag.id}?title=${tag.name}`"
        >
          <v-avatar left color="light-blue">
            {{ tag.count }}
          </v-avatar>
          {{ tag.name }}
        </v-chip>
      </v-chip-group>
    </div>
  </v-list>
</template>
