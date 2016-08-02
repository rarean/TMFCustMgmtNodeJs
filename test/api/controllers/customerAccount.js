var should = require('should');
var request = require('supertest');
var server = require('../../../app');
var dash = require('lodash');
var defs = require('../../../api/helpers/resource');

describe('controller', function() {

  describe('customerAccount', function() {

		describe('POST /v2/customerAccount', function(){

      it('should create a new customerAccount', function(done) {

        request(server)
          .post('/v2/customerAccount')
				  .send(defs.customerAccount)
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

    describe('GET /v2/customerAccount', function() {

      it('should list all customerAccounts', function(done) {

        request(server)
          .get('/v2/customerAccount')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.should.eql([defs.customerAccount]);

            done();
          });
      });

      it('should Get customerAccount by Id', function(done) {

        request(server)
          .get('/v2/customerAccount/'+ defs.customerAccount.id)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.should.eql(defs.customerAccount);

            done();
          });
      });

    });

		describe('DELETE /v2/customerAccount/{customerAccountId}', function(){

      it('should delete customerAccount by Id', function(done) {

        request(server)
          .del('/v2/customerAccount/'+defs.customerAccount.id)
          .set('Accept', 'application/json')
          .expect(204)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.should.eql({});

            done();
          });
      });
		});

		describe('PATCH /v2/customerAccount/{customerAccountId}', function(){

      it('should update customerAccount by Id', function(done) {

        request(server)
          .patch('/v2/customerAccount/'+defs.customerAccount.id)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(201)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.should.eql(defs.customerAccount);

            done();
          });
      });
		});

		describe('PUT /v2/customerAccount/{customerAccountId}', function(){

      it('should update customerAccount by Id', function(done) {

        request(server)
          .put('/v2/customerAccount/'+defs.customerAccount.id)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(201)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.should.eql(defs.customerAccount);

            done();
          });
      });
		});

  });

});
