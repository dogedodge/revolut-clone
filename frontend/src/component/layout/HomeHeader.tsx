import RoundButton from './RoundButton';

interface HomeHeaderProps {
  onClick: (btnType: string) => void;
}

const HomeHeader = ({ onClick }: HomeHeaderProps) => {
  return (
    <div className="pl-4 pr-4 flex flex-row w-full h-8 justify-between">
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
  );
};

export default HomeHeader;
