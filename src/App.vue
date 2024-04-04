<script setup>
import { RouterView, useRoute } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import Menu from '@/components/Menu.vue'
import { useMediaQuery } from '@vueuse/core'
import useShowMenuStore from '@/stores/showMenuStore'

const showMenuStore = useShowMenuStore()

const route = useRoute()

const isLargeScreen = useMediaQuery('(min-width: 769px)')
</script>

<template>
  <NavBar v-if="route.meta.requiresAuth" />

  <div class="columns is-centered full-height margin-left top">
    <Menu v-if="route.meta.requiresAuth && isLargeScreen"></Menu>

    <div class="view" :class="{ 'left-border': showMenuStore.showMenu & isLargeScreen }">
      <RouterView />
    </div>
  </div>
</template>

<style>
@import 'bulma/css/bulma.min.css';

.app {
  background-color: #f9f9f9;
}
.top {
  margin-top: 4rem;
  margin-left: 1rem;  
  margin-right: 1rem;
}

.margin-left {
  margin-left: 1rem;
}
.view {
  width: 100%;
}

.left-border {
 
  border-left: 1px solid lightgrey;
}
</style>

