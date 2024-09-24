import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import TransactionDetailView from './TransactionDetailView';

const meta = {
  title: 'Component/TransactionDetail/TransactionDetailView',
  component: TransactionDetailView,
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof TransactionDetailView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: {
      transactionId: 101,
      transactionDate: 'Today, 4:43PM',
      brand: 'Mcdonalds',
      category: 'Restaurants',
      currency: 'GBP',
      amount: -150,
      status: 'Completed',
      card: 'Visa ..6789',
    },
  },
};
