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
    transactionId: 101,
    transactionDate: 'Today, 4:43PM',
    brand: 'Mcdonalds',
    category: 'Restaurants',
  },
};
