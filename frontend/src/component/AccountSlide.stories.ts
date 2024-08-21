import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import AccountSlide from './AccountSlide';

const meta: Meta<typeof AccountSlide> = {
  title: 'Component/AccountSlide',
  component: AccountSlide,
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // variant: 'add-money',
    // currency: 'GBP',
    // balance: 105.18,
  },
};
