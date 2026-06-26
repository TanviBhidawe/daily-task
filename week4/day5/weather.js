async function getWeather(){
let city=document.getElementById("city").value.trim();
let weather=document.getElementById("weather");
let loading=document.getElementById("loading");
let error=document.getElementById("error");
weather.innerHTML="";
error.innerHTML="";

if(city===""){
error.innerHTML="Enter city";
return;
}

loading.style.display="block";

try{

let response=await fetch(
`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=86cff54ac257aafd9370c52bea04fa37&units=metric`
);

let data=await response.json();

if(data.cod!=200){
throw new Error(data.message);
}

weather.innerHTML=
`
<h2>${data.name}</h2>
<p> ${data.main.temp}°C</p>
<p> ${data.weather[0].main}</p>
<p> ${data.main.humidity}%</p>
`;

loading.style.display="none";

}

catch(err){

loading.style.display="none";

error.innerHTML=err.message;

}

}