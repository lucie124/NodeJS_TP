var express = require('express'); //import de la bibliothèque Express
var app = express(); //instanciation d'une application Express

var allMsgs = ["Hello World", "foobar", "CentraleSupelec Forever"]

// Pour s'assurer que l'on peut faire des appels AJAX au serveur
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Ici faut faire faire quelque chose à notre app...
// On va mettre les "routes"  == les requêtes HTTP acceptéés par notre application.

app.get('/', function(req, res) {
    res.send('hello world');
});
app.get('/test/*', function(req, res) {
    res.json({"msg" : req.url.substr(6)});
    // allMsgs.push(req.url.substr(6))
    // res.json(["Hello", "World"])
    // res.json({"a": 1, "b" : 2})
    // res.send('hello world');
});

app.get('/msg/get/*', function(req, res) {
    var nb = parseInt(req.url.substr(9));
    if (nb < allMsgs.length){
        res.json({ "code": 1, "msg" : allMsgs[nb]});
    }else{
        res.json({ "code": 0});
    }
});

app.get('/msg/nber', function(req, res) {
    res.json(allMsgs.length);
});

app.get('/msg/getAll', function(req, res) {
    res.json(allMsgs);
});

app.get('/msg/post/*', function(req, res) {
    var message = unescape(req.url.substr(10));
    allMsgs.push(message);
    res.json(allMsgs.length-1);
    // allMsgs.push(req.url.substr(6))
    // res.json(["Hello", "World"])
    // res.json({"a": 1, "b" : 2})
    // res.send('hello world');
});

app.listen(8080); //commence à accepter les requêtes
console.log("App listening on port 8080...");

