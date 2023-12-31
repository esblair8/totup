<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const queryParams = computed(() => {
  if (!route.fullPath.includes('#')) return {}

  return route.fullPath
    .split('#')[1]
    .split('&')
    .reduce((acc, param) => {
      const [key, value] = param.split('=')
      acc[key] = value
      return acc
    }, {})
})
</script>

<template>
  <div class="hero-body">
    <div class="container mt-6">
      <div class="columns is-centered">
        <div class="column is-4-desktop is-4-widescreen box">
          <h4 class="title is-4 mb-6" v-if="queryParams['error_description']">
            {{ queryParams['error_description'].replaceAll('+', ' ') }}
          </h4>
          <div v-else>
            <h4 class="title is-4 mb-6">Confirmation Link Accepted</h4>
            <p class="subtitle is-centered is-6 mb-6" v-if="queryParams['message']">
              Please click the confirmation link sent to your new email address
            </p>
            <p class="subtitle is-centered is-6 mb-6" v-else>Your email has now been changed</p>
          </div>

          <router-link to="/" class="button is-link">Home</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
