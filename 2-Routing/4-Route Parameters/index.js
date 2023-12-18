const express = require('express');
const app = express();
const port = 5000;


//userID = 5585 , bookID = 8858588
app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params)
})




  app.listen(port, ()=>{console.log(`App listening on port ${port}`);})   //use $node index.js