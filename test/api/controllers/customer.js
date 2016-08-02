var should = require('should');
var request = require('supertest');
var server = require('../../../app');
var dash = require('lodash');
var defs = require('../../../api/helpers/resource');

describe('controller', function() {

  describe('customer', function() {

		describe('POST /v2/customer', function(){

      it('should create a new customer', function(done) {

        request(server)
          .post('/v2/customer')
				  .send(defs.customer)
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

    describe('GET /v2/customer', function() {

      it('should list all customers', function(done) {

        request(server)
          .get('/v2/customer')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.should.eql([defs.customer]);

            done();
          });
      });

      it('should Get customer by Id', function(done) {

        request(server)
          .get('/v2/customer/'+ defs.customer.id)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.should.eql(defs.customer);

            done();
          });
      });

    });

		describe('DELETE /v2/customer/{customerId}', function(){

      it('should delete customer by Id', function(done) {

        request(server)
          .del('/v2/customer/'+defs.customer.id)
          .set('Accept', 'application/json')
          .expect(204)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.should.eql({});

            done();
          });
      });
		});

		describe('PATCH /v2/customer/{customerId}', function(){

      it('should update customer by Id', function(done) {

        request(server)
          .patch('/v2/customer/'+defs.customer.id)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(201)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.should.eql(defs.customer);

            done();
          });
      });
		});

		describe('PUT /v2/customer/{customerId}', function(){

      it('should update customer by Id', function(done) {

        request(server)
          .put('/v2/customer/'+defs.customer.id)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(201)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.should.eql(defs.customer);

            done();
          });
      });
		});

  });

});
