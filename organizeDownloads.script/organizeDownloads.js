const fs = require('fs');
const path = require('path');
const chokidar = require('./node_modules/chokidar');

// Chemin du dossier "Downloads"
const downloadsDir = path.join(require('os').homedir(), 'Downloads');

// Dictionnaire des catégories de fichiers
const folderMapping = {
  images: ['.jpg', '.jpeg', '.png', '.gif','.webp'],
  videos: ['.mp4', '.mkv', '.avi'],
  documents: ['.pdf', '.docx', '.txt'],
  archives: ['.zip', '.rar', '.tar'],
};

// Fonction pour déplacer les fichiers
function moveFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const baseName = path.basename(filePath);

  for (const [folder, extensions] of Object.entries(folderMapping)) {
    if (extensions.includes(ext)) {
      const targetDir = path.join(downloadsDir, folder);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }

      const targetPath = path.join(targetDir, baseName);
      fs.rename(filePath, targetPath, (err) => {
        if (err) console.error(`Erreur lors du déplacement : ${err}`);
        else console.log(`Fichier déplacé vers : ${targetPath}`);
      });
      return;
    }
  }

  console.log(`Aucune catégorie trouvée pour le fichier : ${filePath}`);
}

// **1. Déplacer les fichiers existants**
function moveExistingFiles() {
  fs.readdir(downloadsDir, (err, files) => {
    if (err) {
      console.error(`Erreur lors de la lecture du dossier : ${err}`);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(downloadsDir, file);
      // Vérifier si c'est un fichier et non un dossier
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error(`Erreur pour le fichier ${file}: ${err}`);
          return;
        }

        if (stats.isFile()) {
          moveFile(filePath);
        }
      });
    });
  });
}

// **2. Lancer le script**
console.log(`Déplacement des fichiers existants dans : ${downloadsDir}`);
moveExistingFiles(); // Déplace les fichiers déjà existants

console.log(`Surveillance en temps réel du dossier : ${downloadsDir}`);
// **3. Surveiller les nouveaux fichiers**
chokidar.watch(downloadsDir, { ignoreInitial: true }).on('add', (filePath) => {
  console.log(`Nouveau fichier détecté : ${filePath}`);
  moveFile(filePath);
});