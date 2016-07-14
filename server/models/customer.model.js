'use strict';

import mongoose from 'mongoose';

var customerSchema = new mongoose.Schema({
      "id": Number,
      "email": String,
      "accepts_marketing": Boolean,
      "created_at": Date,
      "updated_at": Date,
      "first_name": String,
      "last_name": String,
      "orders_count": Number,
      "state": String,
      "total_spent": String,
      "last_order_id": Number,
      "note": String,
      "verified_email": Boolean,
      "multipass_identifier": String,
      "tax_exempt": Boolean,
      "tags": String,
      "last_order_name": String,
      "default_address": {
        "id": Number,
        "first_name": String,
        "last_name": String,
        "company": String,
        "address1": String,
        "address2": String,
        "city": String,
        "province": String,
        "country": String,
        "zip": String,
        "phone": String,
        "name": String,
        "province_code": String,
        "country_code": String,
        "country_name": String,
        "default": Boolean
      },
      "addresses": [
        {
          "id": Number,
          "first_name": String,
          "last_name": String,
          "company": String,
          "address1": String,
          "address2": String,
          "city": String,
          "province": String,
          "country": String,
          "zip": String,
          "phone": String,
          "name": String,
          "province_code": String,
          "country_code": String,
          "country_name": String,
          "default": Boolean
        }
      ],
      "sms":[
        {
          AccountSid : String,
          ApiVersion : String,
          Body : String,
          From : String,
          FromCity : String,
          FromCountry : String,
          FromState : String,
          FromZip : String,
          MessageSid : String,
          MessageStatus : String,
          MessagingServiceSid : String,
          NumMedia : String,
          NumSegments : String,
          SmsMessageSid : String,
          SmsSid : String,
          SmsStatus : String,
          To : String,
          ToCity : String,
          ToCountry : String,
          ToState : String,
          ToZip : String
        }
      ]
    },
    { strict: false,
      timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    }
  );

export default mongoose.model('customer', customerSchema);
