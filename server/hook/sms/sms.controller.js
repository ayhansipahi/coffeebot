'use strict';
/**
 * Using Rails-like standard naming convention for endpoints.
 */
import _ from 'lodash';
import Customer from '../../helpers/customer.helper';
import helper from '../../helpers/request.helper'

var Sms = require('../../vendors/sms');
var sms = new Sms();


function sent(req, res) {
  console.log(req.body);
  return Customer.get(req,res,"to").then(data=> {
      return Customer.addSms(req,res,data);
}).then((text)=>{
    res.send("ok");
}).catch(helper.handleError(res));
}

function delivered(req, res) {
  console.log(req.body);
  return Customer.get(req,res,"to").then(data=> {
      return Customer.updateSms(req,res,data);
  }).then((text)=>{
      res.send("ok");
  }).catch(helper.handleError(res));

}

function received(req, res) {
  return Customer.get(req,res,"from").then(data=> {
      return Customer.addSms(req,res,data,"recieved");
}).then((text)=>{
    text = text || req.body.Body;
  sms.reply(req, res, text);
}).catch(helper.handleError(res))
}



export function create(req, res) {
  switch (req.body.SmsStatus) {
    case "sent":
      sent(req, res);
      break;
    case "delivered":
      delivered(req, res);
      break;
    case "received":
      received(req, res);
      break;
    default:
      helper.error(res);
  }
}
// Checks valid web hook request
export function check(req, res, next) {
  if (sms.check(req)) {
    next();
  } else {
    res.status(403).send('Lost ?');
  }
}
