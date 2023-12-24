<script setup>
import useAuthUser from '@/composables/UseAuthUser'
import router from '../router'

const { logout } = useAuthUser()

const logUserOut = () => {
  logout()
  router.push({ path: '/login' })
}
</script>

<template>
  <div class="column content is-three-quarters box p-5 mb-5">
    <h1 class="title is-medium">Log out</h1>
    <p>Log out of your account</p>
    <button class="button is-small" @click="logUserOut">Log out</button>
  </div>
</template>
