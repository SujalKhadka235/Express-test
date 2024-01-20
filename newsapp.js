const apikey = "1d17c01816b943e2bc192606cde40be0";
const apiurl =
  "https://newsapi.org/v2/everything?q=bitcoin&apiKey=1d17c01816b943e2bc192606cde40be0";

const search = async (topic) => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${encodeURIComponent(
      topic
    )}&apiKey=1d17c01816b943e2bc192606cde40be0`
  );
  const data = await response.json();
  console.log(data);
  document.getElementById("one").innerHTML = data.articles[0].description;
  document.getElementById("img1").src = data.articles[0].urlToImage;
  document.getElementById("two").innerHTML = data.articles[1].description;
  document.getElementById("img2").src = data.articles[1].urlToImage;
  document.getElementById("three").innerHTML = data.articles[2].description;
  document.getElementById("img3").src = data.articles[2].urlToImage;
  document.getElementById("title1").innerHTML = data.articles[0].title;
  document.getElementById("title2").innerHTML = data.articles[1].title;
  document.getElementById("title3").innerHTML = data.articles[2].title;
};
const start = async () => {
  const topic = document.getElementById("search").value;
  const result = await search(topic);
  console.log(result);
};
