import { renderHook, act } from '@testing-library/react-hooks';
import useLocalStorage from './useLocalStorage';

describe('useLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('초기값을 설정할 수 있어야 한다', () => {
    const { result } = renderHook(() =>
      useLocalStorage<string>('testKey', 'initialValue')
    );
    const [storedValue] = result.current;

    expect(storedValue).toBe('initialValue');
  });

  it('값을 저장하고 가져올 수 있어야 한다', () => {
    const { result } = renderHook(() =>
      useLocalStorage<string>('testKey', 'initialValue')
    );
    const [storedValue, setStoredValue] = result.current;

    act(() => {
      setStoredValue('newValue');
    });

    const [newStoredValue] = result.current;
    expect(newStoredValue).toBe('newValue');
    expect(localStorage.getItem('testKey')).toBe(JSON.stringify('newValue'));
  });

  it('로컬 스토리지에 이미 저장된 값을 가져올 수 있어야 한다', () => {
    localStorage.setItem('testKey', JSON.stringify('existingValue'));
    const { result } = renderHook(() =>
      useLocalStorage<string>('testKey', 'initialValue')
    );
    const [storedValue] = result.current;

    expect(storedValue).toBe('existingValue');
  });
});
