'use strict';
var defs = require('../helpers/resource');

module.exports = {
	paymentMeanGet: paymentMeanGet,
	paymentMeanFind: paymentMeanFind,
	paymentMeanPatch: paymentMeanPatch,
	paymentMeanDelete: paymentMeanDelete,
  paymentMeanCreate: paymentMeanCreate
};

function paymentMeanPatch(req, res, next) {
	res.code(201);
	res.json(defs.creditPaymentMean);
}

function paymentMeanUpdate(req, res, next) {
	res.code(201);
	res.json(defs.creditPaymentMean);
}

function paymentMeanGet(req, res, next) {
	res.json(defs.creditPaymentMean);
}

function paymentMeanDelete(req, res, next){
	res.send(204);
}

function paymentMeanFind(req, res, next){
	res.json([defs.creditPaymentMean, defs.bankPaymentMean]);
}

function paymentMeanCreate(req, res, next){
	res.send(201);
}
