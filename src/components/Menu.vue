<script setup>
import useShowMenuStore from '@/stores/showMenuStore'

const showMenuStore = useShowMenuStore()
</script>

<template>
  <aside class="container menu column is-2 mx-2" v-if="showMenuStore.showMenu">
    <div class="menu-label">
      <p>Navigation</p>
    </div>
    <ul class="menu-list">
      <li>
        <RouterLink class="navbar-item" to="/new-invoice">Create new Invoice </RouterLink>
      </li>
      <li>
        <RouterLink class="navbar-item" to="/invoices"> All Invoices </RouterLink>
      </li>
    </ul>
    <p class="menu-label">Get Help</p>
    <ul class="menu-list">
      <li>
        <RouterLink to="/contact" class="navbar-item">Contact Us</RouterLink>
      </li>
      <li>
        <RouterLink to="/help" class="navbar-item">Help Center</RouterLink>
      </li>
    </ul>
    <p class="menu-label">Admin</p>
    <ul class="menu-list">
      <li>
        <RouterLink to="/settings" class="navbar-item">Settings</RouterLink>
      </li>
      <li>
        <RouterLink to="/subscription" class="navbar-item">Subscription</RouterLink>
      </li>
      <li><a>Logout</a></li>
    </ul>
  </aside>
</template>

<style scoped>
.menu {
  border-right: 1px solid lightgrey;
}
</style>
