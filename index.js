/////////////  GLOBAL  VARIABLES  ///////////////
const formText = document.getElementById("countryName")
const countryInfoContainer = document.getElementById("innerDivForCountryResults")
const countryResultsDiv = document.getElementById("countryResults")
const submit = document.getElementById('submit')
const countryNameTitle = document.getElementById('countryNameTitle')
const flagImage = document.getElementById("flagBig")
const populationContainer = document.getElementById('populationContainer')
const unMemberContainer = document.getElementById ('unMemberContainer')
const region = document.getElementById("regionContainer")
const sideOfRoad = document.getElementById("sideOfRoad")
const maps = document.getElementById("mapsContainer")


// function that would take in arguments which would change the elements bg color
function changeBackgroundColor(element, color){
   element.style.background = color;
};


// Change Color for Hovered State OVER SUBMIT BUTTON//
submit.addEventListener("mouseover", function(){
   changeBackgroundColor(submit, 'green');
});


// Change Color AFTER Hovered State changed//
submit.addEventListener("mouseout", function (){
   changeBackgroundColor(submit, 'lightblue');
});


// Add items to DOM once the "submit" option has been clicked //
countryForm.addEventListener("submit", function(e) {
   e.preventDefault();
   getCountryInput()
   countryForm.reset();
})


//get country input and fetch data via API
function getCountryInput() {
   debugger
   const formInput = formText.value;
   fetch (`https://restcountries.com/v3.1/name/${formInput}`, {
      headers: {
      'Content-Type': 'application/json',
      'Accept': "application/json"
      }
   })
   .then (response => response.json())
   .then (processCountryData)
   .catch(function(error){
      alert("Oops, we couldn't find that! Please check your spelling.")
   })
};


// function that processes country data and appends elements to DOM
function processCountryData(countryData) {
   countryInfoContainer.innerText = ""  
   countryData.forEach(function(country){
      renderCountryInfo(country)
   })
}

//function that renders country info and appends elements to DOM
function renderCountryInfo(country){   
   const population = country.population;
   const unMember =  country.unMember;
   const region = country.region
   const maps = country.maps.googleMaps
   const driveSide = country.car.side
   const flagTwo = country.flags.png
   
   // Create a card element for the country
   const countryCard = document.createElement("div");
   countryCard.classList.add("country-card");

   // Here I will create div's for each country info and add the info received from the API. Then render to the DOM
   const imgFlag = document.createElement('img');
   imgFlag.src = flagTwo;
   countryCard.appendChild(imgFlag);

   const countryNameTitle = document.createElement("h2");
   countryNameTitle.innerText = country.name.common;
   countryCard.appendChild(countryNameTitle);

   const populationContainer = document.createElement('div');
   populationContainer.innerText = `👥 Population:  ${population}`;
   countryCard.appendChild(populationContainer);

   const unMemberContainer = document.createElement('div');
   unMemberContainer.innerText = `🇺🇳 UN Member:  ${unMember}`;
   countryCard.appendChild(unMemberContainer);

   const regionContainer = document.createElement('div');
   regionContainer.innerText = `🌎 Region:  ${region}`;
   countryCard.appendChild(regionContainer);

   const sideOfRoadContainer = document.createElement('div');
   sideOfRoadContainer.innerText = `🛣️ Side of Road:  ${driveSide}`;
   countryCard.appendChild(sideOfRoadContainer);



   const aLink = document.createElement("a");
   aLink.setAttribute('href', maps);
   aLink.innerText = 'Google Maps Link';
   countryCard.appendChild(aLink);

   // Append the card to the countryInfoContainer
   countryInfoContainer.appendChild(countryCard);
};



