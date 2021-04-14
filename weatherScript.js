const weatherKey    = "99ea07c8eacd76729ba235b926177bbb";
let inputVal = document.getElementById("weatherForm").value;
fetch(`https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=${weatherKey}`)
.then(function(response) {
    return response.json();
    }
)
.then(function(data) {
    console.log(data);
    // let cityName = data("city");
    // let degreeType = data.main.temp.unit.value; 
    // let cityWeather = data.main.temp.value; // on openweather JSON example, this is in Kelvin?
    // let weatherFeels = data.main.feels_like.value;  //also in Kelvin?
    // let weatherDescrip = data.weather.description.value;
    
    }
)
.catch(function(err) {
console.log(err);
}
);

// let (get value of location user input)
// "fetch" = Get?  make query string (url)


// Sumit used, Used "template literals"? back tick, not qoutes.
// can use $ and run things within the string?

// const weather = {
//     temperature: {
//         value:
//         type: ""
//     },
//     location: ""
// };

var weatherForm = document.getElementById("weatherForm");




//weatherForm.addEventListener("submit", function(event) {
  //  event.preventDefault();
//});

function get() {
        // let locationDisplay = document.getElementById("locationEntered");
        // let weatherDisplay = document.getElementId("resultingWeather");
        // let i = 0;
        // let degreeType;
    console.log("test");


}
    // Should I use a 'querySelector'? something like:
    //     const weatherDisplay = document.querySelector("#resultingWeather");
    
    // need to get weather from location entered, get innerHTML and
    // put it in the "resultingWeather" 



// copy/paste temp converter code to potentially use? because the
// temp from API might come in Kelvin, may have to convert to F and C?

// function convertWeather() {
//     if (scaleTemp === "") {
//         newTemp = (tempInput - 32) / 1.8;
//         output = Math.round(newTemp) + " C&deg;";        
//     } else if (scaleTemp === "c") {
//         newTemp = (tempInput * 1.8) + 32;
//         output = Math.round(newTemp) + " F&deg;";
//     } else {
//         output = "Please choose temperature scale.";
//     }
// }