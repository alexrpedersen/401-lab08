'use strict';

const express = require ('express');
const app = express();

//middleware
const errorHandler = require('../middleware/500.js');
const notFoundHandler = require('../middleware/404.js');

//routes
const apiRouter = require('../routes/v1.js');
const paramsRouter = require('../routes/params.js');

app.use(express.json());

// actual routes?
app.use(apiRouter);
app.use(paramsRouter);

app.use('*', notFoundHandler);
app.use(errorHandler);


module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};