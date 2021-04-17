const weatherKey    = "99ea07c8eacd76729ba235b926177bbb";

// const weather = {
//     temperature: {
//         value:
//         type: ""
//     },
//     location: ""
// };


function get() {
    let inputVal = document.getElementById("weatherForm").value;
    let weatherLocal = document.querySelector("#location-Entered");
    let weatherTemp = document.querySelector("#resulting-Temp");
    let weatherFeel = document.querySelector("#feels-like");
    let weatherDesc = document.querySelector("#weather-description");

        console.log(inputVal);
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${weatherKey}`)
        .then(function(response) {
            return response.json();
        }
    )
    .then(function(data) {
        console.log(data);
        let cityName = data["city"];
        let cityWeather = data["main"]["temp"];  // on openweather JSON example, this is in Kelvin?
        let weatherFeels = data.main.feels_like.value;  //also in Kelvin?
        let weatherDescrip = data["weather"][0]["description"];

        weatherLocal.innerHTML = cityName;
        weatherTemp.innerHTML = cityWeather;
        weatherFeel.innerHTML = weatherFeels;
        weatherDesc.innerHTML = weatherDescrip;
    }
)
.catch(function(err) {
console.log(err);
}
);
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