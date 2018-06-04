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


/*
* Loads prices for a given set of typeIDs for a specific region using EVEMarketer.com's data.
* @param priceIDs A range where the item typeIDs are found.
* @param systemID The system to query.
* @param {number} cachebuster Increment this variable to refresh the data.
* @return The price data in multiple columns in the following order: TypeID,Buy Volume,Buy average,Buy max,Buy min,Buy Std deviation,Buy median,Buy Percentile,Sell Volume,Sell Average,Sell Max,Sell Min,Sell std Deviation,Sell Median,sell Percentile. This is suitable for use with VLOOKUP.
* @customfunction
*/

/*

function loadSystemPrices(priceIDs,systemID,pricetype,pricevalue){
  if (typeof systemID == 'undefined'){
    systemID=30000142;
  }
  if (typeof priceIDs == 'undefined'){
    throw 'need typeids';
  }
  if (typeof pricetype == 'undefined'){
    pricetype='sell';
  }
  if (typeof pricevalue == 'undefined'){
    pricevalue='percentile';

  // var prices = new Array();
  // var dirtyTypeIds = new Array();
  // var cleanTypeIds = new Array();

  var url="http://api.evemarketer.com/ec/marketstat/json"+"&usesystem="+30000142+"&typeid=";

  // priceIDs.forEach (function (row) {
  //   row.forEach ( function (cell) {
  //     if (typeof(cell) === 'number' ) {
  //       dirtyTypeIds.push(cell);
  //     }
  //   });
  // });

  cleanTypeIds = dirtyTypeIds.filter(function(v,i,a) {
    return a.indexOf(v)===i;
  });

  var parameters = {method : "get", payload : ""};
  
  var o,j,temparray,chunk = 100;

  for (o=0,j=cleanTypeIds.length; o < j; o+=chunk) {
    temparray = cleanTypeIds.slice(o,o+chunk);
    var xmlFeed = UrlFetchApp.fetch(url+temparray.join("&typeid="), parameters).getContentText();
    var xml = XmlService.parse(xmlFeed);
    if(xml) {
      var rows=xml.getRootElement().getChild("marketstat").getChildren("type");
      for(var i = 0; i < rows.length; i++) {
        var price=[parseFloat(rows[i].getChild(pricetype).getChild(pricevalue).getValue())];
        prices.push(price);
      }
    }
  }
  return prices;
}

*/