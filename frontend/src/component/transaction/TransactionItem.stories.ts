import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import TransactionItem from './TransactionItem';

const meta: Meta<typeof TransactionItem> = {
  title: 'Component/Transaction/TransactionItem',
  component: TransactionItem,
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: {
      transactionId: 101,
      transactionDate: '2024-09-25 07:37:50', // UTC time
      brand: 'Mcdonalds',
      category: 'Restaurants',
      currency: 'GBP',
      amount: -150,
    },
  },
};
