<script setup>
import { ref } from "vue"
import useAuthUser from "@/composables/UseAuthUser"
import { useRouter } from "vue-router"

// Use necessary composables
const router = useRouter()
const { sendPasswordRestEmail } = useAuthUser()

// keep up with form data
const email = ref("")

// call the proper login method from the AuthUser composable
// on the submit of the form
const handleResetPassword = async () => {
  try {
    await sendPasswordRestEmail(email.value)
  } catch (error) {
    alert(error.message)
  }
}
</script>

<template>
  <div class="hero-body">
    <div class="container mt-6">
      <div class="columns is-centered">
        <div class="column is-4-desktop is-4-widescreen box">
          <h1 class="title is-3">Forgot Password?</h1>
          <form action="" class="field">
            <div class="field">
              <label for="" class="label">Email</label>
              <div class="control has-icons-left">
                <input type="email" placeholder="email" class="input" v-model="email" required>
                <span class="icon is-small is-left">
                  <font-awesome-icon icon="envelope" />
                </span>
              </div>
            </div>
            <div class="field">
              <button class="button is-fullwidth is-success" @click.prevent="handleResetPassword">
                Send Reset Password Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<style></style>
