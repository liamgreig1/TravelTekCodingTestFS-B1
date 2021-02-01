
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

async function display_most_stop_flight_info(){
    let allInfo = await process_flight_info();
    document.getElementById("flightno").innerHTML = allInfo.inflightno;
    document.getElementById("carrier").innerHTML = allInfo.carrier;
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

async function display_count_per_day() {
    let days = await count_flights_per_day();
    let html = '';
    days.forEach(day => {
        let htmlSegment = `<div class="day">
                            <p>Number of flights on ${day.outdepartdate.split('T')[0]}: ${day.outflightno} </p>
                           </div>`;
        html += htmlSegment;
    });

    let container = document.querySelector('.day');
    container.innerHTML = html;
}

async function get_top_dest(){
    let url = 'http://localhost:3000/topdest';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function display_top_dest() {
    let dests = await get_top_dest();
    let html = '';
    var i = 1;
    dests.forEach(dest => {
        let htmlSegment = `<div class="dest">
                            <p>${i++}: ${dest._id}</p>
                           </div>`;
        html += htmlSegment;
    });

    let container = document.querySelector('.topdest');
    container.innerHTML = html;
}

async function get_times() {
    let url = 'http://localhost:3000/gettimes';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function process_times(){
    let times = await get_times();
    var times_display = new Array();
    times.forEach(time => {
        intTime = parseInt(time.outdeparttime.substring(0,2));
        if(intTime < 12){
            times_display.push(intTime);
        }
    })
    document.getElementById("departures").innerHTML = times_display.length;
}
async function get_avg_price(){
    let url = 'http://localhost:3000/avgprice';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function display_avg_price(){
    let prices = await get_avg_price();
    let html = '';
    prices.forEach(price => {
        let htmlSegment = `<div class="price">
                            <p>Average ticket price of ${price._id} = ${Math.round((price.price + Number.EPSILON ) * 100) / 100}</p>
                           </div>`;
        html += htmlSegment;
    });
    let container = document.querySelector('.avgprice');
    container.innerHTML = html;

}


display_most_stop_flight_info();
display_count_per_day();
display_top_dest();
process_times();
display_avg_price();
