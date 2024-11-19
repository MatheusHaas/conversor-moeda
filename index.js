document.getElementById('conversion-form').addEventListener('submit', async (e) => {
    e.preventDefault()

    const amount = document.getElementById('amount').value
    const fromCurrency = document.getElementById('from-currency').value
    const toCurrency = document.getElementById('to-currency').value

    if (fromCurrency === toCurrency) {
        document.getElementById('result').textContent = "As moedas de origem e destino não podem ser iguais."
        return
    }

    const apiUrl = `https://economia.awesomeapi.com.br/last/${fromCurrency}-${toCurrency}`
    
    try {
        const response = await fetch(apiUrl)
        const data = await response.json()
        const conversionRate = data[`${fromCurrency}${toCurrency}`].bid
        const convertedAmount = (amount * conversionRate).toFixed(2)

        document.getElementById('result').textContent = 
            `Valor convertido: ${convertedAmount} ${toCurrency}`
    } catch (error) {
        document.getElementById('result').textContent = 
            "Erro ao buscar os dados da API. Verifique sua conexão."
    }
});
