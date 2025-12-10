<template>
  <header class="tr-nav">
    <div class="tr-nav__inner">
      <!-- Logo -->
      <a class="tr-brand" href="/" aria-label="Toys Rush home">
        <span class="tr-brand__mark" aria-hidden="true"></span>
        <span class="tr-brand__text">
          <span class="tr-brand__text--orange">Toys</span>
          <span class="tr-brand__text--gray">Rush</span>
        </span>
      </a>

      <!-- Links -->
      <nav class="tr-links" aria-label="Primary">
        <a class="tr-link" href="/">Home</a>
        <a class="tr-link" href="/shop">Products</a>
        <a class="tr-link" href="/about">About</a>
        <a class="tr-link" href="/contact">Contact</a>
      </nav>

      <!-- Cart button -->
      <button class="tr-cart" type="button" aria-label="Open cart" @click="openCart">
        <svg class="tr-cart__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M6 6h15l-2 8H8L6 6Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linejoin="round"
          />
          <path
            d="M6 6 5 3H2"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm9 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
            stroke="currentColor"
            stroke-width="2"
          />
        </svg>
        <span v-if="cartCount > 0" class="tr-cart__badge">{{ cartCount }}</span>
      </button>
    </div>

    <!-- Yellow underline -->
    <div class="tr-nav__underline" aria-hidden="true"></div>
  </header>
</template>

<script>
import { cartStore } from '@/stores/cart'

export default {
  name: "Navbar",
  data() {
    return {
      cartStore
    }
  },
  computed: {
    cartCount() {
      return this.cartStore.itemCount
    }
  },
  methods: {
    openCart() {
      this.$router.push({ name: 'Cart' })
    }
  },
  mounted() {
    // Load cart from localStorage on app start
    this.cartStore.loadFromLocalStorage()
    
    // Listen for add-to-cart events from Shop/Modal
    window.addEventListener('toy:add-to-cart', (event) => {
      this.cartStore.addItem(event.detail)
    })
  }
}
</script>

<!-- no scoped here, since you're using a separate CSS file -->
