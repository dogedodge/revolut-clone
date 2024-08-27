import React, { useState } from 'react';
import AccountSlide, {
  AccountSlideEvent,
  AccountSlideProps,
} from './AccountSlide';

import Slider, { Settings } from 'react-slick';

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
  slideData: AccountSlideProps[];
  onClick?: (event: AccountSlideEvent) => void;
}

const AccountHorizontalSlider: React.FC<AccountHorizontalSliderProps> = ({
  slideData,
}) => {
  const slideCount = slideData.length;
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <div>
      <Slider {...settings} afterChange={(value) => setCurrentSlide(value)}>
        {slideData.map((data) => (
          <AccountSlide key={data.accountId} {...data}></AccountSlide>
        ))}
      </Slider>
      <div className="w-screen flex justify-center relative bottom-28">
        <CustomDots
          slideCount={slideCount}
          currentSlide={currentSlide}
        ></CustomDots>
      </div>
    </div>
  );
};

export default AccountHorizontalSlider;
