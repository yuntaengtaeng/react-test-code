const compressString = (s: string): string => {
  const split = s.split('');

  let result = '';

  let tempString = '';
  let tempCount = 0;

  split.forEach((char) => {
    if (tempString === char) {
      tempCount++;
    } else {
      if (tempString) {
        result += `${tempString}${tempCount > 1 ? tempCount : ''}`;
      }

      tempString = char;
      tempCount = 1;
    }
  });

  // 마지막 문자 처리
  if (tempString) {
    result += `${tempString}${tempCount > 1 ? tempCount : ''}`;
  }

  return result;
};

export default compressString;
