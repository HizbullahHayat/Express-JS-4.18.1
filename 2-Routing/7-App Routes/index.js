const express = require('express');
const app = express();
const port = 5000;

//You can create chainable route handlers for a route path by using app.route(). Because the path is specified at a single location, creating **modular routes** is helpful, as is reducing redundancy and typos

//MOdular Routes: Instead of defining all routes in a single file, you can break them down into smaller, modular pieces. This not only helps in organizing your code but also makes it easier to maintain and understand. Modular routes are often achieved by using Express Router.Example is below
/*
        // Import modular routes
        const usersRoutes = require('./routes/users');
        const productsRoutes = require('./routes/products');

        // Use modular routes
        app.use('/users', usersRoutes);
        app.use('/products', productsRoutes);
*/


app.route('/book')
  .get((req, res) => {
    res.send('Get a random book')
  })
  .post((req, res) => {
    res.send('Add a book')
  })
  .put((req, res) => {
    res.send('Update the book')
  })

  app.listen(port, ()=>{console.log(`App listening on port ${port}`);})   //use $node index.js