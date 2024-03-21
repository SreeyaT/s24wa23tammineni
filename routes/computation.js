var express = require('express');
var router = express.Router();
 
/* Computation end point */
router.get('/', function(req, res, next) {
   const randomNumber = Math.floor(Math.random() * 100) + 1;
  const x = req.query.x ? parseFloat(req.query.x) : randomNumber;

  
  res.send(`Math.imul() of ${x} is ${Math.imul(x)}<br> Math.log() applied to ${x} is ${Math.log(x)}<br> Math.log10() applied to ${x} is ${Math.log10(x)}`);
 

});
 
module.exports = router;