document.getElementById('whatsappButton').onclick = function() {
    var message = "Bonjour, j'ai une question à propos de...";  // Remplacez par votre message par défaut
    var phoneNumber = 'your_whatsapp_number';  // Remplacez par votre numéro de téléphone au format international (ex : +33612345678)
    var url = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);
    window.open(url, '_blank');
}

