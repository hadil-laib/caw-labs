
const echo = require('../echo');  // Correct si echo.js est dans Lab4_Jest/

describe('Exercice 1 - Fonction echo', () => {
  test('doit retourner la chaîne inchangée', () => {
    expect(echo('bonjour')).toBe('bonjour');
    expect(echo('')).toBe('');
    expect(echo('CAW')).toBe('CAW');
  });

  test('gère les nombres comme des chaînes', () => {
    expect(echo(42)).toBe('42');
    expect(echo(0)).toBe('0');
  });

  test('lève une erreur pour les types non autorisés', () => {
    expect(() => echo(null)).toThrow();
    expect(() => echo(undefined)).toThrow();
    expect(() => echo({})).toThrow();
  });
});