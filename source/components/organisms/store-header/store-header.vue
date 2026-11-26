<script setup lang="ts">
interface NavItem {
    to: string
    label: string
}

const navItems: NavItem[] = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' }
]
</script>

<template>
    <header class="store-header">
        <he-brand-logo />

        <nav class="store-header__nav" aria-label="Main Navigation">
            <he-nav-link-item
                v-for="item in navItems"
                :key="item.to"
                :to="item.to"
                :label="item.label"
            />
        </nav>
    </header>
</template>
