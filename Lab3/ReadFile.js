
const fs = require('fs');


const nomFichier = process.argv[2];

if (!nomFichier) {
    console.log("Erreur : donnez un nom de fichier !");
    process.exit(1);
}

try {
    const contenu = fs.readFileSync(nomFichier, 'utf-8');
    console.log(contenu);
} catch (erreur) {
    console.log("Fichier non trouvé !");
}