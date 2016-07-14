
import Customer from '../models/customer.model';
import Request from './request.helper';

exports.get = (req,res,dir)=>{

  var phone = dir === "to"? req.body.To : req.body.From;
  function check_customer(req, res) {
    return Customer.findOne({
      'default_address.phone': phone
    }).exec().catch(Request.handleError(res));
  }


  function create_customer(req, res) {
    return function(entity) {
      if (!entity && dir === "from") {
        var customer = {};
        customer.state = req.body.FromState;
        customer.default_address = {};
        customer.default_address.zip = req.body.FromZip;
        customer.default_address.province = req.body.FromState;
        customer.default_address.city = req.body.FromCity;
        customer.default_address.country_code = req.body.FromCountry;
        customer.default_address.phone = req.body.From;
        return Customer.create(customer)
          .catch(Request.handleError(res));
      }
      return entity;
    };
  }

  return check_customer(req, res)
    .then(create_customer(req, res))
}


exports.addSms = (req,res,data,smstype)=>{
  console.log(data)
  return Customer.findByIdAndUpdate(
    data._id,
    {$push: {'sms': req.body}}
  ).exec().then(console.log).catch(Request.handleError(res));
}

exports.updateSms = (req,res,data,smstype)=>{
  console.log(data)
  return Customer.findOneAndUpdate(
    {
      '_id' : data._id ,
      'sms.SmsSid':req.body.SmsSid
    },
    {'$set': {
      'sms.$.SmsStatus': req.body.SmsStatus,
      'sms.$.MessageStatus': req.body.MessageStatus
    }},
    {$push: {'sms': req.body}}
  ).exec().then(console.log).catch(Request.handleError(res));
}



//
// return Sms.findOne({
//   'SmsSid': req.body.SmsSid
// }).exec().then(helper.saveUpdates(req.body)).then(helper.respondWithResult(
//   res)).catch(helper.handleError(res));
//
// var updated = _.merge(entity, updates);
// return updated.save().then(updated => {
//     return updated;
// });
