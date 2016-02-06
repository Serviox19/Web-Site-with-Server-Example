var express = require('express');
var app = express();
var PORT = 8080;
var bodyParser = require('body-parser');
//var session = require('express-session');

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/js", express.static("js"));
app.use("/css", express.static("css"));


app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/home.html');
});

//app.get('/login', function(req, res) {
  //res.sendFile(process.cwd() + '/login.html');
//});

app.get('/my-account', function(req, res) {
  res.sendFile(process.cwd() + '/views/account-page.html');
});

app.get('/help', function(req, res) {
  res.sendFile(process.cwd() + '/views/help.html');
});

app.post('/', function(req, res) {
  console.log(req.body);
  if (req.body.email == "servio19@gmail.com" && req.body.password == "password") {
    res.redirect('/my-account');
  } else {
    res.redirect('/');
  }
});

app.listen(PORT, function() {
  console.log('App listening on port %s', PORT);
});

