import { reactive, computed } from 'vue'

export const cartStore = reactive({
  items: [],

  addItem(product) {
    const existing = this.items.find(item => item.id === product.id)
    if (existing) {
      existing.quantity += 1
    } else {
      this.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1
      })
    }
    this.saveToLocalStorage()
  },

  removeItem(productId) {
    this.items = this.items.filter(item => item.id !== productId)
    this.saveToLocalStorage()
  },

  clear() {
    this.items = []
    this.saveToLocalStorage()
  },

  saveToLocalStorage() {
    localStorage.setItem('toys-rush-cart', JSON.stringify(this.items))
  },

  loadFromLocalStorage() {
    const saved = localStorage.getItem('toys-rush-cart')
    if (saved) {
      this.items = JSON.parse(saved)
    }
  },

  get total() {
    return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  },

  get itemCount() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0)
  }
})
