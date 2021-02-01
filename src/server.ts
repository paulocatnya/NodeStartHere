// importando o express
import express from 'express';

import cors from 'cors';

// usando o express
const app = express();

// usar cors para poder ser acessada
app.use(cors());

// usando o json no express
app.use(express.json());

// retorna projeto com id solicitado no param
app.get('/projects/', (req, res) => res.status(200).json({ response: 'GET OK', data: { a: 1 } }));

app.post('/projects', (req, res) => res.status(200).json({ response: 'GET OK', data: { a: 1 } }));

app.listen('3332', () => console.log('Subiu o backend na 3332 💥'));
