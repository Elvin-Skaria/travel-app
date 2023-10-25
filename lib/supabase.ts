import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "@env";

export const supabase = createClient('https://qacgpinzsiutomynrole.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhY2dwaW56c2l1dG9teW5yb2xlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgyNDU1MDAsImV4cCI6MjAxMzgyMTUwMH0.xhrZ5B_mpEzEVzKpJhLUHuUZfZoGTVasErKQSAVtRA8', {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
