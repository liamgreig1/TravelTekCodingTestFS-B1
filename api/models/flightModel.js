'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FlightSchema = new Schema({
    id: {
        type: Number
    },
    depair: {
        type: String
    },
    destair: {
        type: String
    },
    indepartcode: {
        type: String
    },
    inarrivecode: {
        type: String
    },
    outflightno: {
        type: String
    },
    outdepartdate: {
        type: Date
    },
    outdeparttime: {
        type: Date
    },
    outarrivaldate: {
        type: Date
    },
    outarrivaltime: {
        type: Date
    },
    outbookingclass: {
        type: String
    },
    outflightclass: {
        type: String
    },
    outcarriercode: {
        type: String
    },
    inflightno:{
        type: String
    },
    indepartdate:{
        type: Date
    },
    indeparttime: {
        type: Date
    },
    inarrivaldate: {
        type: Date
    },
    inarrivaltime: {
        type: Date
    },
    inbookingclass: {
        type: String
    },
    inflightclass: {
        type: String
    },
    incarriercode: {
        type: String
    },
    originalprice: {
        type: Number
    },
    originalcurrency: {
        type: String
    },
    reservation: {
        type: String
    },
    carrier: {
        type: String
    },
    oneway: {
        type: Number
    }
  });
  
  module.exports = mongoose.model('flights', FlightSchema);