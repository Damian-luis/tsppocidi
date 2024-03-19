// test/sum.test.js

function sum(a, b) {
    return a + b;
  }
  //should give a error
  describe('Prueba de la función sum', () => {
    test('Suma de 1 + 2 igual a 3', () => {
      expect(sum(1, 2)).toBe(3);
    });
  
    test('Suma de -1 + 1 igual a 0', () => {
      expect(sum(-1, 1)).toBe(0);
    });
  
    test('Suma de 0 + 0 igual a 0', () => {
      expect(sum(0, 0)).toBe(0);
    });
  });
  