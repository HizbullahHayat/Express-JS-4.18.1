# Configurable middleware
If you need your middleware to be configurable, export a function which accepts an options object or other parameters, which, then returns the middleware implementation based on the input parameters.

**File:** my-middleware.js

module.exports = function (options) {
  return function (req, res, next) {
    // Implement the middleware function based on the options object
    next()
  }
}

**Use the above middleware just as below in index.js**

const mw = require('./my-middleware.js')

app.use(mw({ option1: '1', option2: '2' }))