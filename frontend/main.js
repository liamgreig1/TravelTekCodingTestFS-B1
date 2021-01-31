// let base64 = require('base-64');

// let username = 'lgreig200';
// let password = 'Liamgreig1998!';

// let headers = new Headers();

// headers.set('Authorization', 'Basic ' + base64.encode(username + ":" + password));

// fetch('http://localhost:3000/moststops', {method:'GET', headers: headers, 
// //credentials: username + ':' + password
// })
fetch('http://localhost:3000/moststops')
    // Handle success
    .then(response => response.json())  // convert to json
    .then(json => console.log(json))    //print data to console
    .catch(err => console.log('Request Failed', err)); // Catch errors

