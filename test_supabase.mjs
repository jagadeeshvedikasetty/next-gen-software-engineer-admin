import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zylaputsexixoxtlomhs.supabase.co';
const supabaseKey = 'sb_publishable_pUpduqaND1jmxQeZbyicFw_NkQndTf8';
const supabase = createClient(supabaseUrl, supabaseKey);

async function test() {
  const { data: existing } = await supabase.from('profile').select('id').limit(1).single();
  console.log('existing:', existing);
  
  if (existing) {
    const { data, error } = await supabase.from('profile').update({
      name: 'test',
      bio: 'test',
      photo_url: ''
    }).eq('id', existing.id);
    console.log('Update Error:', error);
  }
}
test();
