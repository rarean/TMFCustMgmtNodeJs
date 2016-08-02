var should = require('should');
var request = require('supertest');
var server = require('../../../app');
var dash = require('lodash');

describe('controller', function() {

  describe('hub', function() {

		describe('POST /v2/hub', function(){

      it('should create message', function(done) {
				var body = {
					callback: 'cb',
					query: 'abcdhub123'
				};

        request(server)
          .post('/v2/hub')
				  .send(body)
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

    describe('GET /v2/hub', function() {

      it('should list all messages', function(done) {

        request(server)
          .get('/v2/hub')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

						var expected = {
							id: 'abcdhub123',
							callback: 'cb',
							query: 'abcdhub123'
						};
            res.body.should.eql([expected]);

            done();
          });
      });

      it('should Get message by Id', function(done) {

        request(server)
          .get('/v2/hub/abcdhub123')
          .query({ name: 'abcdhub123'})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
						var expected = {
							id: 'abcdhub123',
							callback: 'cb',
							query: 'abcdhub123'
						};

            res.body.should.eql(expected);

            done();
          });
      });

    });

		describe('DELETE /v2/hub/{hubId}', function(){

      it('should delete message by Id', function(done) {

        request(server)
          .del('/v2/hub/abcdhub123')
          .set('Accept', 'application/json')
          .expect(204)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.should.eql({});

            done();
          });
      });
		});

  });

});
