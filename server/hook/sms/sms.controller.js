'use strict';

/**
 * Using Rails-like standard naming convention for endpoints.
 */



var sms = require('../../vendors/sms');
sms = new sms();

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}
function error(res){
  res.status(500).send("error");
}


function sent(req,res){

  res.send("sent");
  /**
   * send
   { SmsSid: 'SM665f437af0534d86b6de6013b1456151',
     SmsStatus: 'sent',
     Body: 'We have Bali Blue Moon Coffee',
     MessageStatus: 'sent',
     To: '+905536070700',
     MessageSid: 'SM665f437af0534d86b6de6013b1456151',
     AccountSid: 'AC34c7e0750ad5db45ae90b3a858d7d2af',
     From: '+13476958389',
     ApiVersion: '2010-04-01'
    }
   */
}

function delivered(req,res){

  res.send("delivered");
  /**
   * deliver
   { SmsSid: 'SM665f437af0534d86b6de6013b1456151',
    SmsStatus: 'delivered',
    Body: 'We have Bali Blue Moon Coffee',
    MessageStatus: 'delivered',
    To: '+905536070700',
    MessageSid: 'SM665f437af0534d86b6de6013b1456151',
    AccountSid: 'AC34c7e0750ad5db45ae90b3a858d7d2af',
    From: '+13476958389',
    ApiVersion: '2010-04-01'
   }
   */
}

function received(req,res){
  var text = req.body.Body;
  return sms.reply(req,res,text)

  /**
   * recieve
   { ToCountry: 'US',
     ToState: 'NY',
     SmsMessageSid: 'SM2f192fd6e91bd7ea9ba28bbfb6dacda3',
     NumMedia: '0',
     ToCity: 'NEW YORK',
     FromZip: '',
     SmsSid: 'SM2f192fd6e91bd7ea9ba28bbfb6dacda3',
     FromState: '',
     SmsStatus: 'received',
     FromCity: '',
     Body: 'Ömrümü yedin',
     FromCountry: 'TR',
     To: '+13476958389',
     MessagingServiceSid: 'MGb0bd9a61ce4bc7eb2d5301e3c57e54e2',
     ToZip: '10011',
     NumSegments: '1',
     MessageSid: 'SM2f192fd6e91bd7ea9ba28bbfb6dacda3',
     AccountSid: 'AC34c7e0750ad5db45ae90b3a858d7d2af',
     From: '+905536070700',
     ApiVersion: '2010-04-01'
    }
   */
}

// Creates a new Smshook in the DB
export function create(req, res) {
  console.log(req.body);

  switch(req.body.SmsStatus){
    case "sent": sent(req,res); break;
    case "delivered": delivered(req,res); break;
    case "received": received(req,res); break;
    default: error(res);
  }

}



// Checks valid web hook request
export function check(req, res,next) {
  if (sms.check(req)){
    next();
  } else {
    res.status(403).send('Lost ?');
  }
}

