const checklocation = async (name) => {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      name
    )}`
  );
  const data = await response.json();
  const long = data[0].lon;
  const lat = data[0].lat;
  return [long, lat];
};

const checktemp = async (long, lat) => {
  const result = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.current.temperature_2m;
    });
  return (document.getElementById("display").innerHTML = result + "\u00B0C");
};
const start = async () => {
  const place = document.getElementById("search").value;
  const coordinates = await checklocation(place);
  checktemp(coordinates[0], coordinates[1]);
};
