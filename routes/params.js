'use strict';

const express = require('express');
const router = express.Router();

funtion getZip(req, res, next) {
    req.body.zip = Math.floor(Math.random() * 10000).toString().padStart(5, 0);
}
router.param('city', getZip);


// random middleware
router.get('/places/seattle', function (req, res, next) {
    res.send(`Zip: ${req.body.zip}`);
  });
  
  // funny middleware
  router.get('/places/:city', function (req, res, next) {
    res.send(`Zip: ${req.body.zip}`);
  });
  
  // also not here and just for reference 
  router.get('/flights/to/:airport', function (req, res, next) {
    res.send(`Zip: ${req.body.zip}`);
  });
  
  
  module.exports = router;