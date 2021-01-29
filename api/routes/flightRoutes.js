'use strict';
module.exports = function(app) {
  var flights = require('../controllers/flightController');

  // todoList Routes
  app.route('/flights')
    .get(flights.list_all_flights);
  
    app.route('/flightsegments')
    .get(flights.list_all_segments);

  app.route('/flight/:id')
    .get(flights.get_a_flight);

  app.route('/moststops')
    .get(flights.get_most_stops);
};
