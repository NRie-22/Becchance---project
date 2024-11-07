import { useEffect, useState } from 'react';

const useAnimation = (name: string) => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [animationComplete, setAnimationComplete] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex < name.length - 1) {
        setActiveIndex((prev) => prev + 1);
      } else {
        setAnimationComplete(true);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [activeIndex, name.length]);

  return { activeIndex, animationComplete };
};

export default useAnimation;
