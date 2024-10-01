import applePayLogo from '../../assets/apple-pay-2.png';

interface ApplePayButtonProps {
  className?: string;
  onClick: () => void;
}

const ApplePayButton = ({ className = '', onClick }: ApplePayButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={`w-full h-12 bg-black rounded-2xl ${className}`}
    >
      <img src={applePayLogo} className="w-auto h-full mx-auto invert"></img>
    </div>
  );
};

export default ApplePayButton;
