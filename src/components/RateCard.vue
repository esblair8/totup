<script setup>
import { storeToRefs } from 'pinia'
import useUserInfoStore from '@/stores/userInfoStore'
const userInfoStore = useUserInfoStore()

const { userInfo } = storeToRefs(userInfoStore)
</script>

<template>
    <div class="column content is-three-quarters box p-5">
        <div class="form">
            <h2>Set Rate</h2>
            <div class="field">
                <label class="label">Currency</label>
                <div class="select is-fullwidth" >
                    <select v-model="userInfo.currency">
                        <option>GBP £</option>
                        <option>EURO €</option>
                        <option>DOLLAR $</option>
                    </select>
                </div>
            </div>
            <div class="field">
                <label class="label">Rate</label>
                <div class="control">
                    <input class="input" type="text" placeholder="6.00" v-model="userInfo.rate">
                </div>
            </div>
            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-small is-link" @click="userInfoStore.updateUserInfo()">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>
    