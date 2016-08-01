'use strict';
var defs = require('../helpers/resource');

module.exports = {
	customerGet: customerGet,
	customerFind: customerFind,
	customerPatch: customerPatch,
	customerDelete: customerDelete,
  customerCreate: customerCreate
};

function customerPatch(req, res, next) {
	res.code(201);
	res.json(defs.customer);
}

function customerUpdate(req, res, next) {
	res.code(201);
	res.json(defs.customer);
}

function customerGet(req, res, next) {
	res.json(defs.customer);
}

function customerDelete(req, res, next){
	res.send(204);
}

function customerFind(req, res, next){
	res.json([defs.customer]);
}

function customerCreate(req, res, next){
	res.send(201);
}

