chrome.runtime.onInstalled.addListener(() => {
    setInterval(() => {
        fetch('https://api.exchangerate-api.com/v4/latest/USD')
            .then(response => response.json())
            .then(data => {
                const precioDolar = data.rates.USD;
                chrome.storage.local.set({ 'precioDolar': precioDolar });
            });
    }, 60000); // Actualiza cada minuto
});
