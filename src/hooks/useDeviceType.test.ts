import { renderHook, act } from '@testing-library/react-hooks';
import useDeviceType from './useDeviceType';

describe('useDeviceType', () => {
  it('창 너비가 768 이하일 때 "Mobile"을 반환해야 합니다', () => {
    global.innerWidth = 500;

    const { result } = renderHook(() => useDeviceType());

    act(() => {
      global.dispatchEvent(new Event('resize'));
    });

    expect(result.current).toBe('Mobile');
  });

  it('창 너비가 768 초과일 때 "Web"을 반환해야 합니다', () => {
    global.innerWidth = 1024;

    const { result } = renderHook(() => useDeviceType());

    act(() => {
      global.dispatchEvent(new Event('resize'));
    });

    expect(result.current).toBe('Web');
  });

  it('모바일 사용자 에이전트일 때 "Mobile"을 반환해야 합니다', () => {
    const userAgentSpy = jest
      .spyOn(global.navigator, 'userAgent', 'get')
      .mockReturnValue('iPhone');

    global.innerWidth = 1024;

    const { result } = renderHook(() => useDeviceType());

    act(() => {
      global.dispatchEvent(new Event('resize'));
    });

    expect(result.current).toBe('Mobile');

    userAgentSpy.mockRestore();
  });
});
