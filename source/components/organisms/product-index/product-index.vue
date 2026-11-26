<script setup lang="ts">
import { ref, computed } from 'vue'
import { PRODUCTS, type ProductCategory } from '@/data/products'

type FilterOption = 'all' | ProductCategory

const CATEGORIES: { label: string; value: FilterOption }[] = [
  { label: 'All', value: 'all' },
  { label: 'Audio', value: 'audio' },
  { label: 'Phone', value: 'phone' },
  { label: 'Tablet', value: 'tablet' },
  { label: 'Laptop', value: 'laptop' },
]

const selectedCategory = ref<FilterOption>('all')

const filteredProducts = computed(() => {
  if (selectedCategory.value === 'all') return PRODUCTS
  return PRODUCTS.filter((product) => product.category === selectedCategory.value)
})
</script>

<template>
  <section class="product-index">
    <header class="product-index__header">
      <div>
        <p class="product-index__eyebrow">HEESU ELECTRONICS · INDEX (2026)</p>
        <h1 class="product-index__title">Hardware Lineup</h1>
      </div>

      <div class="product-index__filters" role="group" aria-label="Filter by device type">
        <button
          v-for="cat in CATEGORIES"
          :key="cat.value"
          type="button"
          class="product-index__filter-btn"
          :class="{ 'is-active': selectedCategory === cat.value }"
          @click="selectedCategory = cat.value"
        >
          {{ cat.label }}
        </button>
      </div>
    </header>

    <ul class="product-index__grid">
      <he-product-list-item
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </ul>
  </section>
</template>