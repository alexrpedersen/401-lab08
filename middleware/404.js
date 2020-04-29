'use strict';

module.exports = (req,res) => {
  res.status(404);
  res.statusMessage = 'Resource Is Not Found';
  res.json({error:'Not Found'});
};