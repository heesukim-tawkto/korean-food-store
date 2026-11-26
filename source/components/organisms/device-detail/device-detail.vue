<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { PRODUCTS } from '@/data/products'

const route = useRoute()

const device = computed(() =>
  PRODUCTS.find((item) => item.id === route.params.id)
)
</script>

<template>
  <section v-if="device" class="device-detail">
    <RouterLink to="/" class="device-detail__back">← BACK TO INDEX</RouterLink>

    <header class="device-detail__header">
      <div class="device-detail__meta">
        <span class="device-detail__code">[{{ device.code }}]</span>
        <he-category-tag :label="device.category" />
      </div>
      <h1 class="device-detail__title">{{ device.name }}</h1>
      <p class="device-detail__tagline">{{ device.tagline }}</p>
    </header>

    <div class="device-detail__grid">
      <div class="device-detail__panel">
        <p class="device-detail__label">OVERVIEW</p>
        <p class="device-detail__description">{{ device.description }}</p>

        <p class="device-detail__label">KEY SPECIFICATIONS</p>
        <ul class="device-detail__specs">
          <li v-for="highlight in device.highlights" :key="highlight">
            • {{ highlight }}
          </li>
        </ul>
      </div>

      <aside class="device-detail__sidebar">
        <p class="device-detail__label">CONFIGURATION</p>
        <p class="device-detail__spec-badge">{{ device.spec }}</p>
        <p class="device-detail__price">${{ device.price }}</p>
        <button type="button" class="device-detail__cta">ADD TO BAG</button>
      </aside>
    </div>
  </section>

  <section v-else class="device-detail">
    <p>Device not found.</p>
    <RouterLink to="/" class="device-detail__back">← BACK TO INDEX</RouterLink>
  </section>
</template>