function displayDate() {
  let now = new Date();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let dayName = days[now.getDay()];
  let hours = now.getHours().toString().padStart(2, "0");
  let minutes = now.getMinutes().toString().padStart(2, "0");

  return `${dayName} ${hours}:${minutes}`;
}

let dateElement = document.querySelector("#date");
dateElement.innerHTML = displayDate();

function showWeather(response) {
  let city = response.data.city;
  let temp = Math.round(response.data.temperature.current);

  document.querySelector("#cities").innerHTML = city;
  document.querySelector("#temperature").innerHTML = temp;
}

function searchCity(city) {
  let apiKey = "8b8ce6ffa7c5f347d962do7b74bc0tb0";

  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showWeather);
}

function handleSubmit(event) {
  event.preventDefault();

  let cityInput = document.querySelector("#search-input");

  searchCity(cityInput.value);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);
