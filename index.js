/////////////  GLOBAL  VARIABLES  ///////////////
 const formText = document.getElementById("countryName")
 const countryInfoContainer = document.getElementById("innerDivForCountryResults")
 const submit = document.getElementById('submit')


// Change Color for Hovered State OVER SUBMIT BUTTON//
submit.addEventListener("mouseover", function (e){
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
  countryData.forEach(country => {
    const h2Title = document.createElement('h2')
    h2Title.innerText = country.name.common;
    const countryFlag = country.flag
    const population = country.population;
    const unMember =  country.unMember;
    nameContainer.append(h2Title)
    flagContainer.append(countryFlag)
    populationContainer.append(population)
    
    unMemberContainer.append(unMember)
  })
})
.catch(error => alert('Oops, we could\'t find that! Please check your spelling.'))
}




