const { request } = require("express");
const cmd = require('node-cmd');
cp = require('child_process');
cp.exec('start file:///D:/files/work_file/日常工作文件/seocheck/reqseo_v2.html')
// cp.exec('start file:///D:/node/readPage/startme.bat')
const app = require('./app.js');
const readcookie = require('./public/javascripts/readcookie.js')
// app.get('*',(req,res)=>{
//     res.cookie('c_key1',+new Date(),{ expires: new Date(Date.now() + 60000)});
//     // console.log(req.headers.cookie);
//     res.status(200).
//     set('Content-Type', 'text/html').
//     sendFile(__dirname+'/views/index.html');
// });

// app.listen(8080,'127.0.0.28')
app.listen(8080,'192.168.100.105')