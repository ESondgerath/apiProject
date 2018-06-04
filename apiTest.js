// var starWarsPeopleList = document.querySelector('ul');

// fetch('https://swapi.co/api/people') 
// .then(function(response) {   
//   return response.json(); 
// })
// .then(function(json) {
//   let people = json.results;
//   console.log(people)

//   for(p of people) {
//     let listItem = document.createElement('li'); 
//     listItem.innerHTML = '<p>' + p.name + '</p>'; 
//     starWarsPeopleList.appendChild(listItem);  
//   }

// });

// =======

var baseURL = new URL("https://swapi.co/api/starships/")

var pageNumber = 1


// console.log(baseURL)

var starWarsShipCost = document.querySelector('#table');
// baseURL='https://swapi.co/api/starships/?page=1'

function fetchAPI() {
  if (pageNumber >= 5) {
    pageNumber = 1;
  }
  var params = {page:pageNumber}
  baseURL.search = new URLSearchParams(params)
  
  fetch(baseURL) 
  .then(function(response) {   
    return response.json(); 
  })
  .then(function(json) {
    let starships = json.results; 
    document.getElementById("table").innerHTML = "";
  
    for(n of starships) {
      let listItem = document.createElement('tr');
      listItem.innerHTML = '<td>' + n.name + '</td>' + '<td>' + n.manufacturer + '</td>' + '<td>' + n.cost_in_credits + '</td>';
      starWarsShipCost.appendChild(listItem);  
    }
  });
}

fetchAPI()

document.getElementById("nextButton").onclick = function() {
  pageNumber++
  fetchAPI()
}

document.getElementById("prevButton").onclick = function() {
  pageNumber--
  fetchAPI()
}