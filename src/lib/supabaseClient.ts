import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const mysupabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY,
)
