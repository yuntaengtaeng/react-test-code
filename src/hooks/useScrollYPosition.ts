import { useState, useEffect } from 'react';

const useScrollYPosition = () => {
  const [scrollPosition, setScrollPosition] = useState({
    position: 0,
    percentage: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      const maxScrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (currentPosition / maxScrollHeight) * 100;

      setScrollPosition({
        position: currentPosition,
        percentage: scrollPercentage,
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
};

export default useScrollYPosition;
