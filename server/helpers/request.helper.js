module.exports = {
  saveUpdates: function(updates) {
    return function(entity) {
      var updated = _.merge(entity, updates);
      return updated.save().then(updated => {
          return updated;
    });
    };
  },
  respondWithResult: function(res, statusCode) {
    statusCode = statusCode || 200;
    return function(entity) {
      if (entity) {
        res.status(statusCode).json(entity);
      }
    };
  },
  handleError: function(res, statusCode) {

    statusCode = statusCode || 500;
    return function(err) {
      console.log("err",err);
      res.status(statusCode).send(err);
    };
  },
  error: function(res) {
    res.status(500).send("error");
  }
};
