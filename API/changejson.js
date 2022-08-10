const { json } = require('express');
const pageData = require('./blogjson');
const blogtags = require('./test');
const fs = require('fs');

var outapi = {};
outapi.enter = function(req,res){

const blogarr = pageData.blog_data;
const blogtagarr = blogtags;


var blogd = blogarr.map((item)=>{

    for(var i=0;i<blogtagarr.length;i++){
        var url = blogtagarr[i].URL.split('https://hiretual.com')[1];
        if(item.url == url){
            var tags = blogtagarr[i].Tag.split(',');
            tags = tags.map((item)=>{
                return item.trim();
            })
            item.tag =tags;
            return item;
        }else if(i == (blogtagarr.length-1)){
            item.tag = [];
            return item;
        }
    };

})
// blogd = JSON.parse(blogd);
blogd = JSON.stringify(blogd);
fs.appendFile(`./dataFile/blogtag.js`, blogd , (err) => {
    res.status(200);
    if (err) {
        res.send('failed');
        console.log(err)
    }else{
        res.send('success');
    }
  });
}

module.exports = outapi;