'use strict';

import mongoose from 'mongoose';

var smsSchema = new mongoose.Schema({ SmsSid: String,
    SmsStatus: String,
    Body: String,
    MessageStatus:String,
    To: String,
    MessageSid: String,
    AccountSid: String,
    From: String,
    ApiVersion: String
  }, { strict: false ,timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

export default mongoose.model('sms', smsSchema);
