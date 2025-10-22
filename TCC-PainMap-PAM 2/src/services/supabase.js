import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://ahiewysakirqnhircqxl.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFoaWV3eXNha2lycW5oaXJjcXhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1OTI1MzIsImV4cCI6MjA3NTE2ODUzMn0.GE6ccZNofkxd8MsQXutQaTrx3IQTOJp6Xi2x1p1tVvc';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);