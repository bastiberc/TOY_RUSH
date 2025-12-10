<template>
  <AppLayout>
    <div class="shop">
      <header class="shop-head">
        <h1 class="shop-head__title">
          <span class="shop-head__mark" aria-hidden="true"></span>
          Our Amazing Toys
        </h1>
        <p class="shop-head__sub">Find the perfect toy for any age!</p>

        <div class="shop-search">
          <span class="shop-search__icon" aria-hidden="true">🔍</span>
          <input
            class="shop-search__input"
            type="text"
            v-model.trim="search"
            placeholder="Search toys..."
          />
        </div>
      </header>

      <section class="shop-body">
        <aside class="filters" aria-label="Filters">
          <div class="filters__head">
            <span class="filters__icon" aria-hidden="true">🎛️</span>
            <span class="filters__title">Filters</span>
          </div>

          <div class="filters__group">
            <label class="filters__label">Category</label>
            <select class="filters__select" v-model="category">
              <option value="All">All Categories</option>
              <option value="Action Figures">Action Figures</option>
              <option value="Arts & Crafts">Arts & Crafts</option>
              <option value="Board Games">Board Games</option>
              <option value="Dolls">Dolls</option>
              <option value="Musical">Musical</option>
              <option value="Puzzles">Puzzles</option>
            </select>
          </div>

          <div class="filters__group">
            <label class="filters__label">Age Range</label>
            <select class="filters__select" v-model="ageRange">
              <option value="All">All Ages</option>
              <option value="3-5">Ages 3-5</option>
              <option value="3-10">Ages 3-10</option>
              <option value="5-12">Ages 5-12</option>
              <option value="2-8">Ages 2-8</option>
              <option value="4-10">Ages 4-10</option>
              <option value="8-12">Ages 8-12</option>
            </select>
          </div>

          <div class="filters__group">
            <label class="filters__label">Sort By</label>
            <select class="filters__select" v-model="sortBy">
              <option value="name-asc">Name (A → Z)</option>
              <option value="name-desc">Name (Z → A)</option>
              <option value="price-asc">Price (Low → High)</option>
              <option value="price-desc">Price (High → Low)</option>
            </select>
          </div>
        </aside>

        <div class="shop-content">
          <div class="shop-meta">
            Showing {{ filteredProducts.length }} of {{ products.length }} toys
          </div>

          <div class="grid">
            <article v-for="p in filteredProducts" :key="p.id" class="card">
              <div class="card__img">
                <img :src="p.image" :alt="p.name" class="card__image" />
              </div>

              <h3 class="card__name">{{ p.name }}</h3>

              <div class="card__tags">
                <span class="tag tag--blue">{{ p.category }}</span>
                <span class="tag tag--green">Ages {{ p.age }}</span>
              </div>

              <p class="card__desc">{{ p.desc }}</p>

              <div class="card__bottom">
                <div class="card__price">${{ p.price.toFixed(2) }}</div>
                <div class="card__stock">{{ p.stock }} Available</div>
              </div>

              <div class="card__actions">
                <button class="btn btn--add" type="button" @click="addToCart(p)">
                  <span aria-hidden="true">🛒</span> Add
                </button>
                <button class="btn btn--details" type="button" @click="openDetails(p)">
                  <span aria-hidden="true">ⓘ</span> Details
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
    <!-- Product details modal -->
    <ProductDetailsModal :open="modalOpen" :product="modalProduct" @close="modalOpen = false" @add="handleModalAdd" />
  </AppLayout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout.vue";
import ProductDetailsModal from '@/Pages/ProductDetailsModal.vue'

export default {
  name: "Shop",
  components: { AppLayout, ProductDetailsModal },
  data() {
    return {
      modalOpen: false,
      modalProduct: null,
      search: "",
      category: "All",
      ageRange: "All",
      sortBy: "name-asc",
      products: [
        { id: 1, name: "Action Hero Figure", category: "Action Figures", age: "5-10", desc: "Poseable action figure with cool accessories!", price: 19.99, stock: 20, emoji: "🦸", image: "/assets/product-1.svg" },
        { id: 2, name: "Art Supplies Box", category: "Arts & Crafts", age: "3-10", desc: "Complete art supplies for creative kids.", price: 18.99, stock: 22, emoji: "🎨", image: "/assets/product-2.svg" },
        { id: 3, name: "Board Game Party", category: "Board Games", age: "5-12", desc: "Fun family board game everyone will love!", price: 39.99, stock: 18, emoji: "🎲", image: "/assets/product-3.svg" },
        { id: 4, name: "Doll House Deluxe", category: "Dolls", age: "4-10", desc: "Spacious dollhouse with furniture included.", price: 89.99, stock: 5, emoji: "👧", image: "/assets/product-4.svg" },
        { id: 5, name: "Musical Drum Set", category: "Musical", age: "2-8", desc: "Kid-sized drum set with sticks included.", price: 59.99, stock: 7, emoji: "🥁", image: "/assets/product-5.svg" },
        { id: 6, name: "Puzzle Master 1000", category: "Puzzles", age: "8-12", desc: "1000 piece challenging puzzle for builders.", price: 34.99, stock: 8, emoji: "🧩", image: "/assets/product-6.svg" },
      ],
    };
  },
  computed: {
    filteredProducts() {
      let list = this.products.filter((p) => {
        const s = this.search.toLowerCase();
        const matchSearch = !this.search || p.name.toLowerCase().includes(s) || p.category.toLowerCase().includes(s);
        const matchCategory = this.category === "All" || p.category === this.category;
        const matchAge = this.ageRange === "All" || p.age === this.ageRange;
        return matchSearch && matchCategory && matchAge;
      });

      const sorters = {
        "name-asc": (a, b) => a.name.localeCompare(b.name),
        "name-desc": (a, b) => b.name.localeCompare(a.name),
        "price-asc": (a, b) => a.price - b.price,
        "price-desc": (a, b) => b.price - a.price,
      };

      return list.sort(sorters[this.sortBy]);
    },
  },
  methods: {
      addToCart(product) {
        // dispatch a global event so other parts of the app can pick it up
        const payload = { id: product.id, name: product.name, price: product.price };
        window.dispatchEvent(new CustomEvent('toy:add-to-cart', { detail: payload }));
        // optional simple feedback
        // close modal if open
        if (this.modalOpen) {
          this.modalOpen = false;
          this.modalProduct = null;
        }
        // also log for debugging
        console.log('Add to cart:', payload);
      },
      openDetails(product) {
        this.modalProduct = product;
        this.modalOpen = true;
      },
      handleModalAdd(product) {
        this.addToCart(product);
      },
  },
};
</script>

