import { useState } from 'react';

const useToggle = (initialValue = false) => {
  const [isToggle, setIsToggle] = useState(initialValue);

  const onToggle = () => {
    setIsToggle((prev) => !prev);
  };

  return { isToggle, onToggle };
};

export default useToggle;
