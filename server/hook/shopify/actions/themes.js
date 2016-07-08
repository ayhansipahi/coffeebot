var publish = function(req,res){
  console.log("publish");
  console.log(req.body,req.headers);
  return res.send("ok");
};

module.exports = {
  publish:publish
};
