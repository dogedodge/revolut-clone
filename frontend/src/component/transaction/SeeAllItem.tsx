import React from 'react';

interface SeeAllItemProps {
  onClick: () => void;
}

const SeeAllItem: React.FC<SeeAllItemProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-full h-12 bg-gray-100 flex justify-center items-center last:rounded-b-xl"
    >
      <div className="text-xl text-blue-600 select-none">See all</div>
    </div>
  );
};

export default SeeAllItem;
