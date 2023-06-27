<template>
    <aside class="container menu column is-2 mx-2" v-if="showMenuStore.showMenu">
        <div class="menu-label">
            <p>Navigation</p>
        </div>
        <ul class="menu-list">
            <li>
                <RouterLink class="navbar-item" to="/">Create new Invoice
                </RouterLink>
            </li>
            <li>
                <RouterLink class="navbar-item" to="/invoices"> All  Invoices
                </RouterLink>
            </li>
        </ul>
        <p class="menu-label">Get Help</p>
        <ul class="menu-list">
            <li><RouterLink to="/contact" class="navbar-item">Contact Us</RouterLink></li>
            <li><a>Help Center</a></li>
        </ul>
        <p class="menu-label">Admin</p>
        <ul class="menu-list">
            <li><RouterLink to="/settings" class="navvar-item">Settings</RouterLink></li>
            <li><RouterLink to="/subscription"
          class="navbar-item">Subscription</RouterLink></li>
            <li><a>Logout</a></li>
        </ul>
    </aside>
</template>

<script setup>
import useShowMenuStore from '@/stores/showMenuStore'

const showMenuStore = useShowMenuStore()

</script>

<style scoped>.menu {
    border-right: 1px solid lightgrey;
}</style>