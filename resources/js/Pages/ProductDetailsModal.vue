<template>
  <div v-if="open" class="pdm-backdrop" @click.self="$emit('close')">
    <div class="pdm" role="dialog" aria-modal="true" aria-label="Product details">
      <!-- Image area -->
      <div class="pdm__imgWrap">
        <div class="pdm__img">
          <span class="pdm__emoji" aria-hidden="true">{{ product?.emoji }}</span>
        </div>
      </div>

      <!-- Content -->
      <div class="pdm__body">
        <h3 class="pdm__title">{{ product?.name }}</h3>

        <div class="pdm__tags">
          <span class="pdm-tag pdm-tag--blue">{{ product?.category }}</span>
          <span class="pdm-tag pdm-tag--green">Ages {{ product?.age }}</span>
        </div>

        <p class="pdm__desc">{{ product?.desc }}</p>

        <div class="pdm__stats">
          <div class="pdm__stat">
            <div class="pdm__label">Price</div>
            <div class="pdm__value pdm__value--price">
              ${{ product?.price?.toFixed(2) }}
            </div>
          </div>
          <div class="pdm__stat">
            <div class="pdm__label">Stock Available</div>
            <div class="pdm__value pdm__value--stock">
              {{ product?.stock }}
            </div>
          </div>
        </div>

        <div class="pdm__actions">
          <button class="pdm-btn pdm-btn--primary" type="button" @click="$emit('add', product)">
            <span aria-hidden="true">🛒</span> Add to Cart
          </button>
          <button class="pdm-btn pdm-btn--ghost" type="button" @click="$emit('close')">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetailsModal",
  props: { open: Boolean, product: Object },
  emits: ["close", "add"]
}
</script>

<style scoped>
.pdm-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(2, 6, 23, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 60;
}

.pdm {
  background: #fff;
  border-radius: 12px;
  max-width: 900px;
  width: 95%;
  display: flex;
  gap: 16px;
  padding: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.pdm__imgWrap {
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pdm__img {
  width: 200px;
  height: 200px;
  background: #f3f4f6;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
}

.pdm__body {
  flex: 1;
}

.pdm__title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 6px;
}

.pdm__tags {
  margin-bottom: 8px;
  display: flex;
  gap: 8px;
}

.pdm-tag {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
}

.pdm-tag--blue {
  background: #dbeafe;
  color: #1e40af;
}

.pdm-tag--green {
  background: #dcfce7;
  color: #166534;
}

.pdm__desc {
  color: #4a5568;
  margin-bottom: 12px;
  font-size: 14px;
}

.pdm__stats {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
}

.pdm__stat {
  flex: 1;
  background: #fef3c7;
  padding: 8px;
  border-radius: 6px;
}

.pdm__label {
  font-size: 12px;
  color: #6b7280;
  margin-bottom: 4px;
}

.pdm__value {
  font-size: 18px;
  font-weight: 700;
}

.pdm__value--price {
  color: #d946ef;
}

.pdm__value--stock {
  color: #16a34a;
}

.pdm__actions {
  display: flex;
  gap: 8px;
}

.pdm-btn {
  flex: 1;
  padding: 10px 12px;
  border-radius: 6px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.pdm-btn--primary {
  background: #dc2626;
  color: #fff;
}

.pdm-btn--primary:hover {
  background: #b91c1c;
}

.pdm-btn--ghost {
  background: transparent;
  border: 1px solid #d1d5db;
  color: #1f2937;
}

.pdm-btn--ghost:hover {
  background: #f3f4f6;
}
</style>
