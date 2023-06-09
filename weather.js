const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('search');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('h');
const wind_speed = document.getElementById('w');

const not_found = document.querySelector('.not_found');
const weather_body = document.querySelector('.weather-body');

async function checkWeather(city){
    const api_key = "f610de56b58159cdaf6c008d7f619435";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response=>
        response.json());

    if(weather_data.cod === '404'){
        not_found.style.display = "flex";
        weather_body.style.display = "none";

        console.log("error");
        return;
    }

    weather_body.style.display = "flex";

    temperature.innerHTML = `${Math.round(weather_data.main.temp-273.15)}<sup>°C</sup>`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%<br>Humidity`;
    humidity.innerHTML = `${weather_data.main.humidity}%<br>Humidity`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H<br>Wind Speed`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "clouds.png";
            break;
        case 'Rain':
            weather_img.src = "rain.jpeg";
            break;
        case 'Clear':
            weather_img.src = "clear.png";
            break;
        case 'Mist':
            weather_img.src = "mist.jpeg";
            break;
        case 'Snow':
            weather_img.src = "snow.png";
            break;
    }
}
searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});
