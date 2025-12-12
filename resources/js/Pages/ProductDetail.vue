<template>
  <AppLayout>
    <div class="min-h-screen py-12 px-4">
      <div class="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <router-link to="/shop" class="text-blue-600 hover:underline mb-4 inline-block">← Back to Shop</router-link>

        <div v-if="product">
          <div class="flex flex-col md:flex-row gap-6">
            <div class="w-full md:w-1/2 flex items-center justify-center bg-gray-100 rounded-lg p-4">
              <img :src="product.image" :alt="product.name" class="max-h-64 object-contain" />
            </div>

            <div class="w-full md:w-1/2">
              <h1 class="text-3xl font-bold mb-2">{{ product.name }}</h1>
              <div class="text-gray-600 mb-4">Category: <strong>{{ product.category }}</strong></div>
              <div class="text-2xl font-semibold text-orange-600 mb-4">${{ product.price.toFixed(2) }}</div>
              <p class="text-gray-700 mb-6">{{ product.desc }}</p>

              <div class="flex items-center gap-3">
                <button @click="addToCart(product)" class="btn-primary">Add to Cart</button>
                <button @click="goShop" class="btn-secondary">Back to Shop</button>
              </div>
            </div>
          </div>

          <section class="mt-8">
            <h2 class="text-xl font-bold mb-2">Features</h2>
            <ul class="list-disc pl-5 text-gray-700">
              <li v-for="(f, idx) in product.features" :key="idx">{{ f }}</li>
            </ul>
          </section>
        </div>

        <div v-else class="text-center py-12">
          <p class="text-gray-600">Product not found.</p>
          <router-link to="/shop" class="text-blue-600 hover:underline">Return to shop</router-link>
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AppLayout from '@/Layouts/AppLayout.vue'

const route = useRoute()
const router = useRouter()

const id = Number(route.params.id || route.query.id || 0)

// Sample product data — in real app replace with API call
const products = ref([
  { id: 1, name: 'Rocket Racer', category: 'Action Figures', price: 19.99, desc: 'Speedy action car', image: '/assets/placeholder1.png', features: ['Durable', 'Lightweight', 'Battery included'] },
  { id: 2, name: 'Puzzle Planet', category: 'Puzzles', price: 24.99, desc: '1000-piece world puzzle', image: '/assets/placeholder2.png', features: ['1000 pieces', 'High-quality print', 'Frame-friendly'] },
  { id: 3, name: 'Cuddly Dino', category: 'Dolls', price: 14.99, desc: 'Soft plush friend', image: '/assets/placeholder3.png', features: ['Machine washable', 'Soft material', 'Kid-safe'] },
])

const product = computed(() => products.value.find((p) => p.id === id))

function addToCart(p) {
  window.dispatchEvent(new CustomEvent('toy:add-to-cart', { detail: { id: p.id, name: p.name, price: p.price } }))
  alert(`${p.name} added to cart`)
}

function goShop() {
  router.push({ name: 'Shop' })
}
</script>

<style scoped>
.btn-primary { @apply bg-blue-600 text-white px-4 py-2 rounded-md; }
.btn-secondary { @apply border border-gray-300 px-4 py-2 rounded-md; }
</style>

