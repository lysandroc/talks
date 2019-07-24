var restify = require('restify');
var products = require('./data');

function respondParam(req, res, next) {
  const itens = products.filter(function(item) { return item.name.toUpperCase() ===  req.params.name.toUpperCase()});
  res.send(200, itens.length>0 ? itens[0] : 'não encontramos seu produto');
  next();
}

function respond(req, res, next) {
  res.send(200, products);
  next();
}

var server = restify.createServer();
server.get('/product/:name', respondParam);
server.get('/product', respond);
server.get('/product/', respond);

server.listen(3001, function() {
  console.log('%s listening product microservice at %s', server.name, server.url);
});
