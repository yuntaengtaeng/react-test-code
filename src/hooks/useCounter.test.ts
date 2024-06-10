import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from './useCounter';

describe('useCounter', () => {
  it('초기 카운트가 올바르게 설정되어야 한다', () => {
    const { result } = renderHook(() => useCounter(10));
    expect(result.current.count).toBe(10);
  });

  it('increment 함수가 카운트를 증가시켜야 한다', () => {
    const { result } = renderHook(() => useCounter(0));

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });

  it('decrement 함수가 카운트를 감소시켜야 한다', () => {
    const { result } = renderHook(() => useCounter(0));

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(-1);
  });
});
