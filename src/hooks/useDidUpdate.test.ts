import { renderHook } from '@testing-library/react-hooks';
import useDidUpdate from './useDidUpdate';

describe('useDidUpdate', () => {
  it('컴포넌트가 처음 렌더링될 때는 effect가 실행되지 않아야 한다', () => {
    const effect = jest.fn();

    renderHook(() => useDidUpdate(effect, []));

    expect(effect).not.toHaveBeenCalled();
  });

  it('deps가 변경되었을 때 effect가 실행되어야 한다', () => {
    let deps = [1];
    const effect = jest.fn();

    const { rerender } = renderHook(() => useDidUpdate(effect, deps));

    expect(effect).not.toHaveBeenCalled();

    deps = [2];
    rerender();

    expect(effect).toHaveBeenCalledTimes(1);
  });

  it('클린업 함수가 제대로 호출되어야 한다', () => {
    const cleanup = jest.fn();
    const effect = jest.fn(() => cleanup);
    let deps = [1];

    const { rerender, unmount } = renderHook(() => useDidUpdate(effect, deps));

    expect(effect).not.toHaveBeenCalled();

    deps = [2];
    rerender();

    expect(effect).toHaveBeenCalledTimes(1);

    unmount();
    expect(cleanup).toHaveBeenCalledTimes(1);
  });
});
