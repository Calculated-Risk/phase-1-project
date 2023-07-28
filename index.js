/////////////  GLOBAL  VARIABLES  ///////////////
 const formText = document.getElementById("countryName")
 const countryInfoContainer = document.getElementById("innerDivForCountryResults")
 const countryResultsDiv = document.getElementById("countryResults")
 const submit = document.getElementById('submit')


// Change Color for Hovered State OVER SUBMIT BUTTON//
submit.addEventListener("mouseover", function (e){
    submit.style.background = 'green';
})

// Change Color AFTER Hovered State changed//
submit.addEventListener("mouseout", function (e){
  submit.style.background = 'lightblue';
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
  countryData.forEach(country => {
    const h2Title = document.createElement('h2')
    const countryFlag = country.flag
    const population = country.population;
    const unMember =  country.unMember;
    const region = country.region
    const maps = country.maps.googleMaps
    const driveSide = country.car.side
    const aLink = document.createElement("a")
    h2Title.innerText = country.name.common;
    nameContainer.append(h2Title)
    flagContainer.append(countryFlag)
    populationContainer.append(population) 
    unMemberContainer.append(unMember)
    regionContainer.append(region)
    sideOfRoad.append(driveSide)
    aLink.setAttribute('href', maps)
    aLink.innerText = 'Click Here'
    mapsContainer.appendChild(aLink)
  })
})
.catch(error => alert('Oops, we could\'t find that! Please check your spelling.'))
}



// while (countryResultsDiv.firstChild) {
//   countryInfoContainer.removeChild(countryInfoContainer.firstChild);
// }



