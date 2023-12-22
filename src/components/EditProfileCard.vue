<template>
	<div class="column content is-three-quarters box p-5">
		<div class="form">
			<h2>Profile</h2>
			<p>You can change your profile information below</p>
			<div class="field">
				<label class="label">Full Name</label>
				<div class="control">
					<input class="input" type="text" placeholder="Full Name" v-model="userInfo.full_name">
				</div>
			</div>
			<div class="field">
				<label class="label">Email</label>
				<div class="control">
					<input class="input" type="email" placeholder="Email Address" v-model="loggedInUser.email">
				</div>
			</div>
			<div class="field">
				<label class="label">Address</label>
				<div class="control">
					<input class="input" type="email" placeholder="1 Main Street" v-model="userInfo.address">
				</div>
			</div>
			<div class="field">
				<label class="label">Post Code</label>
				<div class="control">
					<input class="input" type="email" placeholder="Post code" v-model="userInfo.post_code">
				</div>
			</div>
			<div class="field is-grouped">
				<div class="control">
					<button class="button is-small is-link" @click="updateUserInformation()">Save changes</button>
				</div>
			</div>
		</div>
	</div>
</template>
  
<script setup>
import { storeToRefs } from 'pinia'
import useUserInfoStore from '@/stores/userInfoStore'
import useAuthUser from '@/composables/UseAuthUser'

const { loggedInUser, updateEmail } = useAuthUser()
const userInfoStore = useUserInfoStore()

const { userInfo } = storeToRefs(userInfoStore)


const updateUserInformation = async () => {
	try {
		await Promise.all([updateEmail(loggedInUser.email), userInfoStore.updateUserInfo()]);
	} catch (error) {
		console.log(error)
	}

	userInfoStore.updateUserInfo()
}
</script>

<style></style>
  