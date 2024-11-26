import applePayLogo from '../../assets/apple-pay-2.png';
import useClickEffect from '../../hooks/useClickEffect';

interface ApplePayButtonProps {
  className?: string;
  onClick: () => void;
}

const ApplePayButton = ({ className = '', onClick }: ApplePayButtonProps) => {
  const { isClicked, handleClick } = useClickEffect(onClick);

  return (
    <div className={`w-full h-12 px-4 ${isClicked && 'scale-95'} ${className}`}>
      <div
        onClick={handleClick}
        className="w-full h-full bg-black rounded-full"
      >
        <img src={applePayLogo} className="w-auto h-full mx-auto invert"></img>
      </div>
    </div>
  );
};

export default ApplePayButton;
