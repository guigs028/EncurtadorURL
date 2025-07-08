import express from 'express';
import { connectDB } from './database';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API do Encurtador de URL funcionando!');
});

connectDB();

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});