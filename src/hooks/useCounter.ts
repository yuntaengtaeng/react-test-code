import { useState, useCallback } from 'react';

const useCounter = (initNumber: number = 0) => {
  const [count, setCount] = useState(initNumber);

  const increment = useCallback(() => setCount((x) => x + 1), []);
  const decrement = useCallback(() => setCount((x) => x - 1), []);

  return { count, increment, decrement };
};

export default useCounter;
