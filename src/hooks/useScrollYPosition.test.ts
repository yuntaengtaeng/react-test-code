// useScrollYPosition.test.tsx
import { renderHook } from '@testing-library/react-hooks';
import useScrollYPosition from './useScrollYPosition';

describe('useScrollYPosition', () => {
  it('초기 스크롤 위치는 0이어야 합니다', () => {
    const { result } = renderHook(() => useScrollYPosition());

    expect(result.current).toEqual({
      position: 0,
      percentage: 0,
    });
  });

  it('스크롤이 발생하면 스크롤 위치와 퍼센티지가 업데이트되어야 합니다', () => {
    const { result } = renderHook(() => useScrollYPosition());

    expect(result.current).toEqual({
      position: 0,
      percentage: 0,
    });

    const maxScrollHeight = 1000;
    const currentPosition = 500;
    Object.defineProperty(document.documentElement, 'scrollHeight', {
      value: maxScrollHeight + window.innerHeight,
      writable: true,
    });
    Object.defineProperty(window, 'scrollY', {
      value: currentPosition,
      writable: true,
    });

    window.dispatchEvent(new Event('scroll'));

    expect(result.current).toEqual({
      position: currentPosition,
      percentage: (currentPosition / maxScrollHeight) * 100,
    });
  });
});
