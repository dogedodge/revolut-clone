import { useEffect, useState } from 'react';
import SubpageHeader from './SubpageHeader';
import ScrollerComponent from '../ScrollerComponent';

interface SubpageLayoutProps {
  title: string;
  children: React.ReactNode;
  onDismiss: () => void;
}

const SubpageLayout = ({ title, children, onDismiss }: SubpageLayoutProps) => {
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

  return (
    <div
      className={`absolute z-20 w-full h-full flex flex-col bg-gray-100 transition-transform duration-300 ${animationStyle}`}
    >
      <SubpageHeader
        title={title}
        hideTitle={hideTitle}
        onClick={handleDismiss}
      ></SubpageHeader>
      <ScrollerComponent
        onScroll={handleScroll}
        className="relative w-full flex-grow overflow-scroll pl-4 pr-4"
      >
        <div className="text-4xl font-semibold mt-4">{title}</div>

        {children}
      </ScrollerComponent>
    </div>
  );
};

export default SubpageLayout;