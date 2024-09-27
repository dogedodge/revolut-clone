import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import AccountListView from './AccountListView';

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
    accounts: [
      {
        id: 201,
        currency: 'GBP',
        amount: 2000,
      },
      {
        id: 202,
        currency: 'EUR',
        amount: 1000,
      },
      {
        id: 203,
        currency: 'HKD',
        amount: 5000,
      },
    ],
  },
};
