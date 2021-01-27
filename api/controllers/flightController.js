'use strict';
var mongoose = require('mongoose'),
  Task = mongoose.model('flights');

exports.list_all_flights = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.get_a_flight = function(req, res) {
  Task.findOne({id: req}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
  
  
};