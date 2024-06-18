// useTechSearch.test.tsx
import { renderHook, act } from '@testing-library/react-hooks';
import useTechSearch from './useTechSearch';
import { Skill } from '../types';

const mockSkill1: Skill = { id: 1, name: 'JavaScript' };
const mockSkill2: Skill = { id: 2, name: 'TypeScript' };

describe('useTechSearch', () => {
  it('초기 스킬이 없을 때 selectedTechs는 빈 배열이어야 합니다', () => {
    const { result } = renderHook(() => useTechSearch());

    expect(result.current.selectedTechs).toEqual([]);
    expect(result.current.selectedTechIds).toEqual([]);
  });

  it('초기 스킬이 주어졌을 때 selectedTechs에 초기 스킬이 설정되어야 합니다', () => {
    const { result } = renderHook(() => useTechSearch([mockSkill1]));

    expect(result.current.selectedTechs).toEqual([mockSkill1]);
    expect(result.current.selectedTechIds).toEqual([1]);
  });

  it('onTechSelect가 호출되면 스킬이 추가/제거 되어야 합니다', () => {
    const { result } = renderHook(() => useTechSearch());

    act(() => {
      result.current.handler.onTechSelect(mockSkill1);
    });

    expect(result.current.selectedTechs).toEqual([mockSkill1]);
    expect(result.current.selectedTechIds).toEqual([1]);

    act(() => {
      result.current.handler.onTechSelect(mockSkill1);
    });

    expect(result.current.selectedTechs).toEqual([]);
    expect(result.current.selectedTechIds).toEqual([]);
  });

  it('onResetHandler가 호출되면 selectedTechs가 초기화되어야 합니다', () => {
    const { result } = renderHook(() => useTechSearch([mockSkill1]));

    act(() => {
      result.current.handler.onResetHandler();
    });

    expect(result.current.selectedTechs).toEqual([]);
    expect(result.current.selectedTechIds).toEqual([]);
  });

  it('initSkills가 변경되면 selectedTechs가 업데이트되어야 합니다', () => {
    const { result, rerender } = renderHook(
      ({ skills }) => useTechSearch(skills),
      {
        initialProps: { skills: [mockSkill1] },
      }
    );

    expect(result.current.selectedTechs).toEqual([mockSkill1]);
    expect(result.current.selectedTechIds).toEqual([1]);

    rerender({ skills: [mockSkill2] });

    expect(result.current.selectedTechs).toEqual([mockSkill2]);
    expect(result.current.selectedTechIds).toEqual([2]);
  });
});
