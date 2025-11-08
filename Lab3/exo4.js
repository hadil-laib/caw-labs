// exo4.js
const fs = require('fs');

// Récupérer les arguments après le nom du script
const args = process.argv.slice(2);

if (args.length < 2) {
    console.log("Usage: node exo4.js <fichier> <texte>");
    process.exit(1);
}

// Premier argument = nom du fichier
const nomFichier = args[0];

// Le reste = texte à écrire
const texte = args.slice(1).join(' ');

// Écrire dans le fichier
fs.writeFileSync(nomFichier, texte, 'utf-8');
console.log("The file has been saved!");

// Lire et afficher le contenu
const contenu = fs.readFileSync(nomFichier, 'utf-8');
console.log(contenu);