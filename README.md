## It에 관한 생각?

### 개인적인 고민
- Q : it 작성 언어
  - A : 팀원이 주로 사용하는 언어를 기준으로 세움

#### 내가 생각하는 bad case & best case
bad
```
  it("구매 버튼 클릭")
```

best
```
  it("구매 버튼 클릭 시 Modal을 띄운다.")
```
A를 만족하면 B가 도출되는 형식으로 작성하기

## 간단한 문법 가이드

### **일반 Matcher**

- **`toBe(value)` : 정확히 일치하는지 확인합니다. 객체의 경우 메모리 상 동일한 객체인지 확인합니다.**
- **`toEqual(value)`  : 객체나 배열의 모든 필드를 재귀적으로 비교하여 값이 동일한지 확인합니다.**
- **`toBeNull()` : 값이 `null`인지 확인합니다.**
- **`toBeUndefined()` : 값이 `undefined`인지 확인합니다.**
- **`toBeDefined()` : 값이 `undefined`가 아닌지 확인합니다.**
- **`toBeTruthy()`  : 값이 참으로 평가되는지 확인합니다.**
- **`toBeFalsy()`  : 값이 거짓으로 평가되는지 확인합니다.**
- **`toBeGreaterThan(number)` : 숫자가 주어진 값보다 큰지 확인합니다.**
- **`toBeGreaterThanOrEqual(number)` : 숫자가 주어진 값보다 크거나 같은지 확인합니다.**
- **`toBeLessThan(number)` : 숫자가 주어진 값보다 작은지 확인합니다.**
- **`toBeLessThanOrEqual(number)` : 숫자가 주어진 값보다 작거나 같은지 확인합니다.**
- **`toBeCloseTo(number, numDigits)` : 부동 소수점 숫자가 주어진 숫자와 근사한지 확인합니다.**
- **`toMatch(regexpOrString)` : 문자열이 정규 표현식이나 주어진 문자열과 일치하는지 확인합니다.**
- **`toContain(item)` : 배열이나 iterable에 특정 항목이 포함되어 있는지 확인합니다.**
- **`toThrow(error)` : 함수가 에러를 던지는지 확인합니다**

### **`not` 속성**

**`not` 속성은 matcher의 결과를 반대로 수행할 수 있게 해줍니다. 즉, 특정 조건이 성립하지 않음을 확인할 때 사용합니다.**

## Custom Hook을 작성하면서 배운 문법 정리

### act
act는 React의 상태 업데이트를 동기적으로 처리하기 위한 함수입니다. 테스트 중에 상태 업데이트나 DOM 변화를 감지하여 그에 맞는 행동을 할 수 있도록 합니다.
```
import { act } from '@testing-library/react-hooks';

act(() => {
  // 상태 업데이트나 DOM 변화를 여기서 처리
});
```

### renderHook
renderHook은 React hook을 테스트하기 위해 필요합니다. hook을 렌더링하고 그 결과를 반환하여 테스트할 수 있게 합니다.
```
import { renderHook } from '@testing-library/react-hooks';

const { result } = renderHook(() => useCustomHook());
```

### rerender
rerender는 hook을 다시 렌더링하여 필요한 경우 업데이트된 props를 테스트할 수 있게 합니다.
```
const { rerender } = renderHook(({ prop }) => useCustomHook(prop), {
  initialProps: { prop: initialValue },
});

rerender({ prop: updatedValue });
```

### global.dispatchEvent
global.dispatchEvent는 전역적으로 이벤트를 발생시키는 함수입니다. 브라우저의 전역 이벤트를 모킹하여 테스트할 때 사용됩니다.
```
global.dispatchEvent(new Event('resize'));
```

### jest.spyOn(global.navigator, 'userAgent', 'get').mockReturnValue('iPhone')
이 코드는 global.navigator.userAgent를 모킹하여 특정 값을 반환하도록 합니다. 주로 브라우저 환경을 모킹할 때 사용됩니다.
```
jest.spyOn(global.navigator, 'userAgent', 'get').mockReturnValue('iPhone');
```

### jest.fn
jest.fn은 Jest에서 제공하는 모킹 함수입니다. 테스트 중에 특정 함수 호출을 감지하고 원하는 동작을 시뮬레이션할 수 있습니다.
```
const mockFunction = jest.fn();
mockFunction();
expect(mockFunction).toHaveBeenCalled();
```

### beforeEach
beforeEach는 각 테스트가 실행되기 전에 실행되는 코드를 정의합니다. 주로 초기화 작업에 사용됩니다.
```
beforeEach(() => {
  // 각 테스트 전에 실행할 코드
});
```
