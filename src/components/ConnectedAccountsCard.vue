<template>
  <div class="column content is-three-quarters box p-5"  v-if="!!loggedInUser">
    <h2>Connected Accounts</h2>
    <p>You're authenticated is authenticated with {{ loggedInUser.app_metadata.provider  }}</p>
    <p>Your email address is {{ loggedInUser.email }}</p>
    <div class="control">
      <button class="button is-small is-link is-light">Change password</button>
    </div>
  </div>
</template>
  
<script setup>
import useAuthUser from '@/composables/UseAuthUser'
import { computed } from 'vue'
const { loggedInUser, getUser } = useAuthUser()



</script>
  
<style></style>
  