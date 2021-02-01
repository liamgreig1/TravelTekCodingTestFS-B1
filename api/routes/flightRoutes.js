'use strict';
module.exports = function(app) {
  var flights = require('../controllers/flightController');

  //Routes
  app.route('/flight/:id')
    .get(flights.get_a_flight);

  app.route('/moststops')
    .get(flights.get_most_stops);

  app.route('/flightsperday')
    .get(flights.get_flight_numbers_per_day);
  
  app.route('/topdest')
    .get(flights.get_top_dest);
  
  app.route('/gettimes')
    .get(flights.get_all_times);

  app.route('/avgprice')
    .get(flights.get_avg_price);
};
