import type { Meta, StoryObj } from '@storybook/react';
import TransactionList from './TransactionList';

const meta: Meta<typeof TransactionList> = {
  title: 'Component/TransactionList',
  component: TransactionList,
  tags: ['autodocs'],
  args: {},
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
