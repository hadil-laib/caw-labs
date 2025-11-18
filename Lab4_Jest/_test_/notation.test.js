// _test_/notation.test.js
const { calculateGrade, getLetterGrade } = require('../notation');

describe('Exercice 1 - notation.js', () => {
  test('calcule la moyenne', () => {
    expect(calculateGrade([10, 20])).toBe(15);
    expect(calculateGrade([18])).toBe(18);
    expect(calculateGrade([])).toBe(0);
  });

  test('retourne la bonne lettre', () => {
    expect(getLetterGrade(19)).toBe('A');
    expect(getLetterGrade(15)).toBe('C');
    expect(getLetterGrade(8)).toBe('F');
  });
});