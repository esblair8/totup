<script setup>
import { RouterView, useRoute } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import Menu from '@/components/Menu.vue'
import { useMediaQuery } from '@vueuse/core'

const route = useRoute()

const isLargeScreen = useMediaQuery('(min-width: 769px)')
</script>

<template>
  <NavBar v-if="route.meta.requiresAuth" />

  <div class="columns is-centered full-height top">
    <Menu v-if="route.meta.requiresAuth && isLargeScreen" />
    <div class="view">
      <RouterView />
    </div>
  </div>
</template>

<style>
@import 'bulma/css/bulma.min.css';

.top {
  margin-top: 4rem;
  margin-left: 1rem;
  margin-right: 1rem;
}

.view {
  width: 100%;
  height: 100vh;
  overflow: auto;
}
</style>
