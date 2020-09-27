import '../templates/HeroContent'
import '../templates/MainContent'

const Home = {
  async render () {
    return `
      <hero-content></hero-content>
      <main-content></main-content>
    `
  },

  async afterRender () {
    // TODO getData
  }
} 

export default Home