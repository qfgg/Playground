var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('接口收到数据：数据1，数据2，数据3，数据n');
});

module.exports = router;