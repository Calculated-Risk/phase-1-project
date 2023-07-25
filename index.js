/*  ADD BACKGROUND THAT TRANSITIONS FROM DIFFERENT COUNTRY BACKGROUNDS (ex: shows cathedrals from Rome,
 then it transitions to NYC view background...etc*/

 /////////////  GLOBAL  VARIABLES  ///////////////
 const formText = document.getElementById("countryName")
 const countryInfoContainer = document.getElementById("countryResults")
 const createParagraph = document.createElement('p')
 const countryUnorderedList = document.getElementById('countryUnorderedList')
 
 ////////////////////////////////////////////////

// Change Color for Hovered State //
h1.addEventListener("mouseover", function (e){
    console.log('hovered')
})

// Add items to DOM once the "submit" option has been clicked //
countryForm.addEventListener("submit", function(e) {
    e.preventDefault();
    getCountryInput()
    console.log('Clicked')
    countryForm.reset();
})

// Getting the country name from user input //
function getCountryInput() {
const formInput = formText.value;
fetch (`https://restcountries.com/v3.1/name/${formInput}?fullText=true`, {
    headers: {
    'Content-Type': 'application/json',
    'Accept': "application/json"
    }
})
.then (response => response.json())
.then (countryData => {
  countryData.map(country => {
    const list = document.createElement("li")
    const h2Title = document.createElement('h2')
    h2Title.innerText = country.name.common;
    const countryFlag = country.flag
    const population = country.population;
    const unMember = country.unMember;
    list.append('Country Flag: ' + countryFlag, ' Population: ' + population, ' Member of the UN? ' + unMember )
    countryUnorderedList.append(h2Title, list)
  })
})
.catch(error => alert('Oops, we could\'t find that! Please check your spelling.'))
}


// STILL HAVENT ADDED THIS IN CORRECTLY!
//Clear DOM after search results appear and new input is requested
function clearScreen(){
    document.getElementById('countryResults').innerText = '';
}

