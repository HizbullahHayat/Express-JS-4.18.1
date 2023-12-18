# Writing Middleware

Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s **request-response cycle**. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

Middleware functions can perform the following tasks:

***1-Execute any code.***

***2-Make changes to the request and the response objects.***

***3-End the request-response cycle.***

***4-Call the next middleware in the stack.***

***5-If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.***

The following Examples shows the elements of a middleware function call:

var express = require("express");
var app = express();

app.get('/',(req, res, next){
    next()
})
app.listen(3000)

1-**(next)** Callback argument to the middleware function, called "next" by convention.

2-**(res)** HTTP response argument to the middleware function, called "res" by convention.

3-**(req)** HTTP request argument to the middleware function, called "req" by convention.


Check index.js file
