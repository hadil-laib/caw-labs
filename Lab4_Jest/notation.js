

function calculateGrade(notes) {
  if (!Array.isArray(notes) || notes.length === 0) return 0;
  const sum = notes.reduce((a, b) => a + b, 0);
  return sum / notes.length;
}

function getLetterGrade(note) {
  if (note >= 18) return 'A';
  if (note >= 16) return 'B';
  if (note >= 14) return 'C';
  if (note >= 12) return 'D';
  if (note >= 10) return 'E';
  return 'F';
}

module.exports = {
  calculateGrade,
  getLetterGrade
};