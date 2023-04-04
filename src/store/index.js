import { createStore } from 'vuex'

export default createStore({
  state: {
    cards: [
      {title: 'Home page', url: '/', color: '#F9C823', icon: require('@/assets/home.svg')},
      {title: 'About me', url: '/about', color: '#F9AC34', icon: require('@/assets/contact.svg')},
      {title: 'Education', url: '/education', color: '#FA8A49', icon: require('@/assets/education.svg')},
      {title: 'Experience', url: '/experience', color: '#FB685F', icon: require('@/assets/work.svg')},
      {title: 'Hobby Projects', url: '/projects', color: '#FC506E', icon: require('@/assets/projects.svg')}],
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
