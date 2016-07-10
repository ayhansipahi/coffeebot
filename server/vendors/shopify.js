/**
 * Shopify will be used commerce api
 * we will
 * push products
 * get products
 * and get webhooks
 * than update user and send sms
 *  also creating cart link needs to be done
 */

const config = require("./shopify.config");
const Shopify = require('shopify-api-node');

const shopify = new Shopify(config.SHOPIFY_STORE, config.SHOPIFY_TOKEN, config.SHOPIFY_PASS);

/**
 *
 * @constructor
 */
function Shop(){}


Shop.prototype.applicationCharge = ()=>{
  var self = {resource:"applicationCharge"};
  self.activate = (id, params, cb); {shopify.applicationCharge.activate(id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.create = (params, cb)=> {shopify.applicationCharge.create(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.get = (id, params, cb)=> {shopify.applicationCharge.get(id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.list = (params, cb)=> {shopify.applicationCharge.list(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  return self;
};
Shop.prototype.article = ()=>{
  var self = {resource:"article"};
  self.authors = (cb)=> {shopify.article.authors().then(data => cb && cb(data)).catch(err => console.error(err))};
  self.count = (blogId, params, cb)=> {shopify.article.count(blogId, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.create = (blogId, params, cb)=> {shopify.article.create(blogId, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.delete = (blogId, id, cb)=> {shopify.article.delete(blogId, id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.get = (blogId, id, params, cb)=> {shopify.article.get(blogId, id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.list = (blogId, params, cb)=> {shopify.article.list(blogId, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.tags = (blogId, params, cb)=> {shopify.article.tags(blogId, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.update = (blogId, id, params, cb)=> {shopify.article.update(blogId, id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  return self;
};
Shop.prototype.asset = ()=>{
  var self = {resource:"asset"};
  self.create = (themeId, params, cb)=> {shopify.asset.create(themeId, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.delete = (themeId, params, cb)=> {shopify.asset.delete(themeId, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.get = (themeId, params, cb)=> {shopify.asset.get(themeId, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.list = (themeId, params, cb)=> {shopify.asset.list(themeId, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.update = (themeId, params, cb)=> {shopify.asset.update(themeId, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  return self;
};
Shop.prototype.blog = ()=>{
  var self = {resource:"blog"};
  self.count = (cb)=> {shopify.blog.count().then(data => cb && cb(data)).catch(err => console.error(err))};
  self.create = (params, cb)=> {shopify.blog.create(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.delete = (id, cb)=> {shopify.blog.delete(id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.get = (id, params, cb)=> {shopify.blog.get(id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.list = (params, cb)=> {shopify.blog.list(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.update = (id, params, cb)=> {shopify.blog.update(id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  return self;
};
Shop.prototype.carrierService = ()=>{
  var self = {resource:"carrierService"};
  self.create = (params, cb)=> {shopify.carrierService.create(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.delete = (id, cb)=> {shopify.carrierService.delete(id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.get = (id, cb)=> {shopify.carrierService.get(id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.list = (cb)=> {shopify.carrierService.list().then(data => cb && cb(data)).catch(err => console.error(err))};
  self.update = (id, params, cb)=> {shopify.carrierService.update(id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  return self;
};
Shop.prototype.checkout = ()=>{
  var self = {resource:"checkout"};
  self.count = (params, cb)=> {shopify.checkout.count(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.list = (params, cb)=> {shopify.checkout.list(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  return self;
};
Shop.prototype.collect = ()=>{
  var self = {resource:"collect"};
  self.count = (params, cb)=> {shopify.collect.count(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.create = (params, cb)=> {shopify.collect.create(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.delete = (id, cb)=> {shopify.collect.delete(id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.get = (id, params, cb)=> {shopify.collect.get(id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.list = (params, cb)=> {shopify.collect.list(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  return self;
};
Shop.prototype.comment = ()=>{
  var self = {resource:"comment"};
  self.approve = (id, cb)=> {shopify.comment.approve(id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.count = (params, cb)=> {shopify.comment.count(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.create = (params, cb)=> {shopify.comment.create(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.get = (id, params, cb)=> {shopify.comment.get(id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.list = (params, cb)=> {shopify.comment.list(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.notSpam = (id, cb)=> {shopify.comment.notSpam(id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.remove = (id, cb)=> {shopify.comment.remove(id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.restore = (id, cb)=> {shopify.comment.restore(id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.spam = (id, cb)=> {shopify.comment.spam(id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.update = (id, params, cb)=> {shopify.comment.update(id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  return self;
};
Shop.prototype.country = ()=>{
  var self = {resource:"country"};
  self.count = (cb)=> {shopify.country.count().then(data => cb && cb(data)).catch(err => console.error(err))};
  self.create = (params, cb)=> {shopify.country.create(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.delete = (id, cb)=> {shopify.country.delete(id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.get = (id, params, cb)=> {shopify.country.get(id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.list = (params, cb)=> {shopify.country.list(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.update = (id, params, cb)=> {shopify.country.update(id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  return self;
};
Shop.prototype.customCollection = ()=>{
  var self = {resource:"customCollection"};
  self.count = (params, cb)=> {shopify.customCollection.count(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.create = (params, cb)=> {shopify.customCollection.create(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.delete = (id, cb)=> {shopify.customCollection.delete(id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.get = (id, params, cb)=> {shopify.customCollection.get(id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.list = (params, cb)=> {shopify.customCollection.list(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.update = (id, params, cb)=> {shopify.customCollection.update(id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  return self;
};
Shop.prototype.customer = ()=>{
  var self = {resource:"customer"};
  self.accountActivationUrl = (id, cb)=> {shopify.customer.accountActivationUrl(id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.count = (cb)=> {shopify.customer.count().then(data => cb && cb(data)).catch(err => console.error(err))};
  self.create = (params, cb)=> {shopify.customer.create(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.delete = (id, cb)=> {shopify.customer.delete(id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.get = (id, params, cb)=> {shopify.customer.get(id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.list = (params, cb)=> {shopify.customer.list(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.search = (params, cb)=> {shopify.customer.search(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.update = (id, params, cb)=> {shopify.customer.update(id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  return self;
};
Shop.prototype.customerAddress = ()=>{
  var self = {resource:"customerAddress"};
  self.create = (customerId, params, cb)=> {shopify.customerAddress.create(customerId, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.default = (customerId, id, cb)=> {shopify.customerAddress.default(customerId, id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.delete = (customerId, id, cb)=> {shopify.customerAddress.delete(customerId, id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.get = (customerId, id, cb)=> {shopify.customerAddress.get(customerId, id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.list = (customerId, params, cb)=> {shopify.customerAddress.list(customerId, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.set = (customerId, params, cb)=> {shopify.customerAddress.set(customerId, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.update = (customerId, id, params, cb)=> {shopify.customerAddress.update(customerId, id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  return self;
};
Shop.prototype.customerSavedSearch = ()=>{
  var self = {resource:"customerSavedSearch"};
  self.count = (params, cb)=> {shopify.customerSavedSearch.count(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.create = (params, cb)=> {shopify.customerSavedSearch.create(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.customers = (id, params, cb)=> {shopify.customerSavedSearch.customers(id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.delete = (id, cb)=> {shopify.customerSavedSearch.delete(id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.get = (id, params, cb)=> {shopify.customerSavedSearch.get(id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.list = (params, cb)=> {shopify.customerSavedSearch.list(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.update = (id, params, cb)=> {shopify.customerSavedSearch.update(id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  return self;
};
Shop.prototype.discount = ()=>{
  var self = {resource:"discount"};
  self.create = (params, cb)=> {shopify.discount.create(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.delete = (id, cb)=> {shopify.discount.delete(id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.disable = (id, cb)=> {shopify.discount.disable(id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.enable = (id, cb)=> {shopify.discount.enable(id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.get = (id, cb)=> {shopify.discount.get(id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.list = (params, cb)=> {shopify.discount.list(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  return self;
};
Shop.prototype.event = ()=>{
  var self = {resource:"event"};
  self.count = (params, cb)=> {shopify.event.count(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.get = (id, params, cb)=> {shopify.event.get(id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.list = (params, cb)=> {shopify.event.list(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  return self;
};
Shop.prototype.fulfillment = ()=>{
  var self = {resource:"fulfillment"};
  self.cancel = (orderId, id, cb)=> {shopify.fulfillment.cancel(orderId, id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.complete = (orderId, id, cb)=> {shopify.fulfillment.complete(orderId, id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.count = (orderId, params, cb)=> {shopify.fulfillment.create(orderId, params).then(data => cb && cb(data)).catch(err => console.error(err))    }
  self.create = (orderId, params, cb)=> {shopify.fulfillment.create(orderId, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.get = (orderId, id, params, cb)=> {shopify.fulfillment.get(orderId, id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.list = (orderId, params, cb)=> {shopify.fulfillment.list(orderId, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.update = (orderId, id, params, cb)=> {shopify.fulfillment.update(orderId, id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  return self;
};
Shop.prototype.fulfillmentEvent = ()=>{
  var self = {resource:"fulfillmentEvent"};
  self.create = (orderId, fulfillmentId, params, cb)=> {shopify.fulfillmentEvent.create(orderId, fulfillmentId, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.delete = (orderId, fulfillmentId, id, cb)=> {shopify.fulfillmentEvent.delete(orderId, fulfillmentId, id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.get = (orderId, fulfillmentId, id, cb)=> {shopify.fulfillmentEvent.get(orderId, fulfillmentId, id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.list = (orderId, fulfillmentId, params, cb)=> {shopify.fulfillmentEvent.list(orderId, fulfillmentId, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.update = (orderId, fulfillmentId, id, params, cb)=> {shopify.fulfillmentEvent.update(orderId, fulfillmentId, id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  return self;
};
Shop.prototype.fulfillmentService = ()=>{
  var self = {resource:"fulfillmentService"};
  self.create = (params, cb)=> {shopify.fulfillmentService.create(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.delete = (id, cb)=> {shopify.fulfillmentService.delete(id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.get = (id, cb)=> {shopify.fulfillmentService.get(id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.list = (params, cb)=> {shopify.fulfillmentService.list(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.update = (id, params, cb)=> {shopify.fulfillmentService.update(id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  return self;
};
Shop.prototype.giftCard = ()=>{
  var self = {resource:"giftCard"};
  self.count = (params, cb)=> {shopify.giftCard.count(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.create = (params, cb)=> {shopify.giftCard.create(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.disable = (id, cb)=> {shopify.giftCard.disable(id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.get = (id, cb)=> {shopify.giftCard.get(id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.list = (params, cb)=> {shopify.giftCard.list(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.search = (params, cb)=> {shopify.giftCard.search(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.update = (id, params, cb)=> {shopify.giftCard.update(id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  return self;
};
Shop.prototype.location = ()=>{
  var self = {resource:"location"};
  self.get = (id, cb)=> {shopify.location.get(id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.list = (cb)=> {shopify.location.list().then(data => cb && cb(data)).catch(err => console.error(err))};
  return self;
};
Shop.prototype.metafield = ()=>{
  var self = {resource:"metafield"};
  self.count = (params, cb)=> {shopify.metafield.count(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.create = (params, cb)=> {shopify.metafield.create(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.delete = (id, cb)=> {shopify.metafield.delete(id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.get = (id, params, cb)=> {shopify.metafield.get(id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.list = (params, cb)=> {shopify.metafield.list(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.update = (id, params, cb)=> {shopify.metafield.update(id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  return self;
};
Shop.prototype.order = ()=>{
  var self = {resource:"order"};
  self.cancel = (id, params, cb)=> {shopify.order.cancel(id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.close = (id, cb)=> {shopify.order.close(id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.count = (params, cb)=> {shopify.order.count(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.create = (params, cb)=> {shopify.order.create(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.delete = (id, cb)=> {shopify.order.delete(id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.get = (id, params, cb)=> {shopify.order.get(id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.list = (params, cb)=> {shopify.order.list(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.open = (id, cb)=> {shopify.order.open(id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.update = (id, params, cb)=> {shopify.order.update(id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  return self;
};
Shop.prototype.orderRisk = ()=>{
  var self = {resource:"orderRisk"};
  self.create = (orderId, params, cb)=> {shopify.orderRisk.create(orderId, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.delete = (orderId, id, cb)=> {shopify.orderRisk.delete(orderId, id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.get = (orderId, id, cb)=> {shopify.orderRisk.get(orderId, id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.list = (orderId, cb)=> {shopify.orderRisk.list(orderId).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.update = (orderId, id, params, cb)=> {shopify.orderRisk.update(orderId, id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  return self;
};
Shop.prototype.page = ()=>{
  var self = {resource:"page"};
  self.count = (params, cb)=> {shopify.page.count(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.create = (params, cb)=> {shopify.page.create(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.delete = (id, cb)=> {shopify.page.delete(id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.get = (id, params, cb)=> {shopify.page.get(id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.list = (params, cb)=> {shopify.page.list(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.update = (id, params, cb)=> {shopify.page.update(id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  return self;
};
Shop.prototype.policy = ()=>{
  var self = {resource:"policy"};
  self.list = (params, cb)=> {shopify.policy.list(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  return self;
};
Shop.prototype.product = ()=>{
  var self = {resource:"product"};
  self.count = (params, cb)=> {shopify.product.count(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.create = (params, cb)=> {shopify.product.create(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.delete = (id, cb)=> {shopify.product.delete(id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.get = (id, params, cb)=> {shopify.product.get(id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.list = (params, cb)=> {shopify.product.list(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.update = (id, params, cb)=> {shopify.product.update(id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  return self;
};
Shop.prototype.productImage = ()=>{
  var self = {resource:"productImage"};
  self.count = (productId, params, cb)=> {shopify.productImage.count(productId, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.create = (productId, params, cb)=> {shopify.productImage.create(productId, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.delete = (productId, id, cb)=> {shopify.productImage.delete(productId, id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.get = (productId, id, params, cb)=> {shopify.productImage.get(productId, id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.list = (productId, params, cb)=> {shopify.productImage.list(productId, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.update = (productId, id, params, cb)=> {shopify.productImage.update(productId, id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  return self;
};
Shop.prototype.productVariant = ()=>{
  var self = {resource:"productVariant"};
  self.count = (productId, cb)=> {shopify.productVariant.count(productId).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.create = (productId, params, cb)=> {shopify.productVariant.create(productId, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.delete = (productId, id, cb)=> {shopify.productVariant.delete(productId, id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.get = (id, params, cb)=> {shopify.productVariant.get(id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.list = (productId, params, cb)=> {shopify.productVariant.list(productId, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.update = (id, params, cb)=> {shopify.productVariant.update(id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  return self;
};
Shop.prototype.province = ()=>{
  var self = {resource:"province"};
  self.count = (countryId, params, cb)=> {shopify.province.count(countryId, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.get = (countryId, id, params, cb)=> {shopify.province.get(countryId, id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.list = (countryId, params, cb)=> {shopify.province.list(countryId, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.update = (countryId, id, params, cb)=> {shopify.province.update(countryId, id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  return self;
};
Shop.prototype.recurringApplicationCharge = ()=>{
  var self = {resource:"recurringApplicationCharge"};
  self.activate = (id, params, cb)=> {shopify.recurringApplicationCharge.activate(id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.create = (params, cb)=> {shopify.recurringApplicationCharge.create(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.delete = (id, cb)=> {shopify.recurringApplicationCharge.delete(id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.get = (id, params, cb)=> {shopify.recurringApplicationCharge.get(id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.list = (params, cb)=> {shopify.recurringApplicationCharge.list(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  return self;
};
Shop.prototype.redirect = ()=>{
  var self = {resource:"redirect"};
  self.count = (params, cb)=> {shopify.redirect.count(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.create = (params, cb)=> {shopify.redirect.create(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.delete = (id, cb)=> {shopify.redirect.delete(id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.get = (id, params, cb)=> {shopify.redirect.get(id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.list = (params, cb)=> {shopify.redirect.list(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.update = (id, params, cb)=> {shopify.redirect.update(id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  return self;
};
Shop.prototype.refund = ()=>{
  var self = {resource:"refund"};
  self.get = (orderId, id, params, cb)=> {shopify.refund.get(orderId, id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  return self;
};
Shop.prototype.scriptTag = ()=>{
  var self = {resource:"scriptTag"};
  self.count = (params, cb)=> {shopify.scriptTag.count(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.create = (params, cb)=> {shopify.scriptTag.create(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.delete = (id, cb)=> {shopify.scriptTag.delete(id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.get = (id, params, cb)=> {shopify.scriptTag.get(id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.list = (params, cb)=> {shopify.scriptTag.list(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.update = (id, params, cb)=> {shopify.scriptTag.update(id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  return self;
};
Shop.prototype.shippingZone = ()=>{
  var self = {resource:"shippingZone"};
  self.list = (params, cb)=> {shopify.shippingZone.list(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  return self;
};
Shop.prototype.shop = ()=>{
  var self = {resource:"shop"};
  self.get = (params, cb)=> {shopify.shop.get(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  return self;
};
Shop.prototype.smartCollection = ()=>{
  var self = {resource:"smartCollection"};
  self.count = (params, cb)=> {shopify.smartCollection.count(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.create = (params, cb)=> {shopify.smartCollection.create(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.delete = (id, cb)=> {shopify.smartCollection.delete(id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.get = (id, params, cb)=> {shopify.smartCollection.get(id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.list = (params, cb)=> {shopify.smartCollection.list(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.order = (id, params, cb)=> {shopify.smartCollection.order(id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.update = (id, params, cb)=> {shopify.smartCollection.update(id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  return self;
};
Shop.prototype.theme = ()=>{
  var self = {resource:"theme"};
  self.create = (params, cb)=> {shopify.theme.create(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.delete = (id, cb)=> {shopify.theme.delete(id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.get = (id, params, cb)=> {shopify.theme.get(id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.list = (params, cb)=> {shopify.theme.list(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.update = (id, params, cb)=> {shopify.theme.update(id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  return self;
};
Shop.prototype.transaction = ()=>{
  var self = {resource:"transaction"};
  self.count = (orderId, cb)=> {shopify.transaction.count(orderId).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.create = (orderId, params, cb)=> {shopify.transaction.create(orderId, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.get = (orderId, id, params, cb)=> {shopify.transaction.get(orderId, id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.list = (orderId, params, cb)=> {shopify.transaction.list(orderId, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  return self;
};
Shop.prototype.usageCharge = ()=>{
  var self = {resource:"usageCharge"};
  self.create = (recurringApplicationChargeId, params, cb)=> {shopify.usageCharge.create(recurringApplicationChargeId, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.get = (recurringApplicationChargeId, id, params, cb)=> {shopify.usageCharge.get(recurringApplicationChargeId, id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.list = (recurringApplicationChargeId, params, cb)=> {shopify.usageCharge.list(recurringApplicationChargeId, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  return self;
};
Shop.prototype.user = ()=>{
  var self = {resource:"user"};
  self.current = (cb)=> {shopify.user.current().then(data => cb && cb(data)).catch(err => console.error(err))};
  self.get = (id, cb)=> {shopify.user.get(id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.list = (cb)=> {shopify.user.list().then(data => cb && cb(data)).catch(err => console.error(err))};
  return self;
};
Shop.prototype.webhook = ()=>{
  var self = {resource:"webhook"};
  self.count = (params, cb)=> {shopify.webhook.count(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.create = (params, cb)=> {shopify.webhook.create(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.delete = (id, cb)=> {shopify.webhook.delete(id).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.get = (id, params, cb)=> {shopify.webhook.get(id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.list = (params, cb)=> {shopify.webhook.list(params).then(data => cb && cb(data)).catch(err => console.error(err))};
  self.update = (id, params, cb)=> {shopify.webhook.update(id, params).then(data => cb && cb(data)).catch(err => console.error(err))};
  return self;
};
module.exports = Shop;

// var a = new Shop().webhook();
//
// a.list({},console.log);
