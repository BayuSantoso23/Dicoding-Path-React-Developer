import { describe, test } from 'node:test';
import assert from 'node:assert';

function add(numA, numB) {
    if (typeof numA !== 'number' || typeof numB !== 'number') {
        throw new Error('Expected a number');
    }

    return numA + numB;
}

// Pengelompokan test kedalam kategori calculator
describe('Calculator', () => {

  // can use "it" instead of test
  // just import is instead of test
  test('should add correctly', () => {
    // Arrange
    const operandA = 1;
    // Testcase if input is string
  //   const operandA = '5';
    const operandB = 1;

    // Action
    const actualValue = add(operandA, operandB);

    // Assert
    const expectedValue = 2;
    assert.equal(actualValue, expectedValue);
  });

  // Error yang akan diberikan jika input A adalah string
  test('should throw an error if string passed on numA parameter', () => {
      const potentialErrorToBeThrew = () => {
        // Arrange
        const operandA = '5';
        const operandB = 4;
    
        // Action
        add(operandA, operandB);
      };
    
      // Assert
      assert.throws(potentialErrorToBeThrew, Error);
  });
    
  // Error yang akan diberikan jika input B adalah string
  test('should throw an error if string passed on numB parameter', () => {
      const potentialErrorToBeThrew = () => {
      // Arrange
      const operandA = 10;
      const operandB = '8';

      // Action
      add(operandA, operandB);
      };

      // Assert
      assert.throws(potentialErrorToBeThrew, Error);
  });

});