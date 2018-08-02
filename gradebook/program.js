var book = require("./lib/grades").book;
var express = require('express');
var app = express();

/*
Computers talk across 'ports'

Common ports:
    80 - web traffic
    25 - routing email
    109 - checking email
    443 - secure web
*/
app.listen(3000);
console.log("Server is ready...")