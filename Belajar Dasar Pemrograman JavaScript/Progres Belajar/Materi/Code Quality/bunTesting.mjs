import { describe, it, expect } from 'bun:test';
import { add } from './calculator.mjs';
 
describe('Calculator', () => {
  it('should add correctly', () => {
    // Arrange
    const operandA = 1;
    const operandB = 1;
 
    // Action
    const actualValueFirst = add(operandA, operandB);
 
    // Assert
    const expectedValueFirst = 2;
    // Bun using expect & tobe instead of assert
    // the rest is same
    expect(actualValueFirst).toBe(expectedValueFirst);
  });
 
  it('should throw an error if string passed on numA parameter', () => {
    const potentialErrorToBeThrew = () => {
      // Arrange
      const operandA = '5';
      const operandB = 4;
 
      // Action
      add(operandA, operandB);
    };
 
    // Assert
    expect(potentialErrorToBeThrew).toThrow(Error);
  });
 
  it('should throw an error if string passed on numB parameter', () => {
    const potentialErrorToBeThrew = () => {
      // Arrange
      const operandA = 10;
      const operandB = '8';
 
      // Action
      add(operandA, operandB);
    };
 
    // Assert
    expect(potentialErrorToBeThrew).toThrow(Error);
  });
});