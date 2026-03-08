import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = "https://xvhvvcgpdtfiemkfcpph.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh2aHZ2Y2dwZHRmaWVta2ZjcHBoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5NzI2MTAsImV4cCI6MjA4ODU0ODYxMH0.PwKyWBcYb9iRVrhq4_Pvp0yh0v1AQmg1hiXag1tKV1s"

export const supabase = createClient(supabaseUrl, supabaseKey)
