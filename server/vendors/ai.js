/**
 * api.ai
 * this service is great for analysis of text and machine learning
 * we will send user message to this service and recieve reply.
 *
 *
 * we will get web hooks when an action is complete
 * this web hooks will tell us users intend.
 * and do required action
 *
 */
var util = require('util');
var http = require('https');


var version = '20150910'
var language = 'en'
var hostname = 'api.api.ai'
var endpoint = '/v1/'
var defaultSource = 'node'


function ai(clientAccessToken) {
  var self = this;

  self.language = language;

  self.clientAccessToken = clientAccessToken;

  self.hostname = hostname;
  self.version = version;

  self.endpoint = endpoint;
  self.requestSource = defaultSource;
}

ai.prototype.query = function (query, options) {
  var self = this;
  var opt = options || {};

  return new TextRequest(self, query, opt);
};

ai.prototype.getEntity = function () {

};

ai.prototype.setEntity = function () {

};


var EventEmitter = require('events').EventEmitter;

util.inherits(Request, EventEmitter);

function Request(application, options) {
  var self = this;

  self.clientAccessToken = application.clientAccessToken;

  self.hostname = application.hostname;

  self.endpoint = endpoint;
  self.requestSource = application.requestSource;

  var requestOptions = self._requestOptions(),
    request = http.request(requestOptions, function (response) {
    var body = '';

    response.on('data', function (chunk) {
      body += chunk;
    });

    response.on('end', function () {
      if (response.statusCode >= 200 && response.statusCode <= 299) {
        try {
          self.emit('response', JSON.parse(body));
        } catch (error) {
          self.emit('error', error);
        }
      } else {
        var error = 'Server response error with status code: ' + response.statusCode + '\n' + body;
        self.emit('error', error);
      }
    });
  });

  request.on('error', function (error) {
    self.emit('error', error);
  });

  self.request = request;
}

Request.prototype._headers = function () {
  var self = this;

  return {
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + self.clientAccessToken,
    'api-request-source': self.requestSource
  };
};

Request.prototype._requestOptions = function () {
  var self = this;

  return {
    hostname: self.hostname,
    headers: self._headers()
  };
};

Request.prototype.write = function (chunk) {
  this.request.write(chunk);
};

Request.prototype.end = function () {
  this.request.end();
};


util.inherits(QueryRequest, Request);

function QueryRequest(application, options) {
  var self = this;

  self.language = application.language;

  if ('timezone' in options) {
    self.timezone = options.timezone;
  }

  if ('resetContexts' in options) {
    self.resetContexts = options.resetContexts;
  }

  if ('contexts' in options) {
    self.contexts = options.contexts;
  }

  if ('entities' in options) {
    self.entities = options.entities;
  }

  if ('sessionId' in options) {
    self.sessionId = options.sessionId;
  }

  if ('version' in options) {
    self.version = options.version;
  }

  if ('requestSource' in application) {
    self.requestSource = application.requestSource;
  }

  QueryRequest.super_.apply(this, arguments);
}

QueryRequest.prototype._requestOptions = function () {
  var self = this;

  var path = 'query' + '?v=' + version;

  var request_options = QueryRequest.super_.prototype._requestOptions.apply(this, arguments);

  request_options['path'] = endpoint + path;
  request_options['method'] = 'POST';

  return request_options
};

QueryRequest.prototype._jsonRequestParameters = function () {
  var self = this;

  var json = {
    'lang': self.language,
    'timezone': self.timezone
  };

  if ('resetContexts' in self) {
    json['resetContexts'] = self.resetContexts;
  }

  if ('contexts' in self) {
    json['contexts'] = self.contexts;
  }

  if ('entities' in self) {
    json['entities'] = self.entities;
  }

  if ('sessionId' in self) {
    json['sessionId'] = self.sessionId;
  }

  return json;
};


util.inherits(TextRequest, QueryRequest);

function TextRequest(application, query, options) {
  TextRequest.super_.apply(this, [application, options]);

  this.query = query;
}

TextRequest.prototype._headers = function () {
  var headers = TextRequest.super_.prototype._headers.apply(this, arguments);

  headers['Content-Type'] = 'application/json; charset=utf-8';

  return headers;
};

TextRequest.prototype._jsonRequestParameters = function () {
  var self = this;

  var json = TextRequest.super_.prototype._jsonRequestParameters.apply(this, arguments);

  json['query'] = self.query;

  return json;
};

TextRequest.prototype.end = function () {
  var self = this;

  self.write(JSON.stringify(self._jsonRequestParameters()));

  TextRequest.super_.prototype.end.apply(this, arguments);
};


util.inherits(UserEntitiesRequest, Request);

function UserEntitiesRequest(application, user_entities, options) {
  var self = this;

  self.user_entities = user_entities

  UserEntitiesRequest.super_.apply(this, [application, options]);
}

UserEntitiesRequest.prototype._headers = function () {
  var headers = UserEntitiesRequest.super_.prototype._headers.apply(this, arguments);

  headers['Content-Type'] = 'application/json; charset=utf-8';

  return headers;
};

UserEntitiesRequest.prototype._requestOptions = function () {
  var request_options = UserEntitiesRequest.super_.prototype._requestOptions.apply(this, arguments);

  request_options.path = this.endpoint + 'userEntities'
  request_options.method = 'POST'

  return request_options
};

UserEntitiesRequest.prototype.end = function () {
  var self = this;

  self.write(JSON.stringify(self.user_entities));

  UserEntitiesRequest.super_.prototype.end.apply(this, arguments);
};

/* sample code

var a = new ai("c63c7c945ad54df28e3fac4372ac871d");

var r = a.query("i want coffee", {sessionId: 654984654984});

r.on('response', function (response) {
  console.log(response);
});

r.on('error', function (error) {
  return console.error(error);
});
r.end();
*/
