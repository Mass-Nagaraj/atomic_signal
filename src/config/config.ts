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
