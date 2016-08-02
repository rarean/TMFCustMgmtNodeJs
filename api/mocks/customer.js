'use strict';
var defs = require('../helpers/resource');

module.exports = {
	customerGet: customerGet,
	customerFind: customerFind,
	customerPatch: customerPatch,
	customerUpdate: customerUpdate,
	customerDelete: customerDelete,
  customerCreate: customerCreate
};

function customerPatch(req, res, next) {
	res.setHeader('Content-Type', 'application/json');
	res.json(201, defs.customer);
}

function customerUpdate(req, res, next) {
	res.setHeader('Content-Type', 'application/json');
	res.json(201, defs.customer);
}

function customerGet(req, res, next) {
	res.setHeader('Content-Type', 'application/json');
	res.json(defs.customer);
}

function customerDelete(req, res, next){
	res.setHeader('Content-Type', 'application/json');
	res.json(204);
}

function customerFind(req, res, next){
	res.setHeader('Content-Type', 'application/json');
	res.json([defs.customer]);
}

function customerCreate(req, res, next){
	res.setHeader('Content-Type', 'application/json');
	res.json(201);
}

