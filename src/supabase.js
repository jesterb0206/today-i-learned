import {createClient} from '@supabase/supabase-js';

const supabaseUrl = 'https://ripwscolfdqyhaquqnlv.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpcHdzY29sZmRxeWhhcXVxbmx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM5MzEyMTcsImV4cCI6MTk4OTUwNzIxN30.anX-MRW7O90dKiD0YC1pDlwYXu4XpbZFoG4PHExH6dU';
// eslint-disable-next-line no-unused-vars
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
