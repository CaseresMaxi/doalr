chrome.storage.local.get('precioDolar', function(result) {
    const precio = result.precioDolar || 'Cargando...';
    
    const precioDiv = document.createElement('div');
    precioDiv.style.position = 'fixed';
    precioDiv.style.top = '10px';
    precioDiv.style.right = '10px';
    precioDiv.style.backgroundColor = 'white';
    precioDiv.style.padding = '10px';
    precioDiv.style.borderRadius = '5px';
    precioDiv.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
    precioDiv.style.zIndex = '10000';
    precioDiv.innerText = `USD: $${precio}`;

    document.body.appendChild(precioDiv);
});
