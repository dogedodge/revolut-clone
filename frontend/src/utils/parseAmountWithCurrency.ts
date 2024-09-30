const parseAmountWithCurrency = (text: string) => {
  return Number(text.replace(/\D/g, ''));
};

export default parseAmountWithCurrency;
