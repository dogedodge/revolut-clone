const parseAmountWithCurrency = (text: string) => {
  return Number(text.replace(/[^\d\.]/g, ''));
};

export default parseAmountWithCurrency;
