<script setup lang="ts">
import { RouterLink } from 'vue-router'

interface Props {
  to: string
  label: string
}

const props = withDefaults(defineProps<Props>(), {
  to: '/',
  label: '',
})
</script>

<template>
  <RouterLink :to="props.to" class="nav-link-item">
    {{ props.label }}
  </RouterLink>
</template>