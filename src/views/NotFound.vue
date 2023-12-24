<script>
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()

    const goBack = () => {
      router.go(-1)
    }

    return {
      goBack
    }
  }
}
</script>

<template>
  <div class="error-page">
    <div class="error-content">
      <h1 class="title is-1">Oops</h1>
      <h2 class="subtitle is-4">Nothing to see here</h2>
      <div class="buttons">
        <router-link to="/" class="button is-primary">Go Home</router-link>
        <button class="button is-link" @click="goBack">Go Back</button>
      </div>
    </div>
  </div>
</template>

<style>
.error-page {
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
}

.error-content {
  text-align: center;
}

.buttons {
  margin-top: 20px;
}
</style>
