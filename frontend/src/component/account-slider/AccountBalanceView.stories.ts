import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import AccountBalanceView from './AccountBalanceView';

const meta: Meta<typeof AccountBalanceView> = {
  title: 'Component/AccountSlider/AccountBalanceView',
  component: AccountBalanceView,
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // variant: 'add-money',
    currency: 'GBP',
    balance: 105.18,
  },
};
