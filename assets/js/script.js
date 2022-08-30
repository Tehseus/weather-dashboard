var newCity = document.getElementById(`currentCity`).innerText
console.log(newCity);


$(".searchBtn").on("click", function () {
    // search button saves the value in the field "exampleCity" and logs it
    var city = document.getElementById("exampleCity").value;
    newCity = document.getElementById("exampleCity").value;
    console.log(newCity);
   if (city === "")
    return;
   else {
    console.log(city);
    localStorage.setItem("city", city)
    getCityApi(city);
   }
   
})
//function to change h1 currentCity to value of city and enter the current weather conditions
// currentCity()

//function to display 5 cards on the page with weather information based on the city entered
// fiveDay()

//function that displays previously viewed cities
// cityHistory()



// weather api key 0eac59156142d2fa5c994014800b72fa
function getCityApi(city, element) {
    let param = city || element
    localStorage.setItem("city", city)
    let requestUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${param}&limit=1&appid=0eac59156142d2fa5c994014800b72fa`


    fetch(requestUrl)
        .then(function (response) {
            return response.json().then(function (data) {
                const { lat, lon } = data[0]
                currentCity(lat, lon, param)
                console.log(lat);
                console.log(lon);
                // getFiveDayForecast(lat, lon)
            })
        })


function currentCity(lat, lon, param) {
    let requestWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&exclude={minutely,hourly,alerts}&appid=0eac59156142d2fa5c994014800b72fa`

    fetch(requestWeatherUrl)
        .then(function (response) {
            return response.json()
        })
        // .then(function (data) {
        //     var unixTimestamp = data.current.dt;
        //     var dateT = new Date(unixTimestamp * 1000);
        //     // displayCurrent(data, dateT, param)
        // })
}
}