
const fs = require('fs');
const path = require('path');

function readFileContent(filePath) {
  const absolutePath = path.resolve(filePath);
  return fs.readFileSync(absolutePath, 'utf-8');
}

module.exports = { readFileContent };