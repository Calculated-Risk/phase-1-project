/*  ADD BACKGROUND THAT TRANSITIONS FROM DIFFERENT COUNTRY BACKGROUNDS (ex: shows cathedrals from Rome,
 then it transitions to NYC view background...etc*/



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
