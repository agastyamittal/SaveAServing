import { createClient } from '@supabase/supabase-js'

const supabaseUrl = ''
const supabaseKey = ''
export const sas_db = createClient(supabaseUrl, supabaseKey)