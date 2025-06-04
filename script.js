async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = '8fcdf42519f8072a96c853b497a31c94'; // replace with your actual key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      document.getElementById('weatherResult').innerHTML = `
        <h3>${data.name}</h3>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
      `;
    } else {
      document.getElementById('weatherResult').innerHTML = `<p>City not found</p>`;
    }
  } catch (error) {
    document.getElementById('weatherResult').innerHTML = `<p>Error fetching data</p>`;
  }
}
