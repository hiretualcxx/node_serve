const cookie = require('cookie-parser');
const readcookie = {};

readcookie.check_time = (req)=>{
    if(req){
        var cookie1 = cookie.parse(req.headers.cookie);
        var cookie = JSONCookies(cookie1); 
        return cookie;
    }else{
        return null;
    }
}
module.exports = readcookie;