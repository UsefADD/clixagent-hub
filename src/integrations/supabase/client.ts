// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://dwovjirgyejoygokbwjq.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3b3ZqaXJneWVqb3lnb2tid2pxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg1NTAxNTIsImV4cCI6MjA1NDEyNjE1Mn0.xLg05zildXdHLlZWR8cQbY8-rq29vUFROpJPIK8zfu8";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);