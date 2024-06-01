import express from 'express';
import cors from 'cors';
import mountRoutes from './routes/index.js';

const port = 3005;
const app = express();

app.use(cors());
app.use(express.json());

if (process.env.PORT === undefined) {
  app.listen(port, () => {
    console.log(`db open on dev port: ${port}`);
  });
} else {
  app.listen(process.env.PORT, () => {
    console.log(`db open on prod port: ${process.env.PORT}`);
  });
}

mountRoutes(app);
