<script setup lang="ts">
interface Props {
  label: string
}

const props = withDefaults(defineProps<Props>(), {
  label: '',
})
</script>

<template>
  <span class="category-tag">{{ props.label }}</span>
</template>