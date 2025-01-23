"use strict";

const apikey = "f3d6760192e811718f27acb6305e2431";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbt = document.querySelector(".search button");
const waetherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }
  var data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = data.main.temp + "°C";
  document.querySelector(".humidity").innerHTML =
    Math.round(data.main.humidity) + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

  if (data.weather[0].main == "Clouds") {
    waetherIcon.src = "images/cloudy.jpg";
    waetherIcon.alt = "Cloudy";
  } else if (data.weather[0].main == "Clear") {
    waetherIcon.src = "images/clear.webp";
    waetherIcon.alt = "Clear";
  } else if (data.weather[0].main == "Rain") {
    waetherIcon.src = "images/rain.png";
    waetherIcon.alt = "Rain";
  } else if (data.weather[0].main == "Drizzle") {
    waetherIcon.src = "images/snowing.png";
    waetherIcon.alt = "Drizzle";
  } else if (data.weather[0].main == "Mist") {
    waetherIcon.src = "images/mist.png";
    waetherIcon.alt = "Mist";
  }
  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";
}

searchbt.addEventListener("click", function () {
  checkWeather(searchbox.value);
});
