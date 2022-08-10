const express = require('express');
const expressWs = require('express-ws');
const path = require('path');
const cookie = require('cookie-parser');
const logger = require('morgan');
const favicon = require('serve-favicon');
const pageiroutes = require('./routes/pageiroutes');
const apiRouter = require('./routes/apiroutes');
const { request } = require('express');

const app = express();
expressWs(app)

app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookie());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/static', express.static(path.join(__dirname, '/public')));
app.use('/page', pageiroutes);
app.use('/api', apiRouter);
app.use('*',  express.static(path.join(__dirname, '/views/no_font.html')));
app.ws('/test',function(ws,req){
    
})
module.exports = app;

