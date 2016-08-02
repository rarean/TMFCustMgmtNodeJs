var should = require('should');
var request = require('supertest');
var server = require('../../../app');
var dash = require('lodash');
var defs = require('../../../api/helpers/resource');

describe('controller', function() {

  describe('paymentMean', function() {

		describe('POST /v2/paymentMean', function(){

      it('should create a new paymentMean', function(done) {

        request(server)
          .post('/v2/paymentMean')
				  .send(defs.creditPaymentMean)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(201)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.should.eql('');

            done();
          });
      });
		});

    describe('GET /v2/paymentMean', function() {

      it('should list all paymentMeans', function(done) {

        request(server)
          .get('/v2/paymentMean')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.should.eql([defs.creditPaymentMean, defs.bankPaymentMean]);

            done();
          });
      });

      it('should Get paymentMean by Id', function(done) {

        request(server)
          .get('/v2/paymentMean/'+ defs.creditPaymentMean.id)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.should.eql(defs.creditPaymentMean);

            done();
          });
      });

    });

		describe('DELETE /v2/paymentMean/{paymentMeanId}', function(){

      it('should delete paymentMean by Id', function(done) {

        request(server)
          .del('/v2/paymentMean/'+defs.creditPaymentMean.id)
          .set('Accept', 'application/json')
          .expect(204)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.should.eql({});

            done();
          });
      });
		});

		describe('PATCH /v2/paymentMean/{paymentMeanId}', function(){

      it('should update paymentMean by Id', function(done) {

        request(server)
          .patch('/v2/paymentMean/'+defs.creditPaymentMean.id)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(201)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.should.eql(defs.creditPaymentMean);

            done();
          });
      });
		});

		describe('PUT /v2/paymentMean/{paymentMeanId}', function(){

      it('should update paymentMean by Id', function(done) {

        request(server)
          .put('/v2/paymentMean/'+defs.creditPaymentMean.id)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(201)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.should.eql(defs.creditPaymentMean);

            done();
          });
      });
		});

  });

});
