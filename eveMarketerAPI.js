// EVEMarketer Price Information
// var systemPrices = document.querySelector('ul');

var baseURL = new URL("http://api.evemarketer.com/ec/marketstat/json")

// var url = new URL("http://api.evemarketer.com/ec/marketstat/json"+"&usesystem="+30000142)

var params = {typeid:34}
// var params = [['typeid', '34']]

baseURL.search = new URLSearchParams(params)

fetch(baseURL) 
.then(function(response) {   
  return response.json();
  // console.log(typeof response.body) 
})
.then(function(json) {
  console.log(json);
  console.log()
});


// $.getJSON('baseURL, function(json) {
//     var image = json.0.buy.fivePercent;
//     $('#table').append('<div class="col-xs-4 col-md-1"><img   src="http://ddragon.leagueoflegends.com/cdn/4.3.18/img/champion/' + image + '"/></div>');
// });

// $.getJSON('http://api.evemarketer.com/ec/marketstat/json?typeid=34, function(json)'); {
//   var image = json.buy.fivePercent;
//   $('#table').append('<div class="col-xs-4 col-md-1"><img   src="http://ddragon.leagueoflegends.com/cdn/4.3.18/img/champion/' + image + '"/></div>');
// }