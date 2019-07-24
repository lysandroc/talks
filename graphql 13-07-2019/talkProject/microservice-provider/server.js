var restify = require('restify');
var providers = require('./data');

function respondParam(req, res, next) {
  const itens = providers.filter(function(item) { return item.productName.toUpperCase() ===  req.params.name.toUpperCase()});
  res.send(200, itens.length>0 ? itens : 'we dont found any provider in this product');
  next();
}

function respond(req, res, next) {
  res.send(200, providers);
  next();
}

var server = restify.createServer();
server.get('/providerByProduct/:name', respondParam);
server.get('/provider', respond);
server.get('/provider/', respond);

server.listen(3002, function() {
  console.log('%s listening provider microservice at %s', server.name, server.url);
});
