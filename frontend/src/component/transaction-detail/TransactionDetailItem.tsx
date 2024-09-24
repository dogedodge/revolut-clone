interface TransactionDetailItemProps {
  title: string;
  highlight?: boolean;
  solidTitle?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const TransactionDetailItem = ({
  title,
  highlight = false,
  solidTitle = false,
  onClick,
  children,
}: TransactionDetailItemProps) => {
  return (
    <div
      onClick={() => {
        onClick && onClick();
      }}
      className="w-full h-12 px-4 bg-white select-none flex flex-row items-center justify-between first:rounded-t-xl last:rounded-b-xl"
    >
      <div className={`${solidTitle ? 'text-black' : 'text-gray-500'} text-lg`}>
        {title}
      </div>
      <div
        className={`text-base ${highlight && 'text-indigo-700'} ${!highlight && 'font-light'}`}
      >
        {children}
      </div>
    </div>
  );
};

export default TransactionDetailItem;
