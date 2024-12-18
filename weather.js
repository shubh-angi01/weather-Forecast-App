const apikey = "e2c73f96d0280f33622266cf624b1948";
const apiurl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search-bar");
const searchbtn = document.querySelector(".btn");
const weathericon = document.querySelector(".weathericon");

async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if (response.status == 404) {
        alert("Enter correct city name");
    } else {
        const data = await response.json();
        console.log(data);

        document.querySelector(".cityname").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°C";
        document.querySelector(".atmosphere-info").innerHTML = data.weather[0].main;
        document.querySelector(".atmosphere1-info").innerHTML = data.weather[0].main;
        document.querySelector(".visibility-info").innerHTML = data.visibility;
        document.querySelector(".pressure-info").innerHTML =
            data.main.pressure + "mb";
        document.querySelector(".real-feel-info").innerHTML =
            data.main.feels_like + "°C";
        document.querySelector(".wind-info").innerHTML = data.wind.speed + "Km/h";
        document.querySelector(".humidity-info").innerHTML =
            data.main.humidity + "%";
        document.querySelector(".temp-max").innerHTML = data.main.temp_max + "°C";
        document.querySelector(".temp-min").innerHTML = data.main.temp_min + "°C";
        // document.querySelector(".sunrise-info").innerHTML = data.sys.sunrise;
        // document.querySelector(".sunset-info").innerHTML = data.sys.sunset;
        document.querySelector(".cloud-info").innerHTML = data.clouds.all;
    }
}

searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
});