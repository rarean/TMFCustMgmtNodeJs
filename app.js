'use strict';

var SwaggerRestify = require('swagger-restify-mw');
var SwaggerUi = require('swagger-tools/middleware/swagger-ui');
var restify = require('restify');
var app = restify.createServer();

module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerRestify.create(config, function(err, swaggerRestify) {
  if (err) { throw err; }

  // Add swagger-ui with /api-docs
  app.use(SwaggerUi(swaggerRestify.runner.swagger));

  swaggerRestify.register(app);

  // Custom error handler that returns JSON
  app.use(function(err, req, res, next) {
    if (typeof err !== 'object') {
      // If the object is not an Error, create a representation that appears to be
      err = {
        message: String(err) // Coerce to string
      };
    } else {
      // Ensure that err.message is enumerable (It is not by default)
      Object.defineProperty(err, 'message', { enumerable: true });
    }
    // Return a JSON representation of #/definitions/ErrorResponse
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(err));
  });

  var port = process.env.PORT || 10010;
  app.listen(port);

	/*
  if (swaggerRestify.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }
	*/
});
