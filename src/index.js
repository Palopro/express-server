import express from 'express';
import cors from 'cors';
import router from './router/index';

const PORT = process.env.PORT || 3001;
const app = express();

require('./config/mongoose');

app.use(cors());
app.use(express.json());

app.use('/api', router);

app.use((err, req, res, next) => {
  const { code, message } = err;
  res.status(code || 500).send(message || 'Something went wrong');
});

app.listen(PORT, () => {
  console.log(`Server Express running on ${PORT}`);
});
