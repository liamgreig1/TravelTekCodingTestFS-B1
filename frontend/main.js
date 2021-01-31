
async function get_most_stops(){
    let url = 'http://localhost:3000/moststops';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function get_flight_info() {
    let flights = await get_most_stops();
    var flightId;
    flights.forEach(flight => {
        flightId = flight.flightid
    });
    return flightId;
}

async function process_flight_info() {
    let url = 'http://localhost:3000/flight/';
    url = url + await get_flight_info();
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function print_most_stop_flight_info(){
    let allInfo = await process_flight_info();
    document.getElementById("flightno").innerHTML = allInfo.inflightno;
    document.getElementById("carrier").innerHTML = allInfo.carrier;
    console.log(allInfo)
}

async function count_flights_per_day(){
    let url = 'http://localhost:3000/flightsperday';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function get_count_per_day() {
    let days = await count_flights_per_day();
    let html = '';
    days.forEach(day => {
        let htmlSegment = `<div class="day">
                            <p>Number of flights on ${day.outdepartdate.split('T')[0]}: ${day.outflightno} </p>
                           </div>`;
        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

print_most_stop_flight_info();
get_count_per_day();
