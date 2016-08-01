var should = require('should');
var request = require('supertest');
var server = require('../../../app');
var dash = require('lodash');

describe('controllers', function() {

  describe('hub', function() {

    describe('GET /v2/hub', function() {

      it('should return an object', function(done) {

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

      it.skip('should accept a name parameter', function(done) {

        request(server)
          .get('/v2/hub/abcdhub123')
          .query({ name: 'abcdhub123'})
          .set('Accept', 'application/json')
          //.expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
						console.log(err, res.body);
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

  });

});
