const express = require('express');
const app = express();
const port = 3000;

const indexRouter = require('./routes/index');

if (process.env.PORT === undefined) {
  app.listen(port, () => {
    console.log(`db open on dev port: ${port}`);
  });
} else {
  app.listen(process.env.PORT, () => {
    console.log(`db open on prod port: ${process.env.PORT}`);
  });
}

app.use('/', indexRouter);
