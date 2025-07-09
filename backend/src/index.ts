import express from 'express';
import { connectDB } from './database';
import dotenv from 'dotenv';
import urlRoutes from './routes/urlRoutes';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Rotas principais
app.use('/', urlRoutes);

connectDB();

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});