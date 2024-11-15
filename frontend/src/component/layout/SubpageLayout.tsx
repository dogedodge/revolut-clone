import { ReactNode, useEffect, useState } from 'react';
import SubpageHeader from './SubpageHeader';
import PlainScroller from '../scroller/PlainScroller';

interface SubpageLayoutProps {
  title: string;
  children: React.ReactNode;
  onDismiss: () => void;
}

const SubpageLayout = ({ title, children, onDismiss }: SubpageLayoutProps) => {
  const { renderSubpage, handleScroll } = useSubpageLayout(title, onDismiss);

  return renderSubpage(
    <PlainScroller
      onScroll={handleScroll}
      className="relative w-full flex-grow overflow-scroll pl-4 pr-4"
    >
      <div className="text-4xl font-semibold mt-4">{title}</div>
      {children}
    </PlainScroller>,
  );
};

export default SubpageLayout;

export const useSubpageLayout = (title: string, onDismiss: () => void) => {
  const [animationStyle, setAnimationStyle] = useState('translate-x-full');
  const [hideTitle, setHideTitle] = useState(true);

  const handleDismiss = () => {
    setAnimationStyle('translate-x-full');
    setTimeout(() => {
      // navigate('/');
      onDismiss();
    }, 300);
  };

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setAnimationStyle('');
    }, 50);

    return () => {
      window.clearTimeout(timeout);
    };
  }, []);

  const handleScroll = (position: number) => {
    console.log(position);
    if (position > 50 && hideTitle) {
      setHideTitle(false);
    } else if (position <= 50 && !hideTitle) {
      setHideTitle(true);
    }
  };

  const renderSubpage = (children: ReactNode) => (
    <div
      className={`absolute z-20 w-full h-full flex flex-col bg-gray-100 transition-transform duration-300 ${animationStyle}`}
    >
      <SubpageHeader
        title={title}
        hideTitle={hideTitle}
        onClick={handleDismiss}
      ></SubpageHeader>
      {children}
    </div>
  );

  return {
    renderSubpage,
    handleScroll,
  };
};
