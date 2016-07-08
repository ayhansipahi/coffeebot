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


function shop() {};

shop.prototype.product = function() {
    function _count() {
        shopify.product.count(3800276551)
            .then(data => console.log(data))
            .catch(err => console.error(err))
    }

    function _create() {
        shopify.product.create(3800276551)
            .then(data => console.log(data))
            .catch(err => console.error(err))
    }

    function _delete() {
        shopify.product.delete(3800276551)
            .then(data => console.log(data))
            .catch(err => console.error(err))
    }

    function _get() {
        shopify.product.get(3800276551)
            .then(data => console.log(data))
            .catch(err => console.error(err))
    }

    function _list() {
        shopify.product.list(3800276551)
            .then(data => console.log(data))
            .catch(err => console.error(err))
    }

    function _update() {
        shopify.product.update(3800276551)
            .then(data => console.log(data))
            .catch(err => console.error(err))
    }

    return {
        count: _count,
        create: _create,
        delete: _delete,
        get: _get,
        list: _list,
        update: _update
    };
};



module.exports = shop;


var a = new shop();
a.product().list();
