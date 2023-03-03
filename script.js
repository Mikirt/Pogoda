var key = config.MY_KEY;
let weather = {
    fetchWeather : function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + key)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp } = data.main;
        console.log(name, icon, description, temp)
        document.querySelector(".city").innerText = "Pogoda w " + name;
        document.querySelector(".temp").innerText = parseInt(temp) + "℃";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".card").classList.remove("loading");
    },
    search: function () {this.fetchWeather(document.querySelector(".input-city").value)}
};

document.querySelector(".button-city").addEventListener("click", () => {
    weather.search();
});

