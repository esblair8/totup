import { defineStore } from 'pinia'
import useSupabase from '@/composables/UseSupabase'

const { supabase } = useSupabase()

const useUserInfoStore = defineStore('userInfoStore', {
    state: () => {
        return {
            userInfo: {
                full_name: '',
                address: '',
                post_code: '',
                country: '',
                account_number: '',
                sort_code: '',
                rate: '',
                currency: '',
            },
            error: ''
        }
    },
    actions: {
        async fetchUserInfo() {
            this.isLoading = true
            if (this.userInfo.length > 0) return

            let { data, error } = await supabase
                .from('user_info')
                .select('*')

            if (error) {
                this.errorMessage = error.message
            } else {
                this.userInfo = data[0]
            }

            this.isLoading = false
        },
        async updateUserInfo() {
            this.isLoading = true

            let { data, error } = await supabase
                .from('user_info')
                .update(this.userInfo)
                .eq('id', this.userInfo.id)
                .select()

            if (error) {
                this.errorMessage = error.message
            } else {
                this.userInfo = data[0]
            }
            this.isLoading = false
        },

    }
})
export default useUserInfoStore
