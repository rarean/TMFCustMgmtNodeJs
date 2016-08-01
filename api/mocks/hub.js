'use strict';
module.exports = {
	hubGet: hubGet,
	hubDelete: hubDelete,
	hubFind: hubFind,
  hubCreate: hubCreate
};

var hubObj = {
	id: 'abcdhub123',
	callback: 'cb',
	query: 'abcdhub123'
};

function hubGet(req, res, next) {
	res.setHeader('Content-Type', 'application/json');
	res.json(hubObj);
}

function hubDelete(req, res, next){
	res.send(204);
}

function hubFind(req, res, next){
	res.setHeader('Content-Type', 'application/json');
	res.send([hubObj]);
}

function hubCreate(req, res, next){
	res.setHeader('Content-Type', 'application/json');
	res.send(201);
}
