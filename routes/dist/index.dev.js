"use strict";

var express = require('express');

var router = express.Router();
/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Hello'
  });
});
module.exports = router;
//# sourceMappingURL=index.dev.js.map
