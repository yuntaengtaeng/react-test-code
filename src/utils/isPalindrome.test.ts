import isPalindrome from './isPalindrome';

describe('isPalindrome 함수 테스트', () => {
  it('case "A man, a plan, a canal, Panama"', () => {
    const input = 'A man, a plan, a canal, Panama';
    const result = isPalindrome(input);
    expect(result).toBeTruthy();
  });

  it('case "racecar"', () => {
    const input = 'racecar';
    const result = isPalindrome(input);
    expect(result).toBeTruthy();
  });

  it('case "hello"', () => {
    const input = 'hello';
    const result = isPalindrome(input);
    expect(result).toBeFalsy();
  });
});
