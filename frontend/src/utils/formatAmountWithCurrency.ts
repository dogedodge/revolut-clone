import { CurrencySymbol } from '../constants';
import { Currency } from '../interface';

/** Build string for amount display, like `-$100` */
const formatAmountWithCurrency = (
  currency: Currency,
  amount: number | string,
): string => {
  const _amount = Number(amount);
  return `${_amount < 0 ? '-' : ''}${CurrencySymbol[currency]}${Math.abs(_amount)}`;
};

export default formatAmountWithCurrency;
