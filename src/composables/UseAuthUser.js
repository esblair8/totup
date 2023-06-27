import useSupabase from "@/composables/UseSupabase"
import { ref, reactive } from "vue"


//bound to login and reigster form inputs
const user = reactive({
  fullName: '',
  email: '',
  password: ''
})

const loggedInUser = ref(null)

const errors = reactive({
  nameError: '',
  emailError: '',
  passwordError: ''
})

export default function useAuthUser() {

  const { supabase } = useSupabase()

  const login = async (credentials) => {
    validateCredentials(credentials, false)
    if (errors.nameError || errors.emailError || errors.passwordError) {
      throw new Error('Invalid credentials')
    }
    const { user, error } = await supabase.auth.signInWithPassword(
      { email: credentials.email, password: credentials.password }
    )
    if (error) throw error
    return user
  }

  /**
   * Login with refresh token
   * Useful for logging in after email confirmations
   */
  const loginWithRefreshToken = async (token) => {
    const { user, error } = await supabase.auth.signIn({ refreshToken: token })
    if (error) throw error
    return user
  }

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

  const validateCredentials = (credentials, attemptPasswordValidation) => {
    const { fullName, email, password } = credentials

    if (attemptPasswordValidation && !fullName ) errors.nameError = 'Please enter your full name'
    if (!email) errors.emailError = 'Please enter your email address'
    if (!password) errors.passwordError = 'Please enter a password'
    if (email && !validateEmail(email)) errors.emailError = 'Please enter a valid email address'
    if (attemptPasswordValidation && password && !validatePassword) errors.passwordError = ('password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 number')
  }

  const register = async (credentials) => {
    validateCredentials(credentials)
    if (errors.nameError || errors.emailError || errors.passwordError) {
      throw new Error('Invalid credentials')
    }

    const { user, error } = await supabase.auth.signUp(
      {
        email: credentials.email,
        password: credentials.password,
        options: {
          redirectTo: `${window.location.origin}/me?fromEmail=registrationConfirmation"`,
          data: {
            full_name: credentials.name
          }
        }
      }
    )
    if (error) throw error
    return user
  }

  const update = async (email, password) => {
    const { data, error } = await supabase.auth.updateUser({ email, password })
    if (error) throw error
    return user
  }

  const sendPasswordRestEmail = async (email) => {
    const { user, error } = await supabase.auth.resetPasswordForEmail(
      email
    )
    if (error) throw error
    return user
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

  const validatePassword = (password) => {
    return String(password)
      .match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
  }

  const getUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    return user
  }

  return {
    user,
    errors,
    loggedInUser,
    login,
    loginWithSocialProvider,
    loginWithRefreshToken,
    isLoggedIn,
    logout,
    register,
    update,
    sendPasswordRestEmail,
    getUser,
    validateEmail
  }
}
