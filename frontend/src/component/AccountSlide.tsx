import RoundButtonWithTitle, {
  RoundButtonWithTitleVariant,
} from './RoundButtonWithTitle';

const actionBtnVariants: RoundButtonWithTitleVariant[] = [
  'add-money',
  'exchange',
  'move',
  'more',
];

interface AccountSlideProps {
  onClick?: (eventType: string) => void;
}

const AccountSlide: React.FC<AccountSlideProps> = ({ onClick }) => {
  return (
    <div className="flex justify-between mx-6">
      {actionBtnVariants.map((variant) => (
        <RoundButtonWithTitle
          key={variant}
          variant={variant}
          onClick={() => {
            onClick && onClick(variant);
          }}
        ></RoundButtonWithTitle>
      ))}
    </div>
  );
};

export default AccountSlide;
