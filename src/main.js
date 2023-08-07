import "./style.css";

function processData(data) {
  const { main: tempInfo, name: location, weather: weatherArray } = data;
  const obj = { tempInfo, location, weatherArray };
  return obj;
}

fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=51.5072&lon=-0.1276&appid=37b1a357549e4bdfda789736f18214b3",
  { mode: "cors" },
)
  .then((response) => response.json())
  .then((response) => {
    const dataObj = processData(response);
    console.log(dataObj);
  })
  .catch((err) => {
    console.log("ERROR!", err);
  });
