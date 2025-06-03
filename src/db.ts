// src/db.ts
import { Pool } from 'pg';

// Define the User interface for type safety
export interface User {
  id?: number;
  name: string;
  email: string;
}

// Configure the database connection
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'crud_ts_db',
  password: 'admin', // Replace with your PostgreSQL password
  port: 5432,
});

// Test the connection
pool.connect((err:any) => {
  if (err) {
    console.error('Database connection error:', err.stack);
  } else {
    console.log('Connected to PostgreSQL database');
  }
});

export default pool;