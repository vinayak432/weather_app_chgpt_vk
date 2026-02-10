const apiKey = "YOUR_API_KEY";

function getWeather() {
    const city = document.getElementById("city").value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("result").innerHTML =
                `<h3>${data.name}</h3>
                 <p>Temperature: ${data.main.temp} °C</p>
                 <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(() => {
            document.getElementById("result").innerHTML = "City not found";
        });
}
