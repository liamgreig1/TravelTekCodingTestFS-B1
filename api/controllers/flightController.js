'use strict';
var mongoose = require('mongoose'),
  Flight = mongoose.model('flights'),
  FlightSegment = mongoose.model('flight_segment');

exports.list_all_flights = function(req, res) {
  Flight.find({}, function(err, flihgts) {
    if (err)
      res.send(err);
    res.json(flihgts);
  });
};

exports.list_all_segments = function(req, res) {
  FlightSegment.find({}, function(err, flight_segment) {
    if (err)
      res.send(err);
    res.json(flight_segment);
  });
};

exports.get_a_flight = function(req, res) {
  Flight.findOne({id: req.params.id}, function(err, flight) {
    if (err)
      res.send(err);
    res.json(flight);
  });
};

exports.get_most_stops = function(req, res) {
  FlightSegment.aggregate([ 
    {$group: 
      {_id:"$flightid", count:{$sum:1}}}, 
      {$sort: {count:-1}}, 
    {$group: 
      {_id:1, flightid:{$push:{flightid:"$_id", count:"$count"}}}}, 
    {$project: 
      { first : {$arrayElemAt: ["$flightid", 0]} } }, 
      {$project: 
        { status: [ "$first" ] } }, 
        {$unwind: "$status"}, 
        {$project: { _id:0, flightid: "$status.flightid"}}], function(err, flightid) {
    if (err)
      res.send(err);
    res.json(flightid);
  });
};