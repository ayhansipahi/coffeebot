var update = function(req,res){
  console.log("update");
  console.log(req.body,req.headers);
  return res.send("ok");
};

module.exports = {
  update:update
};
