async function getCurrencies () {
  const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'

  const response = await fetch(url)
  const data = await response.json();

  console.log(data);

  data.forEach(el => {
    if (el.cc === 'AUD') {
      console.log(el.rate);
    }
  })
}

getCurrencies()