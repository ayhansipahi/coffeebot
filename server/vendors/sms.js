/**
 * twilio
 * this is a connector for twilio services
 * twilio uses web hooks to inform recieved messages
 * with twilio service we will send sms to user number
 **/
var xmlescape = require("xml-escape");


var config = require("./sms.config");
var twilio = require("twilio")(config.accountSid,config.authToken);

function sms() {
};
/**
 *
 * @param {string} to number to send
 * @param {string} text message body
 * @param {function} cb callback function
 */
sms.prototype.send = function (to, text, cb) {
  twilio.messages.create({
    to: to,
    from: config.from,
    body: text
  }, function (err, message) {
    console.log(err);
    cb && cb(message);
  });
};



// for replying sms hooks
sms.prototype.reply = function (req, res, message, cb) {
  var send = "";
  if (message.length > 160) {
    var messages = [],
      messageArray = message.split(" "),
      msg = "";
    for (var i = 0; i < messageArray.length; i++) {
      var pre = i === 0 ? "" : " ";
      var tmp = msg + pre + messageArray[i];
      if (tmp.length > 159) {
        messages.push(msg);
        msg = messageArray[i];
      } else {
        msg = tmp
      }
    }
    for (var i = 0; i < messages.length; i++) {
      send += "<Message>" + xmlescape(messages[i]) + "</Message>";
    }
  }
  else {
    send = "<Message>" + xmlescape(message) + "</Message>"
  }
  res.setHeader("Content-Type", "application/xml");
  res.status(200).end("<Response>" + send + "</Response>");
  cb&&cb();
};



/*
var message = new sms();
message.send("+905536070700","bi kilo pattis:)",console.log);
*/
//message.reply(null,null,"a",console.log);



sms.prototype.check = function(req){
  return req.headers["user-agent"] == "TwilioProxy/1.1"
};


module.exports = sms;
