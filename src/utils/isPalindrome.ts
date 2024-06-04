const isPalindrome = (str: string): boolean => {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reverse = cleanedStr.split('').reverse().join('');
  return cleanedStr === reverse;
};

export default isPalindrome;
