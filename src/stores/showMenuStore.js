import { defineStore } from 'pinia'

const useShowMenuStore = defineStore('showMenuStore', {
  state: () => ({
    showMenu: true
  }),
  actions: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    }
  }
})

export default useShowMenuStore
