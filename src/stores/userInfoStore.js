import { defineStore } from 'pinia'
import useSupabase from '@/composables/UseSupabase'
import useAuthUser from '@/composables/UseAuthUser'

const { loggedInUser } = useAuthUser()
const { supabase } = useSupabase()

const useUserInfoStore = defineStore('userInfoStore', {
  state: () => ({
    userInfo: {
      full_name: '',
      street: '',
      post_code: '',
      city: '',
      account_number: '',
      sort_code: '',
      rate: 0.0,
      currency: 'GBP £'
    }
  }),
  actions: {
    async fetchUserInfo() {
      this.isLoading = true

      let { data, error } = await supabase.from('user_info').select('*')

      if (data.length !== 0) {
        if (error) {
          this.errorMessage = error.message
        } else {
          this.userInfo = data[0]
        }
      } else {
        this.errorMessage = 'No data returned'
      }
      this.isLoading = false
    },
    async updateUserInfo() {
      this.isLoading = true

      let { data, error } = await supabase.from('user_info').upsert(this.userInfo).select()

      if (data.length !== 0) {
        if (error) {
          this.errorMessage = error.message
        } else {
          this.userInfo = data[0]
        }
      } else {
        this.errorMessage = 'No data returned'
      }
      this.isLoading = false
    }
  }
})
export default useUserInfoStore
