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
      id: 101,
      createAt: 'Today, 4:43PM',
      recipient: 'Mcdonalds',
      category: 'Restaurants',
      currency: 'GBP',
      amount: -150,
      status: 'Completed',
      card: 'Visa ..6789',
      totalSpentAtBrand: 2000,
      numberOfTransAtBrand: 16,
    },
  },
};
