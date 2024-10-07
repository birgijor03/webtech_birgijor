//Venter til hele vinduet har loadet før scriptet utføres
window.addEventListener("load", () => {
const cityLocations = [ {

  //Monfalcone, Italy
  apiURL:"https://api.open-meteo.com/v1/forecast?latitude=45.8046&longitude=13.5329&current_weather=true",
  elementID: "Italy",
  cityName: "Monfalcone"
  },
  {
  //Nha Trang, Vietnam
  apiURL: "https://api.open-meteo.com/v1/forecast?latitude=12.2451&longitude=109.1943&current_weather=true",
  elementID: "Vietnam",
  cityName: "Nha Trang"
  },
  {
  //Lion, France
  apiURL: "https://api.open-meteo.com/v1/forecast?latitude=48.5228&longitude=3.7032&current_weather=true",
  elementID: "France",
  cityName: "Lion"
  },
  {
  //Honningsvåg, Norway
  apiURL: "https://api.open-meteo.com/v1/forecast?latitude=70.9821&longitude=25.9704&current_weather=true",
  elementID: "Norway",
  cityName: "Honningsvåg"
  },
  {
  //Antiparos, Greece
  apiURL: "https://api.open-meteo.com/v1/forecast?latitude=37.0394&longitude=25.0826&current_weather=true",
  elementID: "Greece",
  cityName: "Antiparos"
  },
  {
  //Bur, Ukraine
  apiURL: "https://api.open-meteo.com/v1/forecast?latitude=49.8818&longitude=24.9554&current_weather=true",
  elementID: "Ukraine",
  cityName: "Bur"
  }
];

const getWeatherData = (location) => {
    //Forespør lokasjon av API URL
    fetch(location.apiURL)
        .then(response => response.json())
        .then(weatherData => {
            const currentWeather = weatherData.current_weather;
            displayWeather(currentWeather, location.elementID, location.cityName);
        })
    //Skriver ut feilkode hvis den ikke klarer å hente data    
    .catch(error => {
        document.querySelector(`#${location.elementID}`).innerHTML = 
        '<p>Failed to catch data!</p>';
        console.error("Error trying to fetch data", error);
    });
};

//Viser data i de ulike HTML elementene
const displayWeather = (weather, elementID, cityName) => {
    document.querySelector(`#${elementID}`).innerHTML = `
    <h2>${cityName}, ${elementID}</h2>
    <p>Temperature: ${weather.temperature}</p>
    <p>Wind speed: ${weather.windspeed}</p>
    <p>Weather code: ${weather.weathercode}</p>`;
};

//Henter data for hver eneste by
cityLocations.forEach(location => getWeatherData(location));

//Oppdaterer hvert 30. sekund
setInterval(() => {
    cityLocations.forEach(location => 
        getWeatherData(location));
    }, 30000);

});
