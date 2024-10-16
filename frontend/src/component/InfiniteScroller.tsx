import { ReactNode, useEffect, useRef } from 'react';
import { useScroll } from './ScrollerComponent';

interface InfiniteScrollerProps {
  onScroll?: (position: number) => void;
  hasMore?: boolean;
  isLoading?: boolean;
  loadMore?: () => void;
  children: ReactNode;
  className?: string;
}

const InfiniteScroller = ({
  onScroll,
  hasMore = false,
  isLoading = false,
  loadMore,
  children,
  className = '',
}: InfiniteScrollerProps) => {
  const scrollRef = useScroll(onScroll);
  const sentryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLoading && hasMore) {
            loadMore && loadMore();
          }
        });
      },
      {
        root: scrollRef.current,
      },
    );
    if (sentryRef.current) {
      observer.observe(sentryRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isLoading, hasMore]);

  return (
    <div ref={scrollRef} className={`overflow-scroll ${className}`}>
      {children}
      {(isLoading || hasMore) && (
        <div ref={sentryRef} className="h-[1px] w-full"></div>
      )}
    </div>
  );
};

export default InfiniteScroller;
