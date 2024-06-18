import { useEffect, useState } from 'react';
import { Skill } from '../types';

const useTechSearch = (initSkills?: Skill[]) => {
  const [selectedTechs, setSelectedTechs] = useState<Skill[]>([]);
  const selectedTechIds = selectedTechs.map((tech) => tech.id);

  const onTechSelect = (skill: Skill) => {
    const skillIdSet = new Set(selectedTechIds);

    if (skillIdSet.has(skill.id)) {
      const updatedTechs = selectedTechs.filter((tech) => tech.id !== skill.id);
      setSelectedTechs(updatedTechs);
    } else {
      setSelectedTechs([...selectedTechs, skill]);
    }
  };

  useEffect(() => {
    setSelectedTechs(initSkills || []);
  }, [initSkills]);

  const onResetHandler = () => {
    setSelectedTechs([]);
  };

  return {
    selectedTechs,
    selectedTechIds,
    handler: {
      onTechSelect,
      onResetHandler,
    },
  };
};

export default useTechSearch;
