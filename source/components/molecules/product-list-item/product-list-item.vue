<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Product } from '@/data/products'

interface Props {
  product: Product
}

const props = defineProps<Props>()
</script>

<template>
  <article class="product-list-item">
    <RouterLink :to="`/device/${props.product.id}`" class="product-list-item__card">
      <div class="product-list-item__top">
        <span class="product-list-item__code">[{{ props.product.code }}]</span>
        <he-category-tag :label="props.product.category" />
      </div>

      <div class="product-list-item__body">
        <h2 class="product-list-item__name">{{ props.product.name }}</h2>
        <p class="product-list-item__spec">{{ props.product.spec }}</p>
      </div>

      <div class="product-list-item__footer">
        <span class="product-list-item__price">${{ props.product.price }}</span>
        <span class="product-list-item__arrow">↗</span>
      </div>
    </RouterLink>
  </article>
</template>