'use strict';
var defs = require('../helpers/resource');

module.exports = {
	customerAccountGet: customerAccountGet,
	customerAccountFind: customerAccountFind,
	customerAccountPatch: customerAccountPatch,
	customerAccountDelete: customerAccountDelete,
  customerAccountCreate: customerAccountCreate
};

function customerAccountPatch(req, res, next) {
	res.code(201);
	res.json(defs.customerAccount);
}

function customerAccountUpdate(req, res, next) {
	res.code(201);
	res.json(defs.customerAccount);
}

function customerAccountGet(req, res, next) {
	res.json(defs.customerAccount);
}

function customerAccountDelete(req, res, next){
	res.send(204);
}

function customerAccountFind(req, res, next){
	res.json([defs.customerAccount]);
}

function customerAccountCreate(req, res, next){
	res.send(201);
}
