<template>
  <AppLayout>
    <div class="cart-container">
      <h1 class="cart-title">Shopping Cart</h1>

      <div v-if="cartStore.items.length === 0" class="cart-empty">
        <div class="empty-icon">🛒</div>
        <p class="empty-text">Your cart is empty</p>
        <router-link to="/shop" class="btn-primary">Continue Shopping</router-link>
      </div>

      <div v-else class="cart-content">
        <div class="cart-table-wrapper">
          <table class="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cartStore.items" :key="item.id" class="cart-row">
                <td class="cart-product">{{ item.name }}</td>
                <td class="cart-price">${{ item.price.toFixed(2) }}</td>
                <td class="cart-quantity">
                  <div class="qty-control">
                    <button @click="decrementQty(item.id)" class="qty-btn">−</button>
                    <span class="qty-value">{{ item.quantity }}</span>
                    <button @click="incrementQty(item.id)" class="qty-btn">+</button>
                  </div>
                </td>
                <td class="cart-total">${{ (item.price * item.quantity).toFixed(2) }}</td>
                <td class="cart-action">
                  <button @click="removeItem(item.id)" class="btn-remove">Remove</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="cart-summary">
          <div class="summary-row">
            <span>Subtotal:</span>
            <span>${{ cartStore.total.toFixed(2) }}</span>
          </div>
          <div class="summary-row">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div class="summary-row summary-total">
            <span>Total:</span>
            <span>${{ cartStore.total.toFixed(2) }}</span>
          </div>

          <div class="cart-actions">
            <router-link to="/shop" class="btn-secondary">Continue Shopping</router-link>
            <button @click="checkout" class="btn-primary">Proceed to Checkout</button>
          </div>

          <button @click="clearCart" class="btn-clear">Clear Cart</button>
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<script>
import { cartStore } from '@/stores/cart'
import AppLayout from '@/Layouts/AppLayout.vue'

export default {
  name: 'Cart',
  components: { AppLayout },
  data() {
    return {
      cartStore
    }
  },
  methods: {
    incrementQty(productId) {
      const item = this.cartStore.items.find(i => i.id === productId)
      if (item) {
        item.quantity += 1
        this.cartStore.saveToLocalStorage()
      }
    },
    decrementQty(productId) {
      const item = this.cartStore.items.find(i => i.id === productId)
      if (item && item.quantity > 1) {
        item.quantity -= 1
        this.cartStore.saveToLocalStorage()
      }
    },
    removeItem(productId) {
      if (confirm('Remove this item from cart?')) {
        this.cartStore.removeItem(productId)
      }
    },
    clearCart() {
      if (confirm('Clear entire cart?')) {
        this.cartStore.clear()
      }
    },
    checkout() {
      alert(`Checkout not yet implemented.\nTotal: $${this.cartStore.total.toFixed(2)}`)
    }
  }
}
</script>

<style scoped>
.cart-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 20px;
  min-height: calc(100vh - 200px);
}

.cart-title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 30px;
  color: #1f2937;
}

.cart-empty {
  text-align: center;
  padding: 60px 20px;
  background: #f9fafb;
  border-radius: 12px;
}

.empty-icon {
  font-size: 64px;
  margin-bottom: 16px;
}

.empty-text {
  font-size: 18px;
  color: #6b7280;
  margin-bottom: 24px;
}

.cart-content {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 30px;
}

.cart-table-wrapper {
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  overflow-x: auto;
}

.cart-table {
  width: 100%;
  border-collapse: collapse;
}

.cart-table thead {
  background: #f3f4f6;
  border-bottom: 2px solid #e5e7eb;
}

.cart-table th {
  padding: 16px;
  text-align: left;
  font-weight: 600;
  color: #374151;
  font-size: 14px;
}

.cart-row {
  border-bottom: 1px solid #e5e7eb;
}

.cart-row:hover {
  background: #f9fafb;
}

.cart-row td {
  padding: 16px;
  font-size: 14px;
}

.cart-product {
  font-weight: 500;
  color: #111827;
}

.cart-price, .cart-total {
  font-weight: 600;
  color: #d946ef;
}

.cart-quantity {
  text-align: center;
}

.qty-control {
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  background: #f3f4f6;
  border-radius: 6px;
  padding: 4px;
  width: fit-content;
  margin: 0 auto;
}

.qty-btn {
  width: 28px;
  height: 28px;
  border: none;
  background: white;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  color: #374151;
  transition: all 0.2s;
}

.qty-btn:hover {
  background: #e5e7eb;
}

.qty-value {
  min-width: 30px;
  text-align: center;
}

.cart-action {
  text-align: center;
}

.btn-remove {
  padding: 6px 12px;
  background: #fee2e2;
  color: #dc2626;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.2s;
}

.btn-remove:hover {
  background: #fecaca;
}

.cart-summary {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  height: fit-content;
  position: sticky;
  top: 100px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  font-size: 14px;
  border-bottom: 1px solid #e5e7eb;
}

.summary-row:last-of-type {
  border-bottom: none;
}

.summary-total {
  font-weight: 700;
  font-size: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
  color: #1f2937;
}

.cart-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
}

.btn-primary {
  padding: 12px 16px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  transition: all 0.2s;
}

.btn-primary:hover {
  background: #1d4ed8;
}

.btn-secondary {
  padding: 12px 16px;
  background: transparent;
  color: #2563eb;
  border: 2px solid #2563eb;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  transition: all 0.2s;
}

.btn-secondary:hover {
  background: #dbeafe;
}

.btn-clear {
  width: 100%;;
  padding: 10px;
  background: transparent;
  color: #dc2626;
  border: 1px solid #fecaca;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  font-size: 13px;
  transition: all 0.2s;
  margin-top: 12px;
}

.btn-clear:hover {
  background: #fee2e2;
}

@media (max-width: 768px) {
  .cart-content {
    grid-template-columns: 1fr;
  }

  .cart-summary {
    position: static;
  }

  .cart-table th:nth-child(3),
  .cart-table th:nth-child(4),
  .cart-row td:nth-child(3),
  .cart-row td:nth-child(4) {
    display: none;
  }

  .cart-actions {
    flex-direction: row;
  }

  .btn-secondary {
    flex: 1;
  }

  .btn-primary {
    flex: 1;
  }
}
</style>
