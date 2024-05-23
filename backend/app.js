const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/userRouter');
const ConnectToDB = require('./db');
const cookieParser = require("cookie-parser");
const dotenv=require("dotenv");
dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(cookieParser())
ConnectToDB();

app.use("/api/v1", router)
 
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
 
const port=5000
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
