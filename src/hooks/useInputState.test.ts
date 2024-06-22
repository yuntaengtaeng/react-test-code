import { renderHook, act } from '@testing-library/react-hooks';
import useInputState from './useInputState';

describe('useInputState', () => {
  it('초기 값이 제공되지 않았을 때 기본 값은 빈 문자열이어야 합니다', () => {
    const { result } = renderHook(() => useInputState());

    expect(result.current[0]).toBe('');
  });

  it('초기 값이 제공되었을 때 해당 값이 초기 값으로 설정되어야 합니다', () => {
    const { result } = renderHook(() => useInputState('initial'));

    expect(result.current[0]).toBe('initial');
  });

  it('onValueChangeHandler가 호출되면 값이 변경되어야 합니다', () => {
    const { result } = renderHook(() => useInputState('initial'));

    act(() => {
      result.current[1]('new value');
    });

    expect(result.current[0]).toBe('new value');
  });

  it('값을 포맷팅하기 위한 함수가 제공되었을 때 포맷팅된 값이 설정되어야 합니다', () => {
    const formatValue = (value: string) => value.toUpperCase();
    const { result } = renderHook(() => useInputState('initial', formatValue));

    act(() => {
      result.current[1]('new value');
    });

    expect(result.current[0]).toBe('NEW VALUE');
  });

  it('formatValue 함수가 변경되었을 때, 새로운 formatValue 함수가 사용되어야 합니다', () => {
    const formatValue = (value: string) => value.toLowerCase();
    const { result, rerender } = renderHook(
      ({ initial, formatter }) => useInputState(initial, formatter),
      {
        initialProps: {
          initial: 'INITIAL',
          formatter: (value: string) => value.toUpperCase(),
        },
      }
    );

    expect(result.current[0]).toBe('INITIAL');

    rerender({ initial: 'INITIAL', formatter: formatValue });

    act(() => {
      result.current[1]('NEW VALUE');
    });

    expect(result.current[0]).toBe('new value');
  });
});
