// src/index.ts
import express from 'express';
import userRoutes from './routes/user.routes';

const app = express();
const port = 3000;

app.use(express.json()); // Parse JSON bodies
app.use('/api', userRoutes); // Mount user routes under /api

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});