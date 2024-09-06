const key = 'f96b9dc49a-64f9ed5c3d-sjdo6l';
const amount = document.getElementById("amount");
const from = document.getElementById("fromCurrency");
const to = document.getElementById("toCurrency");
const url = `https://api.fastforex.io/currencies?api_key=${key}`

async function getCurrencies() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const currencies = data.currencies;

        for (const [currencyCode, currencyName] of Object.entries(currencies)) {
            let optionFrom = document.createElement("option");
            optionFrom.value = currencyCode
            optionFrom.textContent = currencyName;
            from.appendChild(optionFrom);

            let optionto = document.createElement("option");
            optionto.value = currencyCode
            optionto.textContent = currencyName
            to.appendChild(optionto);
        }

    } catch (e) {
        console.error('erreur lors de la recuperation des devises:',error);
    }
}


getCurrencies()
async function convert() {

    const amountValue = amount.value;
    const fromValue = from.value;
    const toValue = to.value;

    if (amountValue === '' || isNaN(amountValue)) {
        alert("veuillez saisir un nombre");
    }
    try {
        const response = await fetch(`https://api.fastforex.io/convert?from=${fromValue}&to=${toValue}&amount=${amountValue}&api_key=${key}`);
        const data = await response.json()
        const result = data.result[toValue];
        amount.value = result;
    } catch (e) {
        console.error(e)
    }

}
