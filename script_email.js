document.getElementById('copyButton').addEventListener('click', function() {
    // Crée un élément de texte temporaire
    var tempInput = document.createElement('input');
    // Définit la valeur de l'élément à l'adresse e-mail que vous souhaitez copier
    tempInput.value = 'roquesba@gmail.com';
    // Ajoute l'élément temporaire au document
    document.body.appendChild(tempInput);
    // Sélectionne tout le texte dans l'élément temporaire
    tempInput.select();
    // Copie le texte sélectionné dans le presse-papiers
    document.execCommand('copy');
    // Supprime l'élément temporaire du document
    document.body.removeChild(tempInput);
    // Facultatif : Affiche une alerte pour informer l'utilisateur que l'e-mail a été copié
    alert("L'adresse e-mail a été copiée dans le presse-papiers !");
});
