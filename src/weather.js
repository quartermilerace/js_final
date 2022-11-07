function onGeoOK(position) {
    const API_KEY = "c64228b9872fd0142ea532390b88846a";
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const loc = document.querySelector("#location");
            // const weather_main = document.querySelector("#weather_main");
            const weather_icon = document.querySelector("#weather_icon");
            const temp = document.querySelector("#main_temp");
            const temp_max = document.querySelector("#main_temp_max");
            const temp_min = document.querySelector("#main_temp_min");
            const humidity = document.querySelector("#main_humidity");

            loc.innerText = data.name; //지역
            //weather_main.innerText = data.weather[0].main; //현재날씨
            weather_icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; //날씨 아이콘
            temp.innerText = `${data.main.temp.toFixed(1)} ℃`; //현재기온
            temp_max.innerText = `최고 : ${data.main.temp_max.toFixed(1)} ℃`; //최고기온
            temp_min.innerText = `최저 : ${data.main.temp_min.toFixed(1)} ℃`; //최저기온
            humidity.innerText = `습도 : ${Math.floor(data.main.humidity)} %`; //습도
        });
}

function onGeoError() {
    alert("CAN'T FIND YOU");
}
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
