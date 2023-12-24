<script>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <div class="column content is-three-quarters box p-5">
    <h2>Billing</h2>
    <p>Looking for billing information?</p>
    <button class="button is-small is-primary" @click="$router.push('/subscription')">
      Go to billing
    </button>
  </div>
</template>
