// src/controllers/user.controller.ts
import { Request, Response } from 'express';
import pool, { User } from '../db';

export const getUser = async (req: Request, res: Response) => {
//   res.json({ message: 'User data fetched successfully' });
try {
    const result = await pool.query('SELECT * FROM public."User"');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user' });
  }
};

// export const createUser = (req: Request, res: Response) => {
//   res.json({ message: 'User created successfully' });
// };

// Create a new user
export const createUser = async (req: Request, res: Response) => {
    const { name, email }: User = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }
  
    try {
      const result = await pool.query(
        'INSERT INTO user (name, email) VALUES ($1, $2) RETURNING *',
        [name, email]
      );
      res.status(201).json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create user' });
    }
  };

  // Update a user
export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email }: User = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }
  
    try {
      const result = await pool.query(
        'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
        [name, email, id]
      );
      if (result.rowCount === 0) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update user' });
    }
  };
  
  // Delete a user
  export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
      const result = await pool.query('DELETE FROM users WHERE id = $1', [id]);
      if (result.rowCount === 0) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete user' });
    }
  };