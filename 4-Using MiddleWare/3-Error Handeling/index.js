const express = require("express");
const app = express();
// const router = express.Router()
const Port = 5000;

//Define error-handling middleware functions in the same way as other middleware functions, except with four arguments instead of three, specifically with the signature (err, req, res, next)):

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})


app.listen(Port, ()=>{console.log(`I am listening to Port: ${Port}`);})