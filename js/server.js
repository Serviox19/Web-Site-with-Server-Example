var express = require('express');
var app = express();
var PORT = 8080;
var bodyParser = require('body-parser');
var session = require('express-session');
var GitHubApi = require("node-github");
//var gitUsers = ["Serviox19", "Cbmoate"];


//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/js", express.static("js"));
app.use("/css", express.static("css"));


app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/home.html');
});

app.get('/my-account', function(req, res) {
  res.sendFile(process.cwd() + '/views/account-page.html');
});

app.get('/help', function(req, res) {
  res.sendFile(process.cwd() + '/views/help.html');
});

app.get('/github/:user', function(req, res) {
  var github = new GitHubApi({
  version: "3.0.0"
  });
  
  var user = req.params.user;

  github.user.getFrom({
    user: user
  }, function(err, gitResponse){
    res.send(JSON.stringify(gitResponse))
  });
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

