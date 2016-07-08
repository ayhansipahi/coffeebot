var _create = function(req,res){
  console.log("create");
  console.log(req.body,req.headers);
  return res.send("ok");
};

var _update = function(req,res){
  console.log("update");
  console.log(req.body,req.headers);
  return res.send("ok");
};

var _delete = function(req,res){
  console.log("delete");
  console.log(req.body,req.headers);
  return res.send("ok");
};

var _enable = function(req,res){
  console.log("enable");
  console.log(req.body,req.headers);
  return res.send("ok");
};

var _disable = function(req,res){
  console.log("disable");
  console.log(req.body,req.headers);
  return res.send("ok");
};

module.exports = {
  create:_create,
  update:_update,
  delete:_delete,
  enable:_enable,
  disable:_disable
};
