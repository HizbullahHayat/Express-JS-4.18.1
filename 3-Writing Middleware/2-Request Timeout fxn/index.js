const express = require("express");
const app = express();
const port = 5000;

const requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  console.log(req.requestTime);
  next()
}

app.use(requestTime)

app.get('/', (req, res) => {
  let responseText = 'Hello World!<br>'
  responseText += `<small>Requested at: ${req.requestTime}</small>`
  res.send(responseText)
})

app.listen(port, ()=>{console.log(`Listening to port ${port}`);})