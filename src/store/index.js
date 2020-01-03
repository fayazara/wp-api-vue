import Vue from 'vue'
import Vuex from 'vuex'
import { API } from '../api';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dark: false,
    posts: [],
    categories: [],
    tags: []
  },
  mutations: {
    SET_POSTS(state, payload) {
      payload.map(post => {
        state.posts.push({
          id: post.id,
          date: post.date,
          title: post.title.rendered,
          content: post.content.rendered,
          excerpt: post.excerpt.rendered,
          author: post._embedded.author[0].name,
          featured_image: post._embedded['wp:featuredmedia'][0].link,
          related_posts: post['jetpack-related-posts']
        })
      })
    },
    SET_CATEGORIES(state, payload) {
      payload.map(category => {
        state.categories.push({
          id: category.id,
          name: category.name,
        })
      })
    },

    SET_TAGS(state, payload) {
      payload.map(tag => {
        state.tags.push({
          id: tag.id,
          name: tag.name,
          count: tag.count
        })
      })
    },

  },
  actions: {
    getAllPosts({ commit }, number) {
      API.get('posts?_embed', {
        params: {
          page: number
        },
      }).then(response => {
        commit('SET_POSTS', response.data)
      }).catch(err => {
        alert(`Something went wrong - ${err}. Please reload the page`);
      })
    },
    getCategories({ commit }) {
      API.get('categories', {
        params: {
          per_page: 50
        },
      }).then(response => {
        commit('SET_CATEGORIES', response.data)
      }).catch(err => {
        alert(`Something went wrong - ${err}. Please reload the page`);
      })
    },
    getTags({ commit }) {
      API.get('tags', {
        params: {
          orderby: 'count',
          order: 'desc'
        },
      }).then(response => {
        commit('SET_TAGS', response.data)
      }).catch(err => {
        alert(`Something went wrong - ${err}. Please reload the page`);
      })
    },
  },
})
