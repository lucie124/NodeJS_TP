var express = require('express'); //import de la bibliothèque Express
var app = express(); //instanciation d'une application Express

// Pour s'assurer que l'on peut faire des appels AJAX au serveur
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Ici faut faire faire quelque chose à notre app...
// On va mettre les "routes"  == les requêtes HTTP acceptéés par notre application.

app.get('/test/abb', function(req, res) {
    //ici construire la réponse HTTP
    res.json({"msg" : req.url.substr(6)});
    // res.json(["Hello", "World"])
    // res.json({"a": 1, "b" : 2})
    // res.send('hello world');
});


app.listen(8080); //commence à accepter les requêtes
console.log("App listening on port 8080...");

