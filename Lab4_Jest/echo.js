// echo.js
function echo(input) {
  if (typeof input === 'string' || typeof input === 'number') {
    console.log(input); // ← Cette ligne est normale
    return String(input);
  } else {
    throw new Error('Input must be a string or number');
  }
}

// EXPORTER LA FONCTION
module.exports = echo;