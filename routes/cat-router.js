'use strict';

const express = require('express');
const jsonParser = require('body-parser').json();
//This is where we pull in json data^
const Cat = require(__dirname + '/../models/cat.js');

const catRouter = module.exports = express.Router();
//explain line ^
catRouter.post('/cats', jsonParser, (req, res, next) =>{
  //parse the json coming in^
  let newCat = new Cat(req.body);
  newCat.save()
  //.save() returns a promise^
    .then(data => res.send(data))
    //getting the data from the db and sendinging it back a response^
    .catch(err => next({statusCode: 500, message: 'error creating cat', error: err}));
});
