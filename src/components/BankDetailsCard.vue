<template>
  <div class="column content is-three-quarters box p-5">
    <div class="form">
      <h2>Bank Details</h2>
      <p>
        These details will not be used for billing. They will only be used when generating invoices,
        to allow parents to pay you quickly.
      </p>
      <div class="field">
        <label class="label">Sort Code</label>
        <div class="control">
          <input class="input" type="r" placeholder="00-00-00" v-model="userInfo.sort_code" />
        </div>
      </div>
      <div class="field">
        <label class="label">Account Number</label>
        <div class="control">
          <input
            class="input w-1"
            type="text"
            placeholder="Account Number"
            v-model="userInfo.account_number"
          />
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button
            :class="{ 'is-loading': userInfo.isLoading }"
            class="button is-small is-link"
            @click="userInfoStore.updateUserInfo()"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import useUserInfoStore from '@/stores/userInfoStore'
const userInfoStore = useUserInfoStore()

const { userInfo } = storeToRefs(userInfoStore)
</script>

<style></style>
