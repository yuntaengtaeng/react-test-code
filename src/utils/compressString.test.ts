import compressString from './compressString';

describe('compressString', () => {
  it('반복되는 문자열', () => {
    const input = 'aabcccccaaa';
    const expectedOutput = 'a2bc5a3';
    expect(compressString(input)).toBe(expectedOutput);
  });

  it('반복되지 않는 문자열', () => {
    const input = 'abcd';
    const expectedOutput = 'abcd';
    expect(compressString(input)).toBe(expectedOutput);
  });

  it('2번 씩 반복되는 문자열', () => {
    const input = 'aabbcc';
    const expectedOutput = 'a2b2c2';
    expect(compressString(input)).toBe(expectedOutput);
  });

  it('대소문자 구분', () => {
    const input = 'aaAAaa';
    const expectedOutput = 'a2A2a2';
    expect(compressString(input)).toBe(expectedOutput);
  });

  it('빈 문자열', () => {
    const input = '';
    const expectedOutput = '';
    expect(compressString(input)).toBe(expectedOutput);
  });
});
