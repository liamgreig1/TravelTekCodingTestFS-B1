'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Models of mongoDB collections
var FlightSchema = new Schema({
    id: {type: Number},
    depair: {type: String},
    destair: {type: String},
    indepartcode: {type: String},
    inarrivecode: {type: String},
    outflightno: {type: String},
    outdepartdate: {type: Date},
    outdeparttime: {type: String},
    outarrivaldate: {type: Date},
    outarrivaltime: {type: String},
    outbookingclass: {type: String},
    outflightclass: {type: String},
    outcarriercode: {type: String},
    inflightno:{type: String},
    indepartdate:{type: Date},
    indeparttime: {type: String},
    inarrivaldate: {type: Date},
    inarrivaltime: {type: String},
    inbookingclass: {type: String},
    inflightclass: {type: String},
    incarriercode: {type: String},
    originalprice: {type: Number},
    originalcurrency: {type: String},
    reservation: {type: String},
    carrier: {type: String},
    oneway: {type: Number}
});

var FlightSegmentSchema = new Schema({
  flightid: {type: Number},
  depcode: {type: String},
  arrcode: {type: String},
  depdate: {type: Date},
  arrdate: {type: Date},
  deptime: {type: String},
  arrtime: {type: String},
  depterminal: {type: String},
  arrterminal: {type: String},
  flightno: {type: String},
  journey: {type: String},
  class: {type: String},
  bookingclass: {type: String}
}); 
  
  module.exports = mongoose.model('flights', FlightSchema);
  module.exports = mongoose.model('flight_segment', FlightSegmentSchema);
