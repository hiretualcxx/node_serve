var express = require('express');
var fs = require('fs');
var router = express.Router();
const root = 'D:/node/node_serve/views';
/* GET home page. */

router.get('*', function (req, res, next) {
  // console.log({url:req.url,type:req.method,params:req.params,query:req.query})

  var par = req.params[0];
  var fill_path;
  switch (req.url) {
    case '/':
      res.status(200).
      set('Content-Type', 'text/html').
      sendFile('/index.html', {
        root
      });
      break;
    default:
      if(par.indexOf('.html')>0){
        fill_path = par;
      }else{
        fill_path = `${par}.html`
      }
      // 检查当前目录中是否存在该文件。
      fs.access(`${root}${fill_path}`, fs.constants.F_OK, (err) => {
   
        if (!err) {
          res.status(200).
          set('Content-Type', 'text/html').
          sendFile(fill_path, {
            root
          });
        } else {
          console.log(err);
          res.status(301).redirect('/page/undefindpage');
        }
      });
  }
});
module.exports = router;
