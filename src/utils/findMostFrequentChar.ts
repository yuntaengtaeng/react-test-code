const findMostFrequentChar = (str: string): string => {
  // 빈도수를 계산합니다.
  const calcCount = str.split('').reduce((acc, cur) => {
    if (!acc[cur]) {
      acc[cur] = 0;
    }
    acc[cur] += 1;
    return acc;
  }, {} as { [key: string]: number });

  // 최대 빈도수를 찾습니다.
  const max = Math.max(...Object.values(calcCount));

  // 최대 빈도수를 가진 문자를 찾습니다.
  const find = Object.keys(calcCount).find((key) => calcCount[key] === max);

  return find || '';
};

export default findMostFrequentChar;
