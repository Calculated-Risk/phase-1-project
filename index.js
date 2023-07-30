/////////////  GLOBAL  VARIABLES  ///////////////
const formText = document.getElementById("countryName")
const countryInfoContainer = document.getElementById("innerDivForCountryResults")
const countryResultsDiv = document.getElementById("countryResults")
const submit = document.getElementById('submit')
const countryNameTitle = document.getElementById('countryNameTitle')



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
   console.log('Clicked')
   countryForm.reset();
})


// function to handle response data
function handleResponse(response) {
   return response.json();
};

// function that processes country data and appends elements to DOM
function processCountryData(countryData) {
 countryData.forEach(country => {
   renderCountryInfo(country);
 })
};

//function that renders country info and appends elements to DOM
function renderCountryInfo(country){   
   const population = country.population;
   const unMember =  country.unMember;
   const region = country.region
   const maps = country.maps.googleMaps
   const driveSide = country.car.side
   const aLink = document.createElement("a")
   const flagTwo = country.flags.png
   imgFlag = document.createElement('img');
   imgFlag.src = (flagTwo)
   countryNameTitle.innerText = country.name.common;
   populationContainer.append(population) 
   unMemberContainer.append(unMember)
   regionContainer.append(region)
   sideOfRoad.append(driveSide)
   aLink.setAttribute('href', maps)
   aLink.innerText = 'Click Here'
   mapsContainer.appendChild(aLink)
   flagBig.append(imgFlag)
};

//get country input and fetch data via API

function getCountryInput() {
   const formInput = formText.value;
   fetch (`https://restcountries.com/v3.1/name/${formInput}?fullText=true`, {
      headers: {
      'Content-Type': 'application/json',
      'Accept': "application/json"
      }
   })
   .then (handleResponse)
   .then (processCountryData)
};