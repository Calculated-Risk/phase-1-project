/*  ADD BACKGROUND THAT TRANSITIONS FROM DIFFERENT COUNTRY BACKGROUNDS (ex: shows cathedrals from Rome,
 then it transitions to NYC view background...etc*/

 /////////////  GLOBAL  VARIABLES  ///////////////
 const formText = document.getElementById("countryName")
 

 ////////////////////////////////////////////////



// Add items to DOM once the "submit" option has been clicked
countryForm.addEventListener("submit", function(e) {
    e.preventDefault();
    getCountryInput()
    console.log('Clicked')
    countryForm.reset();
})

// Getting the country name from user input    
function getCountryInput() {
const formInput = formText.value;
fetch (`https://restcountries.com/v3.1/name/${formInput}`, {
    headers: {
    'Content-Type': 'application/json',
    'Accept': "application/json"
    }
})
.then (response => response.json())
.then (countryData => {
  countryData.map(country => console.log(country.name.common, country.independent))
  
})
}




// Change Color for Hovered State
h1.addEventListener("mouseover", function (e){
 console.log('hovered')
})

/* fetch ("https://restcountries.com/v3.1/all")
.then (response => response.json())
.then (countryData => {
  countryData.map(country => console.log(country.name.common, country.independent))
*/
