<script setup>
import { ref } from "vue"
import useAuthUser from "@/composables/UseAuthUser"
import { useRouter } from "vue-router"

// Use necessary composables
const router = useRouter()
const { user, update } = useAuthUser()

// keep up with form data
const password = ref("")

// call the proper login method from the AuthUser composable
// on the submit of the form
const handleUpdatePassword = async () => {
  try {
    await update(user.email, password.value)
    router.push('/')
  } catch (error) {
    alert(error.message)
  }
}
</script>

<template>
  <div class="hero-body">
    <div class="container mt-6">
      <div class="columns is-centered ">
        <div class="column is-4-desktop is-4-widescreen box">
          <h1 class="title is-4">Update Password</h1>
          <form action="" class="field">
            <div class="field">
              <label for="" class="label">Email</label>
              <div class="control has-icons-left">
                <input type="email" placeholder="email" class="input" v-model="user.email" disabled>
                <span class="icon is-small is-left">
                  <font-awesome-icon icon="envelope" />
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="label">Password</label>
              <div class="control has-icons-left">
                <input type="password" placeholder="password" class="input" v-model="password" required>
                <span class="icon is-small is-left">
                  <font-awesome-icon icon="envelope" />
                </span>
              </div>
            </div>
            <div class="field">
              <button class="button is-fullwidth is-success" @click.prevent="handleUpdatePassword">
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
.or-box {
  display: flex;
  color: dimgray;
  font-weight: bold;
  justify-content: center;
  margin: 10px 20px 20px;
}

.line-through {
  width: 100%;
  margin: 0 10px;
  border-top: 2px solid lightgrey;
  transform: translateY(50%);
}
</style>
