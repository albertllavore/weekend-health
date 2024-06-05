import { findWords, getCharCounts } from '../findWords';

describe('getCharCounts', () => {
  test('counts characters correctly', () => {
    expect(getCharCounts('albert')).toEqual({ a: 1, l: 1, b: 1, e: 1, r: 1, t: 1 });
    expect(getCharCounts('')).toEqual({});
    expect(getCharCounts('aaabbbccc')).toEqual({ a: 3, b: 3, c: 3 });
  });
});

describe('findWords', () => {
  test('finds words that can be formed from the input string', () => {
    expect(findWords('ate', ['ate', 'eat', 'tea', 'dog', 'do', 'god', 'goo', 'go', 'good']))
      .toEqual(['ate', 'eat', 'tea']);
    expect(findWords('oogd', ['ate', 'eat', 'tea', 'dog', 'do', 'god', 'goo', 'go', 'good']))
      .toEqual(['dog', 'do', 'god', 'goo', 'go', 'good']);
    expect(findWords('abcd', ['abc', 'abcd', 'a', 'bcd', 'bcda']))
      .toEqual(['abc', 'abcd', 'a', 'bcd', 'bcda']);
  });

  test('edge cases - input with single or repeated character(s)', () => {
    expect(findWords('aaaaaazzzzzzzz', ['a', 'ate', 'eat', 'tea', 'dog', 'do', 'god', 'goo', 'go', 'good']))
      .toEqual(['a']);
    expect(findWords('a', ['z', 'ate', 'eat', 'tea', 'dog', 'do', 'god', 'goo', 'go', 'good', 'a']))
      .toEqual(['a']);
    expect(findWords('azz', ['z', 'ate', 'eat', 'tea', 'dog', 'do', 'god', 'goo', 'go', 'good', 'a', 'zz', 'az']))
      .toEqual(['z', 'a', 'zz', 'az']);
    expect(findWords('az', ['z', 'ate', 'eat', 'tea', 'dog', 'do', 'god', 'goo', 'go', 'good', 'a', 'aaaaazzzzz', 'az']))
      .toEqual(['z', 'a', 'az']);
  });

  test('returns an empty array when no words can be formed', () => {
    expect(findWords('xyz', ['ate', 'eat', 'tea', 'dog', 'do', 'god', 'goo', 'go', 'good']))
      .toEqual([]);
    expect(findWords('', ['a', 'b', 'c']))
      .toEqual([]);
    expect(findWords(' ', ['z', 'ate', 'eat', 'tea', 'dog', 'do', 'god', 'goo', 'go', 'good', 'a', 'zz', 'az']))
      .toEqual([]);
  });
});
