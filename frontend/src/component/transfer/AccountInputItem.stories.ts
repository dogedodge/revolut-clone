import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
import AccountInputItem from './AccountInputItem';

const meta = {
  title: 'Component/Transfer/AccountInputItem',
  component: AccountInputItem,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof AccountInputItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    account: {
      id: 201,
      currency: 'GBP',
      amount: 1000,
    },
  },
};