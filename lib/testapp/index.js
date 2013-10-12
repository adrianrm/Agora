"use strict";
var path = require('path');
var winston = require('winston');
var beans = require('nconf').get('beans');
var Renderer = beans.get('renderer');
var async = require('async');

module.exports = function (app) {
	
  var logger = winston.loggers.get('application');
  
  logger.debug("[testapp] Configuring");
  
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');

  app.get('/', function (req, res, next) {
    logger.debug("[testapp] Root page");    
 
      res.render('index', { });
   
  });
  
  return app;
};