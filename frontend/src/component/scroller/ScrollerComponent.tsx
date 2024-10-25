import { ReactNode, useCallback, useEffect, useRef } from 'react';

interface ScrollerComponentProps {
  className?: string;
  children: ReactNode;
  onScroll: (position: number) => void;
}

const ScrollerComponent = ({
  className = '',
  children,
  onScroll,
}: ScrollerComponentProps) => {
  const scrollRef = useScroll(onScroll);

  return (
    <div ref={scrollRef} className={`overflow-scroll ${className}`}>
      {children}
    </div>
  );
};

export const useScroll = (
  onScroll: ((position: number) => void) | undefined,
) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const handleScroll = useCallback(() => {
    if (scrollRef.current) {
      onScroll && onScroll(scrollRef.current.scrollTop);
    }
  }, [onScroll]);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      onScroll && scrollElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollElement) {
        onScroll && scrollElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, [handleScroll, onScroll]);

  return scrollRef;
};

export default ScrollerComponent;
