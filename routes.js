let express = require('express');
let router = express.Router();
let path = require('path');
let app = express();


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

app.listen(process.env.port || 3000);

console.log('Server is listening @ port 3000');
