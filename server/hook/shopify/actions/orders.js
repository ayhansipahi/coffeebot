var _cancelled = function(req,res){
  console.log("cancelled");
  console.log(req.body,req.headers);
  return res.send("ok");
};

var _create = function(req,res){
  console.log("create");
  console.log(req.body,req.headers);
  return res.send("ok");
};

var _delete = function(req,res){
  console.log("delete");
  console.log(req.body,req.headers);
  return res.send("ok");
};

var _fulfilled = function(req,res){
  console.log("fulfilled");
  console.log(req.body,req.headers);
  return res.send("ok");
};

var _paid = function(req,res){
  console.log("paid");
  console.log(req.body,req.headers);
  return res.send("ok");
};
var _updated = function(req,res){
  console.log("updated");
  console.log(req.body,req.headers);
  return res.send("ok");
};

module.exports = {
  cancelled:_cancelled,
  create:_create,
  delete:_delete,
  fulfilled:_fulfilled,
  paid:_paid,
  updated:_updated
};
