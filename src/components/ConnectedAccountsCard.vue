<script setup>
import { ref } from 'vue'
import useAuthUser from '@/composables/UseAuthUser'

const { loggedInUser, updateEmail, sendPasswordRestEmail } = useAuthUser()

const passwordResetSent = ref(false)
const sendPasswordRestEmailError = ref('')
const updateEmailError = ref('')
const updateEmailSuccess = ref(false)
const password = ref('')

const handleResetPassword = async () => {
  try {
    await sendPasswordRestEmail(loggedInUser.value.email)
    passwordResetSent.value = true
  } catch (error) {
    passwordResetSent.value = false
    sendPasswordRestEmailError.value = error.message
  }
}
const handleChangeEmail = async () => {
  updateEmailSuccess.value = false
  updateEmailError.value = ''
  try {
    await updateEmail(loggedInUser.value.email)
    updateEmailSuccess.value = true
  } catch (error) {
    updateEmailSuccess.value = false
    updateEmailError.value = error.message
  }
}
</script>

<template>
  <div class="column content is-three-quarters box p-5" v-if="!!loggedInUser">
    <h2>Connected Accounts</h2>
    <p>You're authenticated is authenticated with {{ loggedInUser.app_metadata.provider }}</p>
    <div class="field">
      <label class="label">Your Email Address</label>
      <div class="control">
        <input
          class="input"
          type="email"
          placeholder="Email Address"
          v-model="loggedInUser.email"
        />
      </div>
    </div>

    <div>
      <p v-if="passwordResetSent" class="has-text-info pb-2">
        Password reset link sent to {{ loggedInUser.email }}, please check your email
      </p>
    </div>
    <div>
      <p v-if="sendPasswordRestEmailError" class="pb-2">{{ sendPasswordRestEmailError }}</p>
    </div>
    <div>
      <p v-if="updateEmailSuccess" class="has-text-info pb-2">
        Email change link sent to {{ loggedInUser.email }}, please check your email
      </p>
    </div>
    <div>
      <p v-if="updateEmailError" class="has-text-info pb-2">{{ updateEmailError }}</p>
    </div>

    <div class="control">
      <button class="button is-small is-link is-light mr-3" @click="handleChangeEmail()">
        Change Email Address
      </button>
      <button class="button is-small is-danger is-light" @click="handleResetPassword()">
        Change password
      </button>
    </div>
  </div>
</template>
