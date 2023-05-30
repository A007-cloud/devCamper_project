const express = require('express');
require('dotenv').config({ path: './config/config.env' });
// console.log(process.env)

const app = express();
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server running in ${process.env.NODE_ENV} mode on ${port}`);
});
