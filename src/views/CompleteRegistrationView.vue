<script setup>
import { reactive, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

import useSupabase from '@/composables/UseSupabase'
import useAuthUser from '@/composables/UseAuthUser'
import useUserInfoStore from '../stores/userInfoStore'

const router = useRouter()
const userInfoStore = useUserInfoStore()

const { userInfo } = storeToRefs(userInfoStore)

onMounted(async () => {
  await userInfoStore.fetchUserInfo()
})

const isLoading = ref(false)

const step = reactive({
  address: true,
  bank: false,
  rate: false
})

const controlStep = (address, bank, rate) => {
  step.address = address
  step.bank = bank
  step.rate = rate
}

const saveAll = async () => {
  isLoading.value = true
  try {
    await userInfoStore.updateUserInfo()
  } catch (error) {
    console.log(error)
  }
  isLoading.value = false
  router.push({ path: '/' })
}
</script>

<template>
  <div class="hero-body pt-0">
    <div class="is-centered">
      <h2 class="title is-4 columns pb-2 is-centered">
        Please complete the following steps to finish registration
      </h2>
      <nav class="breadcrumb has-arrow-separator is-medium is-centered" aria-label="breadcrumbs">
        <ul>
          <li :class="{ 'is-active': step.address }">
            <a @click="controlStep(true, false, false)">Address</a>
          </li>
          <li :class="{ 'is-active': step.bank }">
            <a @click="controlStep(false, true, false)">Bank Details</a>
          </li>
          <li :class="{ 'is-active': step.rate }">
            <a @click="controlStep(false, false, true)">Rate</a>
          </li>
        </ul>
      </nav>

      <div class="container mt-6">
        <div class="columns is-centered">
          <div class="column is-4-desktop is-4-widescreen box">
            <div class="form" v-if="step.address">
              <h2 class="title is-3">Address</h2>
              <p class="pb-3">
                We will use your address to automatically add to your invoices, saving
              </p>

              <div class="field">
                <label class="label">Full Name</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="Name"
                    v-model="userInfo.full_name"
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Address</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="1 Main Street"
                    v-model="userInfo.street"
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Post Code</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="Post code"
                    v-model="userInfo.post_code"
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">City</label>
                <div class="control">
                  <input class="input" type="text" placeholder="City" v-model="userInfo.city" />
                </div>
              </div>
              <div class="columns is-centered">
                <div class="field is-grouped">
                  <div class="control">
                    <button class="button is-small p-2 m-3 is-danger" disabled>Previous</button>
                    <button
                      class="button is-small p-2 m-3 is-success"
                      @click="controlStep(false, true, false)"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="form" v-if="step.bank">
              <h2 class="title is-3">Bank Details</h2>
              <p class="pb-3">
                We will store your bank details securely and will only use them to prepopulate your
                invoice. You can change them at any time in the settings section.
              </p>

              <div class="field">
                <label class="label">Sort Code</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="Sort Code"
                    v-model="userInfo.sort_code"
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Account Number</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="Account Number"
                    v-model="userInfo.account_number"
                  />
                </div>
              </div>
              <div class="columns is-centered">
                <div class="field is-grouped">
                  <div class="control">
                    <button
                      class="button is-small p-2 m-3 is-danger"
                      @click="controlStep(true, false, false)"
                    >
                      Previous
                    </button>
                    <button
                      class="button is-small p-2 m-3 is-success"
                      @click="controlStep(false, false, true)"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="form" v-if="step.rate">
              <h2 class="title is-3">Set Hourly Rate</h2>
              <p class="pb-3">This will be used to calculate invoice amounts.</p>
              <div class="field">
                <label class="label">Currency</label>
                <div class="select is-fullwidth">
                  <select v-model="userInfo.currency">
                    <option selected>GBP £</option>
                    <option>EURO €</option>
                    <option>DOLLAR $</option>
                  </select>
                </div>
              </div>
              <div class="field">
                <label class="label">Rate</label>
                <div class="control">
                  <input
                    class="input"
                    type="number"
                    step="0.01"
                    placeholder="6.00"
                    v-model="userInfo.rate"
                  />
                </div>
              </div>

              <div class="columns is-centered">
                <div class="field is-grouped">
                  <div class="control">
                    <button
                      class="button is-small p-2 m-3 is-danger"
                      @click="controlStep(false, true, false)"
                    >
                      Previous
                    </button>
                    <button
                      :class="{ 'is-loading': isLoading }"
                      class="button is-small p-2 m-3 is-success"
                      @click="saveAll()"
                    >
                      Save All
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.button-section {
  text-align: center;
}
</style>
