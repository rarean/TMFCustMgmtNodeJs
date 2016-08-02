'use strict';
var defs = require('../helpers/resource');

module.exports = {
	paymentMeanGet: paymentMeanGet,
	paymentMeanFind: paymentMeanFind,
	paymentMeanPatch: paymentMeanPatch,
	paymentMeanUpdate: paymentMeanUpdate,
	paymentMeanDelete: paymentMeanDelete,
  paymentMeanCreate: paymentMeanCreate
};

function paymentMeanPatch(req, res, next) {
	res.setHeader('Content-Type', 'application/json');
	res.json(201, defs.creditPaymentMean);
}

function paymentMeanUpdate(req, res, next) {
	res.setHeader('Content-Type', 'application/json');
	res.json(201, defs.creditPaymentMean);
}

function paymentMeanGet(req, res, next) {
	res.setHeader('Content-Type', 'application/json');
	res.json(defs.creditPaymentMean);
}

function paymentMeanDelete(req, res, next){
	res.setHeader('Content-Type', 'application/json');
	res.send(204);
}

function paymentMeanFind(req, res, next){
	res.setHeader('Content-Type', 'application/json');
	res.json([defs.creditPaymentMean, defs.bankPaymentMean]);
}

function paymentMeanCreate(req, res, next){
	res.setHeader('Content-Type', 'application/json');
	res.send(201);
}
