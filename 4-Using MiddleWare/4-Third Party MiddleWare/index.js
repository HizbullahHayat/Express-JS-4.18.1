const express = require("express");
const app = express();
// const router = express.Router()
const Port = 5000;
const cookieParser = require('cookie-parser')

//Define error-handling middleware functions in the same way as other middleware functions, except with four arguments instead of three, specifically with the signature (err, req, res, next)):

//  $ npm install cookie-parser

// load the cookie-parsing middleware
app.use(cookieParser())

app.listen(Port, ()=>{console.log(`I am listening to Port: ${Port}`);})