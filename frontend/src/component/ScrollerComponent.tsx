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
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = useCallback(() => {
    if (scrollRef.current) {
      onScroll(scrollRef.current.scrollTop);
    }
  }, [onScroll]);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, [handleScroll]);

  return (
    <div ref={scrollRef} className={`overflow-scroll ${className}`}>
      {children}
    </div>
  );
};

export default ScrollerComponent;
