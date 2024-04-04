export function formatMontant(montant) {
    const nombreArrondi = Math.round(montant * 100) / 100;
    // Formater le nombre avec deux décimales
    const strMontant = nombreArrondi.toFixed(2); 
    // Récupérer la partie décimale
    const partieDecimale = strMontant.split('.')[1];
    // Si la partie décimale contient un seul chiffre 
    if (partieDecimale.length === 1) { 
        // Ajouter un zéro à la fin
        return strMontant + '0'; 
    } else {
        // Sinon, retourner le nombre tel quel
        return strMontant; 
    }
}