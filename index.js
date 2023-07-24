// Add items to DOM once the "submit" option has been clicked
countryForm.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log('Clicked')
    countryForm.reset();
    })


// Change Color for Hovered State
h1.addEventListener("mouseover", function (e){
 console.log('hovered')
})
