'use strict'
//***********************imported Modules********************************************
var express = require('express');
var logger = require('morgan');
const api = require('./routes/api')
//var mongoose = require('mongoose');
var config = require('./config.json');
var app = express();
const mongoose = require('./Schema/Mongoose')

app.listen(config.PORT, function () {
  console.log(`Server is listening on ${config.PORT}`)
  mongoose.connect()
}).on('error', function () {
  console.log('Something went wrong')
  console.log(Error);
})
//----Using express.json(previously was done by body-parser) for getting individual data from request---
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//************************Routing********************************************
app.use('', api);