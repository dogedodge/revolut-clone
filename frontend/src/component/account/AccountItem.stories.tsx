import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
import AccountItem from './AccountItem';

const meta = {
  title: 'Component/Account/AccountItem',
  component: AccountItem,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof AccountItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: { id: 201, currency: 'USD', amount: 2000 },
  },
};

export const Total: Story = {
  args: {
    data: { id: 201, currency: 'USD', amount: 2000 },
    isTotal: true,
    total: 10000,
  },
};
