'use strict';
var defs = require('../helpers/resource');

module.exports = {
	customerAccountGet: customerAccountGet,
	customerAccountFind: customerAccountFind,
	customerAccountPatch: customerAccountPatch,
	customerAccountUpdate: customerAccountUpdate,
	customerAccountDelete: customerAccountDelete,
  customerAccountCreate: customerAccountCreate
};

function customerAccountPatch(req, res, next) {
	res.setHeader('Content-Type', 'application/json');
	res.json(201, defs.customerAccount);
}

function customerAccountUpdate(req, res, next) {
	res.setHeader('Content-Type', 'application/json');
	res.json(201, defs.customerAccount);
}

function customerAccountGet(req, res, next) {
	res.setHeader('Content-Type', 'application/json');
	res.json(defs.customerAccount);
}

function customerAccountDelete(req, res, next){
	res.setHeader('Content-Type', 'application/json');
	res.send(204);
}

function customerAccountFind(req, res, next){
	res.setHeader('Content-Type', 'application/json');
	res.json([defs.customerAccount]);
}

function customerAccountCreate(req, res, next){
	res.setHeader('Content-Type', 'application/json');
	res.send(201);
}
