import capitalizeWords from './capitalizeWords';

describe('capitalizeWords', () => {
  it('단어의 첫 글자를 대문자로 변환해야 한다', () => {
    const input = 'Hello';
    const expectedOutput = 'Hello';
    expect(capitalizeWords(input)).toBe(expectedOutput);
  });

  it('각 단어의 첫 글자를 대문자로 변환해야 한다', () => {
    const input = 'hello world';
    const expectedOutput = 'Hello World';
    expect(capitalizeWords(input)).toBe(expectedOutput);
  });

  it('빈 문자열을 입력하면 빈 문자열을 반환해야 한다', () => {
    const input = '';
    const expectedOutput = '';
    expect(capitalizeWords(input)).toBe(expectedOutput);
  });

  it('한글을 넣으면 변함이 없어야 한다', () => {
    const input = '한글';
    const expectedOutput = '한글';
    expect(capitalizeWords(input)).toBe(expectedOutput);
  });
});
