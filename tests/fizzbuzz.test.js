const rewire = require('rewire');

const rewire_fb = rewire('../fizzbuzz.js');
const fizzbuzz= rewire_fb.__get__('fizzbuzz');

test('fizzbuzz - validate input multiple of 3 and 5, expect FizzBuzz',() => {
    const result = fizzbuzz(15);
    expect(result).toBe("FizzBuzz\n");
})

test('fizzbuzz - validate input only multiple of 3, expect Fizz', () => {
    const result = fizzbuzz(21);
    expect(result).toBe("Fizz\n");
})

test('fizzbuzz - validate input only multiple of 5, expect Buzz', () => {
    const result = fizzbuzz(20);
    expect(result).toBe("Buzz\n");
})

test('fizzbuzz - validate invalid data, expect Invalid Item', () => {
    const result = fizzbuzz('abc');
    expect(result).toBe("Invalid Item\n");
})

test('fizzbuzz - validate Input data, Neither multiple of 3 nor 5', () => {
    const result = fizzbuzz(7);
    expect(result).toBe("Divided 7 by 3\nDivided 7 by 5\n");
})