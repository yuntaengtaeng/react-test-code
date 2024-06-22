import { renderHook, act } from '@testing-library/react-hooks';
import usePreservedCallback from './usePreservedCallback';

describe('usePreservedCallback', () => {
  it('초기 콜백 함수가 올바르게 호출되는지 확인합니다', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => usePreservedCallback(callback));

    act(() => {
      result.current();
    });

    expect(callback).toHaveBeenCalled();
  });

  it('콜백 함수가 갱신된 후에도 올바르게 호출되는지 확인합니다', () => {
    const initialCallback = jest.fn();
    const updatedCallback = jest.fn();

    const { result, rerender } = renderHook(
      ({ callback }) => usePreservedCallback(callback),
      {
        initialProps: { callback: initialCallback },
      }
    );

    act(() => {
      result.current();
    });

    expect(initialCallback).toHaveBeenCalled();
    expect(updatedCallback).not.toHaveBeenCalled();

    rerender({ callback: updatedCallback });

    act(() => {
      result.current();
    });

    expect(updatedCallback).toHaveBeenCalled();
  });

  it('콜백 함수가 인자를 올바르게 전달받는지 확인합니다', () => {
    const callback = jest.fn((a, b) => a + b);
    const { result } = renderHook(() => usePreservedCallback(callback));

    act(() => {
      result.current(1, 2);
    });

    expect(callback).toHaveBeenCalledWith(1, 2);
    expect(callback).toHaveReturnedWith(3);
  });
});
