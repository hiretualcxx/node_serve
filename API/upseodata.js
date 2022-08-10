const { json } = require('express');
const fs = require('fs');
var outapi = {};
outapi.enter = function(req,res){
    req.on('data',(d)=>{
        var filed = JSON.parse(d);
          var date = new Date();
          var date_y = date.getFullYear();
          var date_m = date.getMonth()+1;
          var date_d = date.getDate();
          var filename = `data_${date_y}-${date_m}-${date_d}`;

        fs.appendFile(`./dataFile/${filename}.js`, `var d_${date_y}_${date_m}_${date_d}=${JSON.stringify(filed)};\n` , (err) => {
            res.status(200);
            if (err) {
                res.send('failed');
                console.log(err)
            }else{
                res.send('success');
            }
          });
    })
   
}
module.exports = outapi;