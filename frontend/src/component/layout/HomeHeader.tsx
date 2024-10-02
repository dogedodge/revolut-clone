import RoundButton from './RoundButton';

interface HomeHeaderProps {
  bgOpacity?: number;
  className?: string;
  onClick: (btnType: string) => void;
  whiteBg?: boolean;
}

const HomeHeader = ({
  className = '',
  bgOpacity = 1,
  onClick,
  whiteBg = false,
}: HomeHeaderProps) => {
  return (
    <div className={`relative w-full ${className}`}>
      <div
        className={`absolute w-full h-14 ${whiteBg ? 'bg-white' : 'bg-indigo-900'}`}
        style={{ opacity: bgOpacity }}
      ></div>
      <div
        className={`relative mt-4 pl-4 pr-4 flex flex-row w-full h-8 justify-between `}
      >
        <RoundButton
          variant="user"
          onClick={() => {
            onClick('user');
          }}
        ></RoundButton>
        <div className="flex flex-row">
          <RoundButton
            variant="chart-bar"
            onClick={() => {
              onClick('chart-bar');
            }}
          ></RoundButton>
          <RoundButton
            className="ml-2"
            variant="credit-card"
            onClick={() => {
              onClick('credit-card');
            }}
          ></RoundButton>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
