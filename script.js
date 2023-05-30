const inputBox = document.querySelector(".input-box");
const searchbtn = document.getElementById("searchBtn");

const weather_img = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");


async function checkWeather(city){
  const api_key = "d3dadd08143f0f4659d57312ccb45296";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

 const weather_data = await fetch(`${url}`).then(response =>response.json());

  temperature.innerHTML = `${Math.round(weather_data.main.temp -273.15)}°C`; 

  description.innerHTML = `${weather_data.weather[0].description}`;

  humidity.innerHTML = `${weather_data.main.humidity}%`;

  wind_speed.innerHTML = `${weather_data.wind_speed}km/H`;
  
  switch(weather_data.weather[0].main)
  {
    case 'Clouds':
     weather_img.src = "images/cloud.png";
     break;
    case 'clear':
     weather_img.src = "images/clear.png";
     break;
    case 'Rain':
     weather_img.src = "images/Rain.png";
     break;
    case 'Mist':
     weather_img.src = "images/Mist.png";
     break;
    case 'Snow':
     weather_img.src = "images/Snow.png";
     break;
  }

}

searchBtn.addEventListener("click", () => {
  checkWeather(inputBox.value);
});
