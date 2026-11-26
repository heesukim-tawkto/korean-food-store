<script setup lang="ts">
interface Props {
  to?: string
  compact?: boolean
}

const props = withDefaults(defineProps<Props>(),{
    to: '/',
    compact: false
});
</script>

<template>
    <RouterLink
    :to="to"
    class="brand-logo"
    :class="{ 'brand-logo--compact': compact }"
    aria-label="Heesu Electronics Home"
  >
    <span class="brand-logo__mark" aria-hidden="true">HE</span>

    <span v-if="!compact" class="brand-logo__wordmark">
      <span class="brand-logo__title">Heesu Electronics</span>
    </span>
  </RouterLink>
</template>
