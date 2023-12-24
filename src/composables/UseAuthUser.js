import useSupabase from '@/composables/UseSupabase'
import { ref, reactive } from 'vue'

const userData = reactive({
  email: '',
  password: '',
  confirmPassword: ''
})

const loggedInUser = ref(null)

const errors = reactive({
  emailError: '',
  passwordError: ''
})

export default function useAuthUser() {
  const { supabase } = useSupabase()

  const login = async () => {
    validateCredentials(false)
    if (errors.nameError || errors.emailError || errors.passwordError) {
      throw new Error('Invalid credentials')
    }
    console.log('valid credentials')

    const { user, error } = await supabase.auth.signInWithPassword({
      email: userData.email,
      password: userData.password
    })
    if (error) throw error
    return user
  }

  /**
   * Login with refresh token
   * Useful for logging in after email confirmations
   */
  const loginWithRefreshToken = async (token) => {}

  const loginWithSocialProvider = async (provider) => {
    const { user, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/`
      }
    })
    if (error) throw error
    return user
  }

  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }

  const isLoggedIn = () => {
    return !!loggedInUser.value
  }

  const validateCredentials = (attemptPasswordValidation) => {
    errors.emailError = ''
    errors.passwordError = ''

    const { email, password } = userData

    if (!email) errors.emailError = 'Please enter your email address'
    if (!password) errors.passwordError = 'Please enter a password'
    if (email && !validateEmail(email)) errors.emailError = 'Please enter a valid email address'
    let isInvalidPassword = !validatePassword(password)
    if (attemptPasswordValidation && password && isInvalidPassword)
      errors.passwordError =
        'password must contain at least 8 characters, including:\n 1 uppercase letter, 1 lowercase letter, and 1 number'
  }

  const register = async () => {
    validateCredentials(true)
    if (errors.emailError || errors.passwordError) {
      console.log('valid credentials', email, password)

      throw new Error('Invalid username or password')
    }
    const { email, password } = userData
    console.log('valid credentials', email, password)

    const { user, error } = await supabase.auth.signUp({
      email: email,
      password: password
    })
    if (error) throw error
    return user
  }

  const updateEmail = async (newEmail) => {
    console.log('updateEmail', newEmail)
    const { data, error } = await supabase.auth.updateUser({ email: newEmail })
    if (error) throw error
    return userData
  }

  const updatePassword = async (newPassword) => {
    const { data, error } = await supabase.auth.updateUser({
      email: loggedInUser.value.email,
      password: newPassword
    })
    if (error) throw error
    return userData
  }

  const sendPasswordRestEmail = async (email) => {
    console.log('sendPasswordRestEmail', email)
    const { user, error } = await supabase.auth.resetPasswordForEmail(email)
    if (error) throw error
    return user
  }

  const validateEmail = (email) => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email.toLowerCase()
    )
  }

  const validatePassword = (password) => {
    const result = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password)
    console.log('validatePassword', result)
    return result
  }

  const getUser = async () => {
    const {
      data: { user }
    } = await supabase.auth.getUser()
    return user
  }

  return {
    user: userData,
    errors,
    loggedInUser,
    login,
    loginWithSocialProvider,
    loginWithRefreshToken,
    isLoggedIn,
    logout,
    register,
    updateEmail,
    updatePassword,
    sendPasswordRestEmail,
    getUser,
    validateEmail
  }
}
