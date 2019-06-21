var restify = require('restify');
var summary = require('./data');

function respondParam(req, res, next) {
  const itens = summary.filter(function(item) { return item.productName.toUpperCase() ===  req.params.name.toUpperCase()});
  res.send(200, itens.length>0 ? itens : 'we dont found any summary in this product');
  next();
}

function respond(req, res, next) {
  res.send(200, sumarry);
  next();
}

var server = restify.createServer();
server.get('/summaryByProduct/:name', respondParam);
server.get('/summary', respond);
server.get('/summary/', respond);

server.listen(3000, function() {
  console.log('%s listening product microservice at %s', server.name, server.url);
});
