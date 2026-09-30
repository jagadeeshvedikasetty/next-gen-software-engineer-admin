import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zylaputsexixoxtlomhs.supabase.co';
const supabaseKey = 'sb_publishable_pUpduqaND1jmxQeZbyicFw_NkQndTf8';
const supabase = createClient(supabaseUrl, supabaseKey);

async function test() {
  const { data: existing } = await supabase.from('profile').select('id').limit(1).single();
  console.log('existing:', existing);
  
  if (existing) {
    const { data, error } = await supabase.from('profile').update({
      name: 'V Jagadeesh',
      bio: 'WE ARE LIVING IN GREATEST OF TIMES WITH AI'
    }).eq('id', existing.id);
    console.log('Update Error:', error);
  } else {
      const { data, error } = await supabase.from('profile').insert([{
        name: 'V Jagadeesh',
        bio: 'WE ARE LIVING IN GREATEST OF TIMES WITH AI'
      }]);
      console.log('Insert Profile Error:', error);
  }

  // Clear existing tech
  const { error: delError } = await supabase.from('tech').delete().neq('id', 0); // Hack to delete all if numeric id or UUID
  console.log('Delete Tech Error:', delError);

  const { error: insError } = await supabase.from('tech').insert([
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'React JS' }
  ]);
  console.log('Insert Tech Error:', insError);
}
test();
