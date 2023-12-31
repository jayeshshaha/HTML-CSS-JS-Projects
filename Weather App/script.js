const apiKey = "d94318cf2792638562813cabd3eb1e40";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}` )

    // If the city name is invalid it will give 404
    if(response.status == 404){
      document.querySelector('.error').style.display = 'block';
    } 

    var data = await response.json();
    console.log(data);
    
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + "Km/h";

    // Update the Layer2 img as per the weather conditions

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "/images/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "/images/clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "/images/rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "/images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "/images/mist.png"
    }
    
    // Section hide feature (keeping it as optional)
    // document.querySelector('section').style.display = 'block';

}

searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value);
})


// checkWeather();

