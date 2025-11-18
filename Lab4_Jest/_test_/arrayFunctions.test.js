const { first, last, myColor, chunk } = require('../arrayFunctions');

describe('first function tests', () => {
    test('should return first n elements when n is provided', () => {
        expect(first([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
        expect(first(['a', 'b', 'c'], 2)).toEqual(['a', 'b']);
    });

    test('should return first element when n is null/undefined', () => {
        expect(first([1, 2, 3], null)).toBe(1);
        expect(first([10, 20, 30])).toBe(10);
    });

    test('should return empty array for null or undefined array', () => {
        expect(first(null, 2)).toEqual([]);
        expect(first(undefined, 3)).toEqual([]);
    });

    test('should return empty array for n <= 0', () => {
        expect(first([1, 2, 3], 0)).toEqual([]);
        expect(first([1, 2, 3], -1)).toEqual([]);
    });

    test('should handle empty array', () => {
        expect(first([], 2)).toEqual([]);
    });

    test('should handle n larger than array length', () => {
        expect(first([1, 2, 3], 10)).toEqual([1, 2, 3]);
    });
});

describe('last function tests', () => {
    test('should return last n elements when n is provided', () => {
        expect(last([1, 2, 3, 4, 5], 2)).toEqual([4, 5]);
        expect(last(['x', 'y', 'z'], 1)).toEqual(['z']);
    });

    test('should return last element when n is null/undefined', () => {
        expect(last([1, 2, 3], null)).toBe(3);
        expect(last([10, 20, 30])).toBe(30);
    });

    test('should return empty array for null or undefined array', () => {
        expect(last(null, 2)).toEqual([]);
        expect(last(undefined, 3)).toEqual([]);
    });

    test('should handle n larger than array length', () => {
        expect(last([1, 2, 3], 5)).toEqual([1, 2, 3]);
    });

    test('should handle empty array', () => {
        expect(last([], 2)).toEqual([]);
    });

    test('should handle n = 0', () => {
        expect(last([1, 2, 3], 0)).toEqual([]);
    });
});

describe('string concatenation tests', () => {
    test('toString should return comma-separated string', () => {
        expect(myColor.toString()).toBe("Red,Green,White,Black");
    });

    test('join() with default separator should return comma-separated string', () => {
        expect(myColor.join()).toBe("Red,Green,White,Black");
    });

    test("join('') should return concatenated string without separators", () => {
        expect(myColor.join('')).toBe("RedGreenWhiteBlack");
    });

    test("join('-') should return string with hyphen separators", () => {
        expect(myColor.join('-')).toBe("Red-Green-White-Black");
    });

    test("join(' ') should return string with space separators", () => {
        expect(myColor.join(' ')).toBe("Red Green White Black");
    });
});

describe('chunk function tests', () => {
    test('should chunk array into sub-arrays of given size', () => {
        expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
        expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
    });

    test('should handle exact division', () => {
        expect(chunk([1, 2, 3, 4, 5, 6], 3)).toEqual([[1, 2, 3], [4, 5, 6]]);
    });

    test('should handle size larger than array length', () => {
        expect(chunk([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
        expect(chunk([1], 10)).toEqual([[1]]);
    });

    test('should handle empty array', () => {
        expect(chunk([], 2)).toEqual([]);
        expect(chunk([], 5)).toEqual([]);
    });

    test('should handle size of 1', () => {
        expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
    });

    test('should handle different data types', () => {
        expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
    });
});