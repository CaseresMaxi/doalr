document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.local.get('precioDolar', function(result) {
        document.getElementById('precio').innerText = `USD: $${result.precioDolar}`;
    });
});
