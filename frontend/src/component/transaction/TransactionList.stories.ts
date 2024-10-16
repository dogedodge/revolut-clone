import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import TransactionList from './TransactionList';
import mockTransactions from '../../mock/mockTransactions';

const meta: Meta<typeof TransactionList> = {
  title: 'Component/Transaction/TransactionList',
  component: TransactionList,
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    transactions: mockTransactions,
  },
};

export const GroupSection: Story = {
  args: {
    transactions: mockTransactions,
    variant: 'group-section',
  },
};
