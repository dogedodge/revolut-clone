import applePayLogo from '../../assets/apple-pay-2.png';

interface ApplePayButtonProps {
  className?: string;
  onClick: () => void;
}

const ApplePayButton = ({ className = '', onClick }: ApplePayButtonProps) => {
  return (
    <div className={`w-full h-12 px-4 ${className}`}>
      <div onClick={onClick} className="w-full h-full bg-black rounded-full">
        <img src={applePayLogo} className="w-auto h-full mx-auto invert"></img>
      </div>
    </div>
  );
};

export default ApplePayButton;
