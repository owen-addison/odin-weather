import "./style.css";

fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=37b1a357549e4bdfda789736f18214b3",
  { mode: "cors" },
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log("ERROR!", err);
  });

console.log("WeatherAPI");
