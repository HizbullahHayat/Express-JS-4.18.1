const express = require('express');
const app = express();
const port = 5000;

//SINGLE CALLBACK FUCTION
app.get('/example/a', (req, res) => {
  res.send('Hello from A!')
})
//THIS IS HOW NEXT WORKS....
//When a file is not found, instead of sending a 404 response, it calls next() to move on to the next middleware, allowing for stacking and fall-backs
app.get('/example/a21', (req, res, next) => {
  res.send('Hello from A!')
  next()
  res.send('not found')
})

//MORE THAN ONE CALLBACKS
app.get('/example/b', (req, res, next) => {
  console.log('the response will be sent by the next function ...')
  next()
}, (req, res) => {
  res.send('Hello from B!')
})

//ARRAY OF CALLBACKS
const cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

const cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}

const cb2 = function (req, res) {
  res.send('Hello from C!')
}

app.get('/example/c', [cb0, cb1, cb2])

//COMBINITION OF INDEPENDENT FXN AND ARRAY OF CALLBACK FXNS
const cb10 = function (req, res, next) {
  console.log('CB0')
  next()
}

const cb11 = function (req, res, next) {
  console.log('CB1')
  next()
}

app.get('/example/d', [cb10, cb11], (req, res, next) => {
  console.log('the response will be sent by the next function ...')
  next()
}, (req, res) => {
  res.send('Hello from D!')
})


  app.listen(port, ()=>{console.log(`App listening on port ${port}`);})   //use $node index.js