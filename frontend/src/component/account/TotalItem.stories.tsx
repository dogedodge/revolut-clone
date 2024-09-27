import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
import TotalItem from './TotalItem';

const meta = {
  title: 'Component/Account/TotalItem',
  component: TotalItem,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof TotalItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    currency: 'GBP',
    amount: 20000,
  },
};
