import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zylaputsexixoxtlomhs.supabase.co';
const supabaseKey = 'sb_publishable_pUpduqaND1jmxQeZbyicFw_NkQndTf8';
const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
  const quotes = "WE ARE LIVING IN GREATEST OF TIMES WITH AI | WE'RE LIVING IN THE GREATEST ERA OF AI — LET'S BUILD SOMETHING REMARKABLE.";
  
  const { data: existing } = await supabase.from('profile').select('id').limit(1).single();
  if (existing) {
    const { error: pErr } = await supabase.from('profile').update({ bio: quotes }).eq('id', existing.id);
    console.log('Profile update:', pErr);
  }

  const { data: tech } = await supabase.from('tech').select('*');
  for (const t of tech) {
    let desc = '';
    if (t.name.toUpperCase().includes('HTML')) desc = 'The structural backbone of the web. It is absolutely essential for creating accessible, semantically correct layouts that search engines and browsers can reliably parse.';
    if (t.name.toUpperCase().includes('CSS')) desc = 'The styling engine. Critical for transforming raw structures into responsive, beautiful, and intuitive user interfaces that engage users.';
    if (t.name.toUpperCase().includes('REACT')) desc = 'A powerful declarative UI library. It allows us to build complex, highly interactive, and state-driven web applications efficiently through modular components.';
    
    if (desc) {
      await supabase.from('tech').update({ category: desc }).eq('id', t.id);
    }
  }
  console.log('Tech updated');
}
run();
