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

module.exports = {
  create:_create,
  update:_update,
  delete:_delete
};
