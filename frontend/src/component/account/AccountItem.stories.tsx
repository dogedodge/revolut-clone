import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import AccountItem from './AccountItem';

const meta = {
  title: 'Component/Account/AccountItem',
  component: AccountItem,
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof AccountItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: {
      id: 201,
      currency: 'USD',
      balance: 2000,
    },
  },
};

export const Selected: Story = {
  args: {
    data: {
      id: 201,
      currency: 'USD',
      balance: 2000,
    },
    selected: true,
  },
};
