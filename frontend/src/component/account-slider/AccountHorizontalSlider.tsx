import React, { useEffect, useRef, useState } from 'react';
import AccountSlide, { AccountSlideEvent } from './AccountSlide';

import Slider, { Settings } from 'react-slick';
import { AccountData } from '../../interface';

interface CustomDotsProps {
  currentSlide: number;
  slideCount: number;
}
const CustomDots: React.FC<CustomDotsProps> = ({
  currentSlide,
  slideCount,
}) => {
  return (
    <ul className="flex flex-row space-x-2 items-center">
      {Array.from({ length: slideCount! }).map((_, i) => (
        <li
          key={i}
          className={`${i === currentSlide ? 'h-1.5 w-1.5' : 'h-1 w-1 opacity-70'} bg-gray-100 rounded-full`}
        ></li>
      ))}
    </ul>
  );
};

const settings: Settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

interface AccountHorizontalSliderProps {
  accounts: AccountData[];
  onClick: (event: AccountSlideEvent) => void;
  currentSlide?: number;
  onSlideChange: (slideIndex: number) => void;
}

const AccountHorizontalSlider = ({
  accounts,
  onClick,
  currentSlide = 0,
  onSlideChange,
}: AccountHorizontalSliderProps) => {
  const slideCount = accounts.length;
  const ref = useRef<Slider>(null);
  const [dotIndex, setDotIndex] = useState(currentSlide); // used to controll CustomDots

  const handleSliderChange = (slideIndex: number) => {
    setDotIndex(slideIndex);
    onSlideChange(slideIndex);
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.slickGoTo(currentSlide);
    }
  }, [currentSlide]);

  return (
    <div className="relative">
      <div className="w-screen flex justify-center absolute bottom-28">
        <CustomDots
          slideCount={slideCount}
          currentSlide={dotIndex}
        ></CustomDots>
      </div>

      <Slider ref={ref} {...settings} afterChange={handleSliderChange}>
        {accounts.map((data) => (
          <AccountSlide
            key={data.id}
            account={data}
            onClick={(evt) => {
              onClick && onClick(evt);
            }}
          ></AccountSlide>
        ))}
      </Slider>
    </div>
  );
};

export default AccountHorizontalSlider;
