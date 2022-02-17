var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'QR Code Generator', reqMethod: "get" });
});

/* POST QR Code Page */
router.post("/getQR", function(req, res, next) {

  const requestBody = req.body;

  if("url" in requestBody) {
    const url = requestBody["url"];

    const endPoint = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`;

    res.render("index", { title: 'QR Code Generator', reqMethod: "post", endPoint: endPoint });

  }else{
    res.end("<script>window.alert('No URL provided');window.location.href='/';</script>");
  }

})


/* POST for API Call */
router.post("/", function(req, res, next) {
  const requestBody = req.body;

  if("url" in requestBody) {
    const url = requestBody["url"];

    const endPoint = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`;

    const response = {"data":endPoint};

    res.end(JSON.stringify(response));

  }else{
    res.end(JSON.stringify("invalid payload"));
  }
});

module.exports = router;
