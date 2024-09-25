import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import TransactionGroupByDate from './TransactionGroupByDate';
import mockTransactions from '../../mock/mockTransactions';

const meta = {
  title: 'Component/Transaction/TransactionGroupByDate',
  component: TransactionGroupByDate,
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof TransactionGroupByDate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    transactions: mockTransactions,
  },
};
