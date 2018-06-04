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

var starWarsShipCost = document.querySelector('#table');


fetch('https://swapi.co/api/starships') 
.then(function(response) {   
  return response.json(); 
})
.then(function(json) {
  let starships = json.results; 

  for(n of starships) {
    let listItem = document.createElement('tr');
    listItem.innerHTML = '<td>' + n.name + '</td>';
    // listItem.innerHTML = '<td>' + m.manufacturer + '</td>';
    // listItem.innerHTML = '<td>' + c.cost_in_credits + '</td>';
    // listItem.innerHTML = '<td>' + n.name + '</td>' + '<td>' + m.manufacturer + '</td>' + '<td>' + c.cost_in_credits + '</td>';
    starWarsShipCost.appendChild(listItem);  
  }

  for(m of starships) {
    let listItem = document.createElement('tr');
    listItem.innerHTML = '<td>' + m.manufacturer + '</td>';
    starWarsShipCost.appendChild(listItem);
  }

  for(c of starships) {
    let listItem = document.createElement('tr');
    listItem.innerHTML = '<td>' + c.cost_in_credits + '</td>';
    starWarsShipCost.appendChild(listItem);
  }


});