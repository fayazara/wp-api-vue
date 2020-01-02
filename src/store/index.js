import Vue from 'vue'
import Vuex from 'vuex'
import { API } from '../api';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dark: false,
    isLoading: false,
    posts: [],
    currentPost: null
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
          author: post.author,
          featured_image: post._embedded['wp:featuredmedia'][0].link,
        })
      })
    }
  },
  actions: {
    getAllPosts({ commit }, number) {
      this.state.isLoading = true;
      API.get('posts?_embed', {
        params: {
          page: number
        },
      }).then(response => {
        commit('SET_POSTS', response.data)
        this.state.isLoading = false;
      }).catch(err => {
        this.state.isLoading = false;
        alert(`Something went wrong - ${err}. Please reload the page`);
      })
    },
  }
})
