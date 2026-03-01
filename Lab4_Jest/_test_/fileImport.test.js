
const { readFileContent } = require('../fileImport');
const fs = require('fs');
const path = require('path');
const os = require('os');

const tempFile = path.join(os.tmpdir(), 'caw-test.txt');

describe('Exercice 1 - fileImport.js', () => {
  beforeEach(() => {
    fs.writeFileSync(tempFile, 'Ligne 1\nLigne 2', 'utf-8');
  });

  afterEach(() => {
    if (fs.existsSync(tempFile)) fs.unlinkSync(tempFile);
  });

  test('lit le contenu d\'un fichier', () => {
    const content = readFileContent(tempFile);
    expect(content).toBe('Ligne 1\nLigne 2');
  });

  test('lève une erreur si fichier absent', () => {
    expect(() => readFileContent('fichier_qui_n_existe_pas.txt')).toThrow();
  });
});