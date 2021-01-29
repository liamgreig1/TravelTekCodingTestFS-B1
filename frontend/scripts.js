var request = new XMLHttpRequest();
request.open('GET', 'http://localhost:3000/moststops', true);

request.onload = function () {
// Begin accessing JSON data here
  var data = JSON.parse(this.response);
  
}