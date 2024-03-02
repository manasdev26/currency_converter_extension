


document.addEventListener('DOMContentLoaded', function() {
    // Wrap all your code inside this event listener
    const convert = document.getElementById('convert');
    const amount = document.getElementById('amount');
    const currency = document.getElementById('currency');
    const result = document.getElementById('result');

const API_KEY="kNZFKIZlBAdmkWSBrCjTkg==IqYhM0Jusejrtu7s"
const API_URL=`https://api.api-ninjas.com/v1/exchangerate?pair=USD_`

    
    convert.addEventListener('click', () => {
        console.log('hi');
        const amountTotal = amount.value;
        console.log('total', amountTotal);
        const currencyTotal = currency.value;
        const url = API_URL + currencyTotal;
        console.log('url', url);

        fetch(url, {
                headers: {
                    'X-API-KEY': API_KEY
                }
            })
            .then(response => response.json())
            .then(data => {
                const rate = data.exchange_rate;
                console.log('rate', rate);
                const resultPrice = amountTotal * rate;
                console.log('result', resultPrice);
                result.innerHTML = `${amountTotal} USD = ${resultPrice.toFixed(2)} ${currencyTotal}`;
            })
            .catch(error => {
                console.error('Request failed:', error);
                result.innerHTML = 'An error occurred. Please try again later.';
            });
    });
});

