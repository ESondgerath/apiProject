// EVEMarketer Price Information
var systemPrices = document.querySelector('ul');

var url = new URL('http://api.evemarketer.com/ec/marketstat/json')

var params = {typeid:34}
// var params = [['typeid', '34']]

url.search = new URLSearchParams(params)

fetch(url) 
.then(function(response) {   
  return response.json();
  // console.log(typeof response.body) 
})
.then(function(json) {
  console.log(json);
});