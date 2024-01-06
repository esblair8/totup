import { createClient } from '@supabase/supabase-js'
import useAuthUser from '@/composables/UseAuthUser'

const supabaseUrl = 'https://oitfkhbgghwykbfmvfyd.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pdGZraGJnZ2h3eWtiZm12ZnlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU3MTk2ODMsImV4cCI6MjAwMTI5NTY4M30.jYsiOTA1pRmw7jtmyL4Guas0elaHfr4OcC9pwLuuMUo'

const supabase = createClient(supabaseUrl, supabaseKey)

supabase.auth.onAuthStateChange((event, session) => {
  const { loggedInUser } = useAuthUser()
  loggedInUser.value = session?.user || null
})

export default function useSupabase() {
  return { supabase }
}
