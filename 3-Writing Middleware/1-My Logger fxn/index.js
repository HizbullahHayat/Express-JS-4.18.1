const express = require("express");
const app = express();
const port = 5000;

/*ITS ALL ABOUT THE ORDER
Every time the app receives a request, it prints the message “LOGGED” to the terminal.

The order of middleware loading is important: middleware functions that are loaded first are also executed first.

If myLogger is loaded after the route to the root path, the request never reaches it and the app doesn’t print “LOGGED”, because the route handler of the root path terminates the request-response cycle.

The middleware function myLogger simply prints a message, then passes on the request to the next middleware function in the stack by calling the next() function.
*/ 

const myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
  }
  app.use(myLogger)
  
  
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
/*
 const myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
  }
  app.use(myLogger)

*/

app.listen(port, ()=>{console.log(`Listening to port ${port}`);})