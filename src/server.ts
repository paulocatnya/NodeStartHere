import routes from './routes';

const express = require('express');
const app = express()

app.use(express.json())




app.listen('3333', () => console.log('Subiu o backend na 3332 💥'))
