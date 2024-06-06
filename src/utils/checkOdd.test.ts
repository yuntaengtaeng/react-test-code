import checkOdd from './checkOdd';

describe('checkOdd', () => {
  it('홀수임으로 true를 반환해야한다.', async () => {
    const result = await checkOdd(1);
    expect(result).toBeTruthy();
  });

  it('짝수임으로 false를 반환해야한다.', async () => {
    const result = await checkOdd(2);
    expect(result).toBeFalsy();
  });
});
