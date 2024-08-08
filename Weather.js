//Background image
document.addEventListener("DOMContentLoaded", function() {
    function setBackground() {
        const now = new Date();
        const hours = now.getHours();
        const body = document.body;
        
        if (hours >= 5 && hours < 12) {
            // Morning (5 AM to 12 PM)
            body.className = 'morning';
        } else {
            // Night (8 PM to 5 AM)
            body.className = 'night';
        }
    }

    setBackground();
});


// API
var inputvalue = document.querySelector("#cityinput");
var btn = document.querySelector("#addBtn");
var city = document.querySelector("#cityoutput");
var descrip = document.querySelector("#description");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");
var apik = "b4fb959afcd6982eb56d23de4cea88d4";

function conversion(val) {
    return (val - 273.15).toFixed(2); // Corrected the conversion to Celsius
}

btn.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data["name"];
            var descrip = data["weather"][0]["description"];
            var temperature = data["main"]["temp"];
            var windspeed = data["wind"]["speed"];

            city.innerHTML =` Weather of <span>${nameval}</span>`;
            temp.innerHTML = `Temperature: <span>${conversion(temperature)} °C</span>`;
            description.innerHTML = `Sky Condition: <span>${descrip}</span>`;
            wind.innerHTML = `Wind Speed: <span>${windspeed} km/h</span>`;
        })
        .catch(err => alert("You entered a wrong city name"));
});