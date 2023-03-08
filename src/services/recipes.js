//this is where I fetch data from supabase 

import { checkError, client } from './client.js';

export async function getRecipes() {
  const response = await client.from('recipes').select('*');
  return checkError(response);
}