const Calculator = require('../js/task3');

const calc = new Calculator(4,2);

describe("Calculator",()=>{
    test('adding numbers', () => {
        expect(calc.add()).toBe(6);
      });
      test('subtracting numbers', () => {
        expect(calc.subtract()).toBe(2);
      });
      test('dividing numbers', () => {
        expect(calc.divide()).toBe(2);
      });
      test('multiplying numbers', () => {
        expect(calc.multiply()).toBe(8);
      });
})
