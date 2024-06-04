import findMostFrequentChar from './findMostFrequentChar';

describe('findMostFrequentChar 함수 테스트', () => {
  it('빈 문자열', () => {
    const input = '';
    const result = findMostFrequentChar(input);
    expect(result).toBe('');
  });

  it('단일 문자', () => {
    const input = 'a';
    const result = findMostFrequentChar(input);
    expect(result).toBe('a');
  });

  it('중복된 문자가 있는 문자열', () => {
    const input = 'abacabad';
    const result = findMostFrequentChar(input);
    expect(result).toBe('a');
  });

  it('모든 문자가 동일한 빈도로 등장하는 경우', () => {
    const input = 'abcabc';
    const result = findMostFrequentChar(input);
    expect(result).toBe('a');
  });

  it('특수 문자와 공백이 포함된 문자열', () => {
    const input = 'a b a b @ @ !';
    const result = findMostFrequentChar(input);
    expect(result).toBe(' ');
  });
});
