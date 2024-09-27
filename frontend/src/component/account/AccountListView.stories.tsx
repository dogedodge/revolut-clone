import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import AccountListView from './AccountListView';
import mockAccounts from '../../mock/mockAccouts';

const meta = {
  title: 'Component/Account/AccountListView',
  component: AccountListView,
  tags: ['autodocs'],
  args: { onChange: fn() },
} satisfies Meta<typeof AccountListView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    accounts: mockAccounts,
    totalCurrency: 'GBP',
    total: 3000,
  },
};
