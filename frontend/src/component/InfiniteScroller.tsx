import { ReactNode, useEffect, useRef } from 'react';

interface InfiniteScrollerProps {
  hasMore: boolean;
  isLoading: boolean;
  loadMore: () => void;
  children: ReactNode;
  className?: string;
}

const InfiniteScroller = ({
  hasMore,
  isLoading,
  loadMore,
  children,
  className,
}: InfiniteScrollerProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sentryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLoading && hasMore) {
            loadMore();
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
