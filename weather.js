const apiKey="1c652e8dedb5606b6926f937f0cf8735";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city){

       const response =await fetch(apiUrl + city +`&appid=${apiKey}`);
       var data = await response.json();
       console.log(data);
       document.querySelector(".city").innerHTML=data.name;
       document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
       document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°c";
       document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";

       if(data.weather[0].main=="Clouds"){
        weatherIcon.src ="./weather image/cloud.png";
       }
       else if(data.weather[0].main=="Rain"){
        weatherIcon.src ="./weather image/rain.png";
       }
       else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src ="./weather image/drizzle.png";
       }
       else if(data.weather[0].main=="Mist"){
        weatherIcon.src ="./weather image/mist.png";
       }
       else if(data.weather[0].main=="Clear"){
        weatherIcon.src ="./weather image/clear.png";
       }

       
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
checkWeather(); 
