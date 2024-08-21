import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
import AccountBalanceDisplay from './AccountBalanceDisplay';

const meta: Meta<typeof AccountBalanceDisplay> = {
  title: 'Component/AccountBalanceDisplay',
  component: AccountBalanceDisplay,
  tags: ['autodocs'],
  // args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // variant: 'add-money',
  },
};
