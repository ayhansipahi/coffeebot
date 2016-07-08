/**
 * Using Rails-like standard naming convention for endpoints.
 */

'use strict';
var crypto = require("crypto");
var config = require("../../vendors/shopify.config");

//
// import _ from 'lodash';
// import Shopifyhook from './shopify.model';
//
// function respondWithResult(res, statusCode) {
//   statusCode = statusCode || 200;
//   return function(entity) {
//     if (entity) {
//       res.status(statusCode).json(entity);
//     }
//   };
// }
//
// function saveUpdates(updates) {
//   return function(entity) {
//     var updated = _.merge(entity, updates);
//     return updated.save()
//       .then(updated => {
//         return updated;
//       });
//   };
// }
//
// function removeEntity(res) {
//   return function(entity) {
//     if (entity) {
//       return entity.remove()
//         .then(() => {
//           res.status(204).end();
//         });
//     }
//   };
// }
//
// function handleEntityNotFound(res) {
//   return function(entity) {
//     if (!entity) {
//       res.status(404).end();
//       return null;
//     }
//     return entity;
//   };
// }
//
// function handleError(res, statusCode) {
//   statusCode = statusCode || 500;
//   return function(err) {
//     res.status(statusCode).send(err);
//   };
// }
//
// // Gets a list of Shopifyhooks
// export function index(req, res) {
//   return Shopifyhook.find().exec()
//     .then(respondWithResult(res))
//     .catch(handleError(res));
// }
//
// // Gets a single Shopifyhook from the DB
// export function show(req, res) {
//   return Shopifyhook.findById(req.params.id).exec()
//     .then(handleEntityNotFound(res))
//     .then(respondWithResult(res))
//     .catch(handleError(res));
// }
//
// // Creates a new Shopifyhook in the DB
// export function create(req, res) {
//   return Shopifyhook.create(req.body)
//     .then(respondWithResult(res, 201))
//     .catch(handleError(res));
// }
//
// // Updates an existing Shopifyhook in the DB
// export function update(req, res) {
//   if (req.body._id) {
//     delete req.body._id;
//   }
//   return Shopifyhook.findById(req.params.id).exec()
//     .then(handleEntityNotFound(res))
//     .then(saveUpdates(req.body))
//     .then(respondWithResult(res))
//     .catch(handleError(res));
// }
//
// // Deletes a Shopifyhook from the DB
// export function destroy(req, res) {
//   return Shopifyhook.findById(req.params.id).exec()
//     .then(handleEntityNotFound(res))
//     .then(removeEntity(res))
//     .catch(handleError(res));
// }
//


// Checks valid web hook request
export function check(req, res, next) {
  var hmac = crypto.createHmac('sha256', config.SHOPIFY_SECRET)
    .update(req.rawBody)
    .digest('base64');
  if (req.headers["x-shopify-hmac-sha256"] == hmac){
    next();
  } else {
    res.status(403).send('Lost ?');
  }
}


// identify request
export function identify(req, res, next) {
  var a = req.headers["x-shopify-topic"].split("/");
  req.action = {
    act: a[0],
    type: a[1]
  };
  next();
}

// do action
export function action(req, res) {
  var file = `./actions/${req.action.act}.js`;
  var action = require(file);
  return action[req.action.type](req,res);
}

