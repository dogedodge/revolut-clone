import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import TransactionGroupList from './TransactionGroupList';
import mockTransactions from '../../mock/mockTransactions';
import splitTransactionGroup from '../../utils/splitTransactionGroup';

const meta = {
  title: 'Component/Transaction/TransactionGroupList',
  component: TransactionGroupList,
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof TransactionGroupList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // transactions: mockTransactions,
    transactionGroups: splitTransactionGroup(mockTransactions),
  },
};
