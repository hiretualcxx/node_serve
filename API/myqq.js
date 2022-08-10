var outapi = {};
outapi.enter = function(req,res){
    console.log({query:req.query,method:req.method})
    res.header('Access-Control-Allow-Origin',"*");
    res.status(200);
    res.send('ok')
}
module.exports = outapi;