import { ArrowLeftIcon } from '@heroicons/react/24/solid';

interface SubpageHeaderProps {
  title: string;
  hideTitle?: boolean;
  onClick: () => void;
  className?: string;
}

const SubpageHeader = ({
  title,
  hideTitle = false,
  className = '',
  onClick,
}: SubpageHeaderProps) => {
  return (
    <div
      className={`relative w-full h-12 pr-10 flex items-center  ${className}`}
    >
      <div onClick={onClick} className="size-10 flex items-center pl-4">
        <ArrowLeftIcon className="size-6"></ArrowLeftIcon>
      </div>
      {!hideTitle && (
        <div className="text-lg text-center flex-grow">{title}</div>
      )}
    </div>
  );
};

export default SubpageHeader;
