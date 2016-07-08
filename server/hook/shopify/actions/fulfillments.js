var create = function(req,res){
  console.log("create");
  console.log(req.body,req.headers);
  return res.send("ok");
};

var update = function(req,res){
  console.log("update");
  console.log(req.body,req.headers);
  return res.send("ok");
};

module.exports = {
  create:create,
  update:update
};
