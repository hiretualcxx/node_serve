var express = require('express');
var router = express.Router();
var myqq = require('../API/myqq');
var changejson = require('../API/changejson');
var test = require('../API/test');
var upseodata = require('../API/upseodata');
/* GET home page. */

router.get('*', function(req, res, next) {
  // console.log({url:req.url,type:req.method,params:req.params,query:req.query})
  var par = req.params[0];

  switch(par){
    case '/':
      res.status(404).send({"api":null,"Status":404})
      break;
      case '/changejson':
        changejson.enter(req,res);
      break;

    case '/myqq':
      myqq.enter(req,res);
      break;
      case '/boolean2':
        res.header("Access-Control-Allow-Origin", '*');
        res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
   
        res.status(200).send(
          {"data": {
            "mandatorySkills": [
              "002security",
              "information security",
              "it management",
              "networking",
              "integration",
              "disaster recovery",
              "information technology",
              "it operations",
              "it service management",
              "itil",
              "infrastructure",
              "it strategy"
            ],
            "relatedSkills": [
              "security",
              "information security",
              "it management",
              "networking",
              "integration",
              "disaster recovery",
              "information technology",
              "it operations",
              "it service management",
              "itil",
              "infrastructure",
              "it strategy"
            ],
            "titles": [
              "information technology",
              "director of it",
              "it manager",
              "director of information technology",
              "technical support",
              "it director",
              "it project manager",
              "chief information officer",
              "cio",
              "information technology manager",
              "manager it",
              "infrastructure project manager",
              "it consultant"
            ]
          }}
        );
        break;
    case '/test':
    test.enter(req,res);
      default:
        res.status(301).redirect('/api/');
        
  }
});

router.post('*', function(req, res, next) {
  // console.log({url:req.url,type:req.method,params:req.params,query:req.query})
  var par = req.params[0];
  res.setHeader("Access-Control-Allow-Origin","*");
  switch(par){
    case '/':
      res.status(404).send({"api":null,"Status":404})
      break;
      case '/upseodata':
        upseodata.enter(req,res);
        break;
      case '/boolean1':
        res.status(200).send({"data":["002it","002it manager","it consultant","it project manager","it specialist","it analyst","it director","it business analyst","it recruiter","it support specialist","it technician","it administrator","it engineer","it architect","it support technician","it operations manager"]});
        break;
        case '/boolean2':
        res.status(200).send({"data": {
            "mandatorySkills": [
              "002security",
              "information security",
              "it management",
              "networking",
              "integration",
              "disaster recovery",
              "information technology",
              "it operations",
              "it service management",
              "itil",
              "infrastructure",
              "it strategy"
            ],
            "relatedSkills": [
              "security",
              "information security",
              "it management",
              "networking",
              "integration",
              "disaster recovery",
              "information technology",
              "it operations",
              "it service management",
              "itil",
              "infrastructure",
              "it strategy"
            ],
            "titles": [
              "information technology",
              "director of it",
              "it manager",
              "director of information technology",
              "technical support",
              "it director",
              "it project manager",
              "chief information officer",
              "cio",
              "information technology manager",
              "manager it",
              "infrastructure project manager",
              "it consultant"
            ]
          }
        });
        break;
        case '/boolean3':
        res.status(200).send({str:'boolean boolean test test test test test test' })
        break;
    case '/test':
    test.enter(req,res);
      default:
        res.status(301).redirect('/api/');
        
  }
});
router.options('*', function(req, res, next) {
  // console.log({url:req.url,type:req.method,params:req.params,query:req.query})
  var par = req.params[0];
  res.setHeader("Access-Control-Allow-Origin","*");
  switch(par){
    case '/':
      res.status(404).send({"api":null,"Status":404})
      break;
      case '/upseodata':
        upseodata.enter(req,res);
        break;
      case '/boolean1':
        res.status(200).send({"data":["002it","002it manager","it consultant","it project manager","it specialist","it analyst","it director","it business analyst","it recruiter","it support specialist","it technician","it administrator","it engineer","it architect","it support technician","it operations manager"]});
        break;
        case '/boolean2':
        res.status(200).send({"data": {
            "mandatorySkills": [
              "002security",
              "information security",
              "it management",
              "networking",
              "integration",
              "disaster recovery",
              "information technology",
              "it operations",
              "it service management",
              "itil",
              "infrastructure",
              "it strategy"
            ],
            "relatedSkills": [
              "security",
              "information security",
              "it management",
              "networking",
              "integration",
              "disaster recovery",
              "information technology",
              "it operations",
              "it service management",
              "itil",
              "infrastructure",
              "it strategy"
            ],
            "titles": [
              "information technology",
              "director of it",
              "it manager",
              "director of information technology",
              "technical support",
              "it director",
              "it project manager",
              "chief information officer",
              "cio",
              "information technology manager",
              "manager it",
              "infrastructure project manager",
              "it consultant"
            ]
          }
        });
        break;
        case '/boolean3':
        res.status(200).send({str:'boolean boolean test test test test test test' })
        break;
    case '/test':
    test.enter(req,res);
      default:
        res.status(301).redirect('/api/');
        
  }
});
module.exports = router;
