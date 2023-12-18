const express = require("express");
const app = express();
const Port = 5000;

//This example shows a middleware function with no mount path. The function is executed every time the app receives a request.

app.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
})

//middleware function mounted on the /user/:id path
app.use('/user1/:id', (req, res, next) => {
    console.log('Request Type:', req.method)
    next()
  })

//route and its handler function (middleware system).

app.get('/user2/:id', (req, res, next) => {
    res.send('USER')
  })

//loading a series of middleware functions at a mount point, with a mount path.

app.use('/user3/:id', (req, res, next) => {
    console.log('Request URL:', req.originalUrl)
    next()
  }, (req, res, next) => {
    console.log('Request Type:', req.method)
    next()
  })

//Route handlers enable you to define multiple routes for a path. The example below defines two routes for GET requests to the /user/:id path. The second route will not cause any problems, but it will never get called because the first route ends the request-response cycle.

app.get('/user4/:id', (req, res, next) => {
    console.log('ID:', req.params.id)
    next()
  }, (req, res, next) => {
    res.send('User Info')
  })
  
  // handler for the /user/:id path, which prints the user ID
  app.get('/user5/:id', (req, res, next) => {
    res.send(req.params.id)
  })


//To skip the rest of the middleware functions from a router middleware stack, call next('route') to pass control to the next route. NOTE: next('route') will work only in middleware functions that were loaded by using the app.METHOD() or router.METHOD() functions.

  app.get('/user6/:id', (req, res, next) => {
    // if the user ID is 0, skip to the next route
    if (req.params.id === '0') next('route')
    // otherwise pass the control to the next middleware function in this stack
    else next()
  }, (req, res, next) => {
    // send a regular response
    res.send('regular')
  })
  
  // handler for the /user/:id path, which sends a special response
  app.get('/user7/:id', (req, res, next) => {
    res.send('special')
  })

//Middleware can also be declared in an array for reusability.

function logOriginalUrl (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next()
  }
  
  function logMethod (req, res, next) {
    console.log('Request Type:', req.method)
    next()
  }
  
  const logStuff = [logOriginalUrl, logMethod]
  app.get('/user8/:id', logStuff, (req, res, next) => {
    res.send('User Info is here')
  })






app.listen(Port, ()=>{console.log(`I am listening to Port: ${Port}`);})