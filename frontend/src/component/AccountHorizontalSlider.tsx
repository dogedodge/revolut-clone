import React, { useState } from 'react';
import AccountSlide, {
  AccountSlideEvent,
  AccountSlideProps,
} from './AccountSlide';

interface AccountHorizontalSliderProps {
  slideData: AccountSlideProps[];
  onClick?: (event: AccountSlideEvent) => void;
}

const AccountHorizontalSlider: React.FC<AccountHorizontalSliderProps> = ({
  slideData,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [initialX, setInitialX] = useState(0);
  const [currentX, setCurrentX] = useState(0);

  const handleDragStart = (e: React.MouseEvent) => {
    setIsDragging(true);
    const { clientX } = e;
    setInitialX(clientX - currentX);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDragMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const { clientX } = e;
    setCurrentX(clientX - initialX);
  };

  return (
    <div
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onMouseMove={handleDragMove}
      className={`relative w-[200vw] flex flex-row`}
      style={{ transform: `translate(${currentX}px, 0)` }}
    >
      {slideData.map((data) => (
        <AccountSlide key={data.accountId} {...data}></AccountSlide>
      ))}
    </div>
  );
};

export default AccountHorizontalSlider;
