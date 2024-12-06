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

    // Kondisi ketika dimana angka 1 atau 2 bukan bernilai angka
    test('num1 should be a number', () =>{
        const num1 = '9';
        const num2 = 10;

        const actualValue = sum(num1, num2);
        const expectedValue = 0;

        assert.equal(actualValue, expectedValue);
    });
    test('num2 should be a number', () =>{
        const num1 = 9;
        const num2 = '10';

        const actualValue = sum(num1, num2);
        const expectedValue = 0;

        assert.equal(actualValue, expectedValue);
    });

    // Kondisi ketika dimana angka 1 atau 2 kurang dari 0 atau negatif
    test('num1 should be greater than 0', () =>{
        const num1 = -10;
        const num2 = 10;

        const actualValue = sum(num1, num2);
        const expectedValue = 0;

        assert.equal(actualValue, expectedValue);
    });
    test('num2 should be greater than 0', () =>{
        const num1 = 9;
        const num2 = -10;

        const actualValue = sum(num1, num2);
        const expectedValue = 0;

        assert.equal(actualValue, expectedValue);
    });
})