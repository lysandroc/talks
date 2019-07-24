var restify = require('restify');
var summaries = require('./data');

function respondParam(req, res, next) {
  const itens = summaries.filter(function(item) { return item.productName.toUpperCase() ===  req.params.name.toUpperCase()});
  res.send(200, itens.length>0 ? itens : 'we dont found any summary in this product');
  next();
}

function respond(req, res, next) {
  res.send(200, summaries);
  next();
}

var server = restify.createServer();
server.get('/summaryByProduct/:name', respondParam);
server.get('/summary', respond);
server.get('/summary/', respond);

server.listen(3003, function() {
  console.log('%s listening sale microservice at %s', server.name, server.url);
});
 