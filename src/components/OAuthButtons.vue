<template>
  <div class="field">
    <button
      class="button is-fullwidth is-danger"
      :class="{ 'is-loading': isLoading }"
      @click.prevent="handleLogin('google')"
    >
      <span class="icon is-small">
        <font-awesome-icon icon="fa-brands fa-google" />
      </span>
      <span>Login with Google</span>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useAuthUser from '@/composables/UseAuthUser'

const { loginWithSocialProvider } = useAuthUser()
const isLoading = ref(false)

const handleLogin = async (provider) => {
  isLoading.value = true
  try {
    await loginWithSocialProvider(provider)
    isLoading.value = false
  } catch (error) {
    isLoading.value = false
  }
}
</script>
