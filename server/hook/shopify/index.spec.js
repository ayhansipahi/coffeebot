'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var shopifyCtrlStub = {
  index: 'shopifyCtrl.index',
  show: 'shopifyCtrl.show',
  create: 'shopifyCtrl.create',
  update: 'shopifyCtrl.update',
  destroy: 'shopifyCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var shopifyhookIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './shopifyhook.controller': shopifyCtrlStub
});

describe('Shopifyhook API Router:', function() {

  it('should return an express router instance', function() {
    expect(shopifyhookIndex).to.equal(routerStub);
  });

  describe('GET /app/shopifyhook', function() {

    it('should route to shopifyhook.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'shopifyCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /app/shopifyhook/:id', function() {

    it('should route to shopifyhook.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'shopifyCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /app/shopifyhook', function() {

    it('should route to shopifyhook.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'shopifyCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /app/shopifyhook/:id', function() {

    it('should route to shopifyhook.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'shopifyCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /app/shopifyhook/:id', function() {

    it('should route to shopifyhook.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'shopifyCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /app/shopifyhook/:id', function() {

    it('should route to shopifyhook.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'shopifyCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
