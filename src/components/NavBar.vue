<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useRouter } from 'vue-router'
import { useMediaQuery, onClickOutside } from '@vueuse/core'
import useAuthUser from '@/composables/UseAuthUser'
import useShowMenuStore from '../stores/showMenuStore'

const router = useRouter()
const showMenuStore = useShowMenuStore()

const { logout, isLoggedIn, loggedInUser } = useAuthUser()

const isSmallScreen = useMediaQuery('(max-width: 1023px)')

const handleLogout = async () => {
  try {
    await logout()
    router.push('/login')
  } catch (error) {
    //do some error handling
    console.log(error)
  }
}

const showMobileNav = ref(false)
const navbarMenuRef = ref(null)
const navbarBurgerRef = ref(null)

onClickOutside(
  navbarMenuRef,
  () => {
    showMobileNav.value = false
  },
  {
    ignore: [navbarBurgerRef]
  }
)
</script>

<template>
  <nav class="navbar is-fixed-top is-transparent">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          alt="Bulma: a modern CSS framework based on Flexbox"
          width="112"
          height="28"
        />
      </a>
      <div
        class="navbar-burger"
        :class="{ 'is-active': showMobileNav }"
        data-target="navbarExampleTransparentExample"
        aria-expanded="false"
        aria-label="menu"
        role="button"
        ref="navbarBurgerRef"
        @click.prevent="showMobileNav = !showMobileNav"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </div>
    </div>
    <div
      id="navbarExampleTransparentExample"
      class="navbar-menu"
      :class="{ 'is-active': showMobileNav }"
      ref="navbarMenuRef"
    >
      <div class="navbar-start" v-if="isLoggedIn()">
        <span class="navbar-item" v-if="!isSmallScreen">
          <button @click="showMenuStore.toggleMenu" class="button is-small is-light is-primary">
            {{ showMenuStore.showMenu ? 'hide sidebar' : 'show sidebar' }}
          </button>
        </span>
        <RouterLink
          v-if="isSmallScreen"
          @click.prevent="showMobileNav = !showMobileNav"
          class="navbar-item"
          to="/new-invoice"
          >Create Invoice
        </RouterLink>
        <RouterLink
          v-if="isSmallScreen"
          @click.prevent="showMobileNav = !showMobileNav"
          class="navbar-item"
          to="/invoices"
          >All Invoices
        </RouterLink>
        <RouterLink
          @click.prevent="showMobileNav = !showMobileNav"
          v-if="isSmallScreen"
          to="/subscription"
          class="navbar-item"
          >Subscription</RouterLink
        >
        <RouterLink
          @click.prevent="showMobileNav = !showMobileNav"
          v-if="isSmallScreen"
          to="/help"
          class="navbar-item"
          >Help Center</RouterLink
        >
        <RouterLink
          @click.prevent="showMobileNav = !showMobileNav"
          v-if="isSmallScreen"
          to="/settings"
          class="navbar-item"
          >Settings</RouterLink
        >
        <RouterLink
          @click.prevent="showMobileNav = !showMobileNav"
          v-if="isSmallScreen"
          to="/contact"
          class="navbar-item"
          >Contact Us</RouterLink
        >
        <RouterLink v-if="isSmallScreen" @click="handleLogout()" to="/login" class="navbar-item"
          >Logout</RouterLink
        >
      </div>

      <div class="navbar-end">
        <div v-if="isLoggedIn()" class="dropdown is-right is-hoverable m-3">
          <div v-if="!isSmallScreen" class="dropdown-trigger">
            <button class="button is-circular is-primary">
              <span class="icon">
                <font-awesome-icon icon="user" />
              </span>
            </button>
          </div>
          <div v-if="isLoggedIn()" class="dropdown-menu">
            <div class="dropdown-content">
              <div class="dropdown-item">{{ loggedInUser.email }}</div>
              <RouterLink to="/settings" class="dropdown-item">Settings</RouterLink>
              <RouterLink to="/subscription" class="dropdown-item">Subscription</RouterLink>
              <RouterLink to="/help" class="dropdown-item">Help Center</RouterLink>
              <RouterLink to="/contact" class="dropdown-item">Contact Us</RouterLink>
              <hr class="dropdown-divider" />
              <RouterLink @click="handleLogout()" to="/login" class="dropdown-item"
                >Logout</RouterLink
              >
            </div>
          </div>
        </div>
        <RouterLink v-if="!isLoggedIn()" class="navbar-item" to="login">Login</RouterLink>
        <RouterLink v-if="!isLoggedIn()" class="navbar-item" to="register">Register</RouterLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.inline {
  display: inline;
}

.is-circular {
  border-radius: 50%;
}

.navbar {
  border-bottom: 1px solid lightgrey;
}
</style>
