import uniqueArray from './uniqueArray';

describe('unique 함수 테스트', () => {
  it('중복된 요소를 제거해야 한다', () => {
    const input = [1, 2, 2, 3, 4, 4, 5];
    const expectedOutput = [1, 2, 3, 4, 5];
    expect(uniqueArray(input)).toEqual(expectedOutput);
  });

  it('빈 배열을 입력하면 빈 배열을 반환해야 한다', () => {
    const input: number[] = [];
    const expectedOutput: number[] = [];
    expect(uniqueArray(input)).toEqual(expectedOutput);
  });
});
