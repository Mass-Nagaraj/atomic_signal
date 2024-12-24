<<<<<<< HEAD
// import { createClient } from '@supabase/supabase-js'


// const supabaseUrl = 'https://lqvtjbabzfohnqgoqtkv.supabase.co'
// const supabaseKey :string = process.env.SUPABASE_KEY || ''

// export const supabase = createClient(supabaseUrl, supabaseKey);

=======
import postgres from 'postgres'
import dotenv from 'dotenv';

dotenv.config();

// Load DATABASE_URL from environment variables
const connectionString = process.env.DATABASE_URL || '';

// Initialize the connection
const sql = postgres(connectionString);

// Fetch data from a table (e.g., "users")
const fetchUsers = async () => {
  try {
    const users = await sql`SELECT * FROM users`;
    console.log(users);
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// Example: Fetch and log data
fetchUsers();
>>>>>>> fa1e7596ecde164f2f7a60c669db8d58a91f17f7
