'use strict';
var mongoose = require('mongoose'),
  Flight = mongoose.model('flights'),
  FlightSegment = mongoose.model('flight_segment');

//Controller uses mongoDB commands to get the information required from the mongoDB
//All data set using GET is returned as JSON

exports.get_a_flight = function(req, res) {
  Flight.findOne({id: req.params.id}, function(err, flight) {
    if (err)
      res.send(err);
    res.json(flight);
  });
};

//
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

exports.get_flight_numbers_per_day = function(req, res) {
  Flight.aggregate([ 
    { $group: 
    { _id: { $add: 
    [ { $dayOfYear: "$outdepartdate"}, { $multiply: [400, {$year: "$outdepartdate"}] } ]}, 
      outflightno: { $sum: 1 }, first: {$min: "$outdepartdate"} } }, 
    { $sort: {_id: 1} }, 
    { $project: { outdepartdate: "$first", outflightno: 1, _id:0} }], function(err, flightNumbers) {
  if (err)
    res.send(err);
  res.json(flightNumbers);
  });
};

exports.get_top_dest = function(req, res){
  Flight.aggregate([
    { "$group": { "_id": { "destair": "$destair" }, "count": { "$sum":1 } }}, 
    { "$group": { "_id": "$_id.destair", "count": { "$sum": "$count" } }}, 
    {"$sort": { "count":-1 }}, 
    {$limit:10}], function(err, dest){
  if (err)
    res.send(err);
  res.json(dest);
  });
}

exports.get_all_times = function(req, res){
  Flight.find({}, {outdeparttime:1, _id:0}, function(err, time) {
  if (err)
    res.send(err);
  res.json(time);
  });
}

exports.get_avg_price = function(req,res){
  Flight.aggregate([{$group: {_id:"$originalcurrency", price: {$avg:"$originalprice"}}}], function(err, price){
  if (err)
    res.send(err);
  res.json(price);
  });
}