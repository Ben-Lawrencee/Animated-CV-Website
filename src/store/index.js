import { createStore } from 'vuex'

export default createStore({
  state: {
    cards: [
      {url: '/', color: 'var(--);'},
      {url: '/about', color: 'var(--);'},
      {url: '/education', color: 'var(--);'},
      {url: '/experience', color: 'var(--);'},
      {url: '/projects', color: 'var(--);'}],
    navigationPreviouslyActivated: false,
    mainTransitioning: false
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
