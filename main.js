// dépendance api express
var express = require('express');

// serveur html
var server = express();
server.listen(800);

server.get('/page.html', function (request, response) {
    // exécuté lorsqu'est appelé page.html
});