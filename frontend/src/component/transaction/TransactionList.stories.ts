import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import TransactionList from './TransactionList';

const meta: Meta<typeof TransactionList> = {
  title: 'Component/Transaction/TransactionList',
  component: TransactionList,
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: [
      {
        transactionId: 101,
        transactionDate: '2024-09-25 07:37:50',
        brand: 'Mcdonalds',
        category: 'Restaurants',
        currency: 'GBP',
        amount: -150,
      },
      {
        transactionId: 102,
        transactionDate: '2024-09-25 07:37:50',
        brand: 'KFC',
        category: 'Restaurants',
        currency: 'GBP',
        amount: -150,
      },
    ],
  },
};
