import express from 'express';
import mountRoutes from './routes/index.js';

const app = express();

const port = 3000;

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
