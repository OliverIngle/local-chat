import express from 'express';
import receive from './routes/receive';

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/receive', receive);

app.listen(PORT, () => console.log(`> running on http://localhost:${PORT}`));