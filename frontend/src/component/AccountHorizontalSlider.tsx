import React from 'react';
import AccountSlide, {
  AccountSlideEvent,
  AccountSlideProps,
} from './AccountSlide';

import Slider from 'react-slick';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

interface AccountHorizontalSliderProps {
  slideData: AccountSlideProps[];
  onClick?: (event: AccountSlideEvent) => void;
}

const AccountHorizontalSlider: React.FC<AccountHorizontalSliderProps> = ({
  slideData,
}) => {
  return (
    <Slider {...settings}>
      {slideData.map((data) => (
        <AccountSlide key={data.accountId} {...data}></AccountSlide>
      ))}
    </Slider>
    // </div>
  );
};

export default AccountHorizontalSlider;
