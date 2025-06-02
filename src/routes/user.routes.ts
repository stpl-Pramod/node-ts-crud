// src/routes/user.routes.ts
import { Router } from 'express';
import { getUser, createUser } from '../controllers/user.controller';

const router = Router();

router.get('/users', getUser);
router.post('/users', createUser);

export default router;