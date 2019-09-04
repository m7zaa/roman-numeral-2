import { romanNumerals } from './../src/roman-numerals.js';

describe('roman numerals', function() {
  it('should generate roman numeral from input number', function() {
    expect(romanNumerals(4001)).toEqual("Roman Numerals only go up to 3,999.");
    expect(romanNumerals(4)).toEqual("V");

  });
});
