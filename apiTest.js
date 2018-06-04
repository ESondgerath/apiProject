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

// document.getElementById("prevButton").onclick(function(pageNumber) {
//   pageNumber--
//   return pageNumber--
//   fetchAPI()
// });

// document.getElementById("nextButton").onclick(function() {
//   pageNumber++
//   return pageNumber++
//   console.log(pageNumber)
//   fetchAPI()
// });

document.getElementById("nextButton").onclick = function() {
  pageNumber++
  // console.log(pageNumber)
  fetchAPI()
  // return pageNumber
}

// document.getElementById("nextButton").click(function(i) {
//   i.preventDefault();
//   document.getElementById("wrapper").toggleClass("toggled");
// });

console.log(pageNumber)