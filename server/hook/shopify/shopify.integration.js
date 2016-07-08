'use strict';

var app = require('../../index.js');
import request from 'supertest';

var newShopifyhook;

describe('Shopifyhook API:', function() {

  describe('GET /hook/shopify', function() {
    var shopifyhooks;

    beforeEach(function(done) {
      request(app)
        .get('/hook/shopify')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          shopifyhooks = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(shopifyhooks).to.be.instanceOf(Array);
    });

  });

  describe('POST /hook/shopify', function() {
    beforeEach(function(done) {
      request(app)
        .post('/hook/shopify')
        .send({
          name: 'New Shopifyhook',
          info: 'This is the brand new shopifyhook!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newShopifyhook = res.body;
          done();
        });
    });

    it('should respond with the newly created shopifyhook', function() {
      expect(newShopifyhook.name).to.equal('New Shopifyhook');
      expect(newShopifyhook.info).to.equal('This is the brand new shopifyhook!!!');
    });

  });

  describe('GET /hook/shopify/:id', function() {
    var shopifyhook;

    beforeEach(function(done) {
      request(app)
        .get('/hook/shopify/' + newShopifyhook._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          shopifyhook = res.body;
          done();
        });
    });

    afterEach(function() {
      shopifyhook = {};
    });

    it('should respond with the requested shopifyhook', function() {
      expect(shopifyhook.name).to.equal('New Shopifyhook');
      expect(shopifyhook.info).to.equal('This is the brand new shopifyhook!!!');
    });

  });

  describe('PUT /hook/shopify/:id', function() {
    var updatedShopifyhook;

    beforeEach(function(done) {
      request(app)
        .put('/hook/shopify/' + newShopifyhook._id)
        .send({
          name: 'Updated Shopifyhook',
          info: 'This is the updated shopifyhook!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedShopifyhook = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedShopifyhook = {};
    });

    it('should respond with the updated shopifyhook', function() {
      expect(updatedShopifyhook.name).to.equal('Updated Shopifyhook');
      expect(updatedShopifyhook.info).to.equal('This is the updated shopifyhook!!!');
    });

  });

  describe('DELETE /hook/shopify/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/hook/shopify/' + newShopifyhook._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when shopifyhook does not exist', function(done) {
      request(app)
        .delete('/hook/shopify/' + newShopifyhook._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
