document.addEventListener('DOMContentLoaded', function() {
    // Hacer la solicitud a la API de Bluelytics
    fetch('https://api.bluelytics.com.ar/v2/latest')
      .then(response => response.json())
      .then(data => {
        // Extraer los valores de compra y venta
        const blueBuy = data.blue.value_buy;
        const blueSell = data.blue.value_sell;
        const oficialBuy = data.oficial.value_buy;
        const oficialSell = data.oficial.value_sell;
  
        // Actualizar el DOM con los valores obtenidos
        document.getElementById('blue_buy').innerText = `$${blueBuy}`;
        document.getElementById('blue_sell').innerText = `$${blueSell}`;
        document.getElementById('oficial_buy').innerText = `$${oficialBuy}`;
        document.getElementById('oficial_sell').innerText = `$${oficialSell}`;
      })
      .catch(error => {
        // En caso de error, mostrar un mensaje
        document.getElementById('blue_buy').innerText = 'Error';
        document.getElementById('blue_sell').innerText = 'Error';
        document.getElementById('oficial_buy').innerText = 'Error';
        document.getElementById('oficial_sell').innerText = 'Error';
        console.error('Error al obtener los datos de la API:', error);
      });
  });
  