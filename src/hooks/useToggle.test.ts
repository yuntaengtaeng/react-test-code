import { renderHook, act } from '@testing-library/react-hooks';
import useToggle from './useToggle';

describe('useToggle', () => {
  it('초기 토글 값이 올바르게 설정되어야 한다', () => {
    const { result } = renderHook(() => useToggle(true));
    expect(result.current.isToggle).toBeTruthy();

    const { result: result2 } = renderHook(() => useToggle());
    expect(result2.current.isToggle).toBeTruthy();
  });

  it('onToggle 함수가 토글 값을 변경하여야 한다.', () => {
    const { result } = renderHook(() => useToggle());

    expect(result.current.isToggle).toBeFalsy();

    act(() => {
      result.current.onToggle();
    });

    expect(result.current.isToggle).toBeTruthy();
  });

  it('onToggle 함수가 여러 번 호출되었을 때 값을 올바르게 반전시켜야 한다', () => {
    const { result } = renderHook(() => useToggle());

    act(() => {
      result.current.onToggle();
    });
    expect(result.current.isToggle).toBeTruthy();

    act(() => {
      result.current.onToggle();
    });
    expect(result.current.isToggle).toBeFalsy();

    act(() => {
      result.current.onToggle();
    });
    expect(result.current.isToggle).toBeTruthy();
  });
});
