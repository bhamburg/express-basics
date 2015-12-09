'use strict';

var express = require('express');

var app = express();

app.get('/', function(req, res){
  res.send("<h1>I Love Treehouse!</h1>");
});

app.listen(3000, function(){
  console.log("Express is running on port 3000!");
});