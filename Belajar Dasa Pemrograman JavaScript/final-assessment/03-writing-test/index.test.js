import { sum } from './index.js';
import { describe, test } from 'node:test';
import assert from 'node:assert';

describe('Penjumlahan', () => {
    test('Jika berhasil', () => {
        const num1 = 10;
        const num2 = 10;
    
        const actualValue= sum(num1,num2);
    
        const expectedValue = 20;
        assert.equal(actualValue, expectedValue);
    });
})