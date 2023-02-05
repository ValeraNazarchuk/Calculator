const values = document.querySelectorAll('.canver__box-value')

async function getCurrencies () {
  const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'

  const response = await fetch(url)
  const data = await response.json();

  console.log(data);

  for (let item of values) {
    for (let el of data) {
      if (item.dataset.value === el.cc) [
        item.textContent = el.rate.toFixed(2)
      ]
    }
  }
}

getCurrencies()