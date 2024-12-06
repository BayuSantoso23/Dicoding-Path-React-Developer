import sum from './index.js';
import { describe, test } from 'node:test';
import assert from 'node:assert';

describe('Sum', () => {
    test('should add correctly', () =>{
        const num1 = 9;
        const num2 = 10;

        const actualValue = sum(num1, num2);

        const expectedValue = 19;
        assert.equal(actualValue, expectedValue)
    });
    test('num1 should be a number', () =>{
        const potentialErrorToBeThrew = () =>{
            const num1 = '9';
            const num2 = 10;

            sum(num1, num2);
        };

        assert.throws(potentialErrorToBeThrew, Error);
    });
    test('num2 should be a number', () =>{
        const potentialErrorToBeThrew = () =>{
            const num1 = 9;
            const num2 = '10';

            sum(num1, num2);
        };

        assert.throws(potentialErrorToBeThrew, Error);
    });
})