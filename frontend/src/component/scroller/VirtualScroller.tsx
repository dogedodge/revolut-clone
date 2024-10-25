import { RefObject, useCallback, useEffect, useState } from 'react';

export const useVirtualScroll = (
  ref: RefObject<HTMLDivElement>,
  childHeightList: number[], // will append more and more data
) => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(0);

  useEffect(() => {
    onScroll(); // init endIndex at beginning
  }, []);

  const onScroll = useCallback(() => {
    const parentHeight = ref.current!.clientHeight;
    const scrollTop = ref.current!.scrollTop;
    let totalHeight = 0;
    let reachStart = false;
    for (let i = 0; i < childHeightList.length; i++) {
      totalHeight += childHeightList[i];
      if (!reachStart) {
        if (totalHeight > scrollTop) {
          // _startIndex = i;
          setStartIndex(i);
          reachStart = true;
        }
      }

      if (totalHeight > scrollTop + parentHeight) {
        // _endIndex = i;
        setEndIndex(i);
        break;
      }
    }
  }, [childHeightList.length]);

  return {
    onScroll,
    startIndex,
    endIndex,
  };
};
