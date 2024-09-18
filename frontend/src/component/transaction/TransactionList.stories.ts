import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import TransactionList from './TransactionList';

const meta: Meta<typeof TransactionList> = {
  title: 'Component/Transaction/TransactionList',
  component: TransactionList,
  tags: ['autodocs'],
  args: { onTansactionClick: fn(), onSeeAllClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: [
      {
        transactionId: 101,
        transactionDate: 'Today, 4:43PM',
        brand: 'Mcdonalds',
        category: 'Restaurants',
      },
      {
        transactionId: 102,
        transactionDate: 'Today, 5:43PM',
        brand: 'KFC',
        category: 'Restaurants',
      },
    ],
  },
};
