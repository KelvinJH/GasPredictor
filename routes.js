let express = require('express');
let router = express.Router();
let path = require('path');
let app = express();
let port = process.env.PORT || 3000;


// GET: / and /home
router.get(['/', '/home'], function(req, res) {
	  res.sendFile(path.join(__dirname+'/views/home.html'));
});
router.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname+'/views/about.html'));
});

//middlewares
app.use('/', router);
app.use('/', express.static(__dirname+'/css'));
app.use('/', express.static(__dirname+'/javascript'));
app.use('/', express.static(__dirname+'/images'));

app.listen(port);

console.log('Server is listening @ port ' + port);
