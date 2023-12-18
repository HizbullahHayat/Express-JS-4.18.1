const express = require("express");
const cookieParser = require('cookie-parser')
const cookieValidator = require('./cookieValidator')
const app = express();
const port = 5000;


async function validateCookies (req, res, next) {
  await cookieValidator(req.cookies)
  next()
}

app.use(cookieParser())

app.use(validateCookies)

// error handler
app.use((err, req, res, next) => {
  res.status(400).send(err.message)
})

app.listen(port, ()=>{console.log(`Listening to port ${port}`);})