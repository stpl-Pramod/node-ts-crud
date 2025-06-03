// src/routes/user.routes.ts
import { Router } from 'express';
import { getUser, createUser, updateUser, deleteUser } from '../controllers/user.controller';

const router = Router();

router.get('/user', getUser);
// router.post('/users', createUser);
// router.put('/users/:id', updateUser);
// router.delete('/users/:id', deleteUser);


export default router;