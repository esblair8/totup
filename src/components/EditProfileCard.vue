<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import useUserInfoStore from '@/stores/userInfoStore'

const userInfoStore = useUserInfoStore()
const { userInfo } = storeToRefs(userInfoStore)
const error = ref(null)
const updateUserInformation = async () => {
  try {
    await userInfoStore.updateUserInfo()
  } catch (error) {
    error.value = error
  }
}
</script>

<template>
  <div class="column content is-three-quarters box p-5">
    <div class="form">
      <h2>Profile</h2>
      <p>You can change your profile information below</p>
      <div class="field">
        <label class="label">Full Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Full Name" v-model="userInfo.full_name" />
        </div>
      </div>
      <div class="field">
        <label class="label">Street</label>
        <div class="control">
          <input class="input" type="email" placeholder="1 Main Street" v-model="userInfo.street" />
        </div>
      </div>
      <div class="field">
        <label class="label">Post Code</label>
        <div class="control">
          <input class="input" type="email" placeholder="Ci" v-model="userInfo.post_code" />
        </div>
      </div>
      <div class="field">
        <label class="label">Town or City</label>
        <div class="control">
          <input class="input" type="email" placeholder="Town or City" v-model="userInfo.city" />
        </div>
      </div>
      <p class="has-text-danger has-text-centered pb-2" v-if="error">
        {{ logInError }}
      </p>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-small is-link" @click="updateUserInformation()">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
