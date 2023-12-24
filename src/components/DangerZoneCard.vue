<template>
  <div class="column content is-three-quarters box p-5">
    <h2>Danger Zone</h2>
    <p>Remove account</p>
    <div v-if="showMessage">
      <p>We are working on automating this process.</p>
      <p class="pb-3">
        In the mean time, please
        <a><RouterLink to="/contact">contact customer support</RouterLink></a> to delete your
        account
      </p>
    </div>
    <button class="button is-small is-danger" @click="handleRemoveAccountAction">
      Remove account
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const showMessage = ref(false)
const handleRemoveAccountAction = () => {
  showMessage.value = true
}
</script>

<style></style>
