var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: '毕业季销售平台',keywords:'毕业销售平台',companyname:'ocean科技有限公司',productname:'毕业季销售' });
});
module.exports = router;
