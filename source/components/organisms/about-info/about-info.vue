<script setup lang="ts">
import { RouterLink } from 'vue-router'

interface Principle {
  code: string
  title: string
  description: string
}

const PRINCIPLES: Principle[] = [
  {
    code: '01',
    title: 'Transparent Engineering',
    description:
      'We strip away unnecessary decoration so the materials, circuitry, and structural intent speak for themselves.',
  },
  {
    code: '02',
    title: 'Distraction-Free Software',
    description:
      'Every device ships with a calm, monochrome-first interface designed to return focus and time back to the user.',
  },
  {
    code: '03',
    title: 'Built to Endure',
    description:
      'CNC-milled aluminum, modular components, and long-term firmware support mean fewer replacements and less waste.',
  },
]

const SPECS = [
  { label: 'FOUNDED', value: '2026' },
  { label: 'DESIGN STUDIO', value: 'KUALA LUMPUR / SEOUL' },
  { label: 'PRODUCT LINEUP', value: 'AUDIO · PHONE · TABLET · LAPTOP' },
  { label: 'WARRANTY', value: '2-YEAR GLOBAL HARDWARE COVERAGE' },
]
</script>

<template>
  <section class="about-info">
    <header class="about-info__header">
      <p class="about-info__eyebrow">HEESU ELECTRONICS · MANIFESTO (2026)</p>
      <h1 class="about-info__title">Making technology feel human again.</h1>
    </header>

    <div class="about-info__grid">
      <div class="about-info__story">
        <p class="about-info__label">PHILOSOPHY</p>
        <p class="about-info__lead">
          Heesu Electronics was founded on a simple conviction: modern personal hardware has
          become too loud, too opaque, and overly complicated.
        </p>
        <p class="about-info__body">
          We design everyday tools—earphones, smartphones, tablets, and laptops—with industrial
          clarity and tactile honesty. Every chamfer, glyph indicator, and interface state is
          engineered to feel intuitive from the first touch.
        </p>

        <RouterLink to="/" class="about-info__cta">EXPLORE HARDWARE LINEUP ↗</RouterLink>
      </div>

      <aside class="about-info__specs">
        <p class="about-info__label">STUDIO TELEMETRY</p>
        <dl class="about-info__list">
          <div v-for="item in SPECS" :key="item.label" class="about-info__row">
            <dt class="about-info__dt">{{ item.label }}</dt>
            <dd class="about-info__dd">{{ item.value }}</dd>
          </div>
        </dl>
      </aside>
    </div>

    <div class="about-info__principles">
      <article
        v-for="principle in PRINCIPLES"
        :key="principle.code"
        class="about-info__card"
      >
        <span class="about-info__code">[{{ principle.code }}]</span>
        <h2 class="about-info__card-title">{{ principle.title }}</h2>
        <p class="about-info__card-desc">{{ principle.description }}</p>
      </article>
    </div>
  </section>
</template>