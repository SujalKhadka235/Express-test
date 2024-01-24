const start = () => {
  const currency = document.getElementById("currency").value;
  convert(currency);
};
const convert = (currency) => {
  const apiurl = `https://open.er-api.com/v6/latest/${currency}`;
  const result = fetch(apiurl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const final = JSON.stringify(data.rates, null, 2);
      console.log(final);
      return (document.getElementById("display").innerHTML = final);
    });
};
