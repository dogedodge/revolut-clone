import { useCallback, useMemo, useState } from 'react';

const useClickEffect = (onClick?: () => void) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = useCallback(() => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);
    if (onClick) {
      onClick();
    }
  }, [onClick, setIsClicked]);

  return useMemo(() => {
    return { isClicked, handleClick };
  }, [isClicked, handleClick]);
};

export default useClickEffect;
