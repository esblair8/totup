<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import useAuthUser from '@/composables/UseAuthUser'

import OrBox from '@/components/OrBox.vue'
import OAuthButtons from '@/components/OAuthButtons.vue'
import LoginRegisterLink from '@/components/LoginRegisterLink.vue'

const router = useRouter()

const { login, errors, user } = useAuthUser()

const logInError = ref(null)

const handleLogin = async () => {
  try {
    await login()
    router.push('/')
  } catch (error) {
    logInError.value = error.message
    console.log(error)
  }
}
</script>

<template>
  <div class="hero-body">
    <div class="container mt-6">
      <div class="columns is-centered">
        <div class="column is-4-desktop is-4-widescreen box">
          <h1 class="title is-1">Sign In</h1>
          <form action="" class="field">
            <div class="field">
              <label for="" class="label">Email</label>
              <div class="control has-icons-left">
                <input
                  type="email"
                  placeholder="email"
                  class="input"
                  v-model="user.email"
                  required
                />
                <span class="icon is-small is-left">
                  <font-awesome-icon icon="envelope" />
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="label">Password</label>
              <div class="control has-icons-left">
                <input
                  type="password"
                  placeholder="password"
                  class="input"
                  v-model="user.password"
                  required
                />
                <span class="icon is-small is-left">
                  <font-awesome-icon icon="lock" />
                </span>
              </div>
              <div class="field mt-2 mb-2">
                <RouterLink to="/forgot-password">Forgot Password?</RouterLink>
              </div>
            </div>
            <div class="has-text-danger has-text-centered pb-2" v-if="logInError">
              {{ logInError }}
            </div>
            <div class="field">
              <button class="button is-fullwidth is-success" @click.prevent="handleLogin()">
                Login with Email
              </button>
            </div>
          </form>
          <OrBox />
          <OAuthButtons />
          <LoginRegisterLink
            message="Don't have an account? "
            to="register"
            linkText="Create one here"
          />
        </div>
      </div>
    </div>
  </div>
</template>
