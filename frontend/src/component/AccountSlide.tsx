import RoundButtonWithTitle, {
  RoundButtonWithTitleVariant,
} from './RoundButtonWithTitle';

const actionBtnVariants: RoundButtonWithTitleVariant[] = [
  'add-money',
  'exchange',
  'move',
  'more',
];

const AccountSlide = () => {
  return (
    <div className="flex justify-between mx-6">
      {actionBtnVariants.map((variant) => (
        <RoundButtonWithTitle
          key={variant}
          variant={variant}
        ></RoundButtonWithTitle>
      ))}
    </div>
  );
};

export default AccountSlide;
