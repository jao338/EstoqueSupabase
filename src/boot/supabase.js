import { createClient } from '@supabase/supabase-js'

const supabaseURL = 'https://hxatqerhcndbtahbjgqs.supabase.co'
const supabaseKEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4YXRxZXJoY25kYnRhaGJqZ3FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk2MDA3MDcsImV4cCI6MjAyNTE3NjcwN30.39j9QPTeGGZWs0-Vq9FZkxDesfLRUXhmfk8bOjjf4aE'
const supabase = createClient(supabaseURL, supabaseKEY)

console.log("Supabase init", supabase);

export default function useSupabase(){
    return { supabase }
}