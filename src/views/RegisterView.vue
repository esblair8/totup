<script setup>
import { ref } from 'vue'
import useAuthUser from '@/composables/UseAuthUser'
import { useRouter } from 'vue-router'
import OrBox from '@/components/OrBox.vue'
import OAuthButtons from '@/components/OAuthButtons.vue'
import LoginRegisterLink from '@/components/LoginRegisterLink.vue'

// Use necessary composables
const router = useRouter()
const { register, user, errors } = useAuthUser()

const isLoading = ref(false)

const registerError = ref(null)

const handleSubmit = async () => {
  isLoading.value = true
  registerError.value = null
  errors.value = null

  console.log('handleSubmit -> REGISTER')
  try {
    await register()
    router.push({ name: 'complete-registration' })
    isLoading.value = false
  } catch (error) {
    isLoading.value = false
    registerError.value = error.message
  }
}
</script>

<template>
  <div class="hero-body">
    <div class="container mt-6">
      <div class="columns is-centered">
        <div class="column is-4-desktop is-4-widescreen box">
          <h1 class="title is-1">Register</h1>
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
              <div v-if="errors.emailError" class="has-text-danger">
                {{ errors.emailError }}
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
              <div class="has-text-danger" v-if="errors.passwordError">
                {{ errors.passwordError }}
              </div>
            </div>
            <div class="has-text-danger has-text-centered pb-1" v-if="registerError">
              {{ registerError }}
            </div>
            <div class="field">
              <button
                class="button is-fullwidth is-success"
                :class="{ 'is-loading': isLoading }"
                @click.prevent="handleSubmit()"
              >
                Register with Email
              </button>
            </div>
          </form>
          <OrBox />
          <OAuthButtons />
          <LoginRegisterLink
            message="Already have an account? "
            to="login"
            linkText="Sign in here"
          />
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
