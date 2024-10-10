import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import AccountHorizontalSlider from './AccountHorizontalSlider';

const meta: Meta<typeof AccountHorizontalSlider> = {
  title: 'Component/AccountSlider/AccountHorizontalSlider',
  component: AccountHorizontalSlider,
  tags: ['autodocs'],
  args: { onClick: fn(), onSlideChange: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    accounts: [
      {
        id: 5,
        currency: 'HKD',
        balance: 215.18,
      },
      {
        id: 6,
        currency: 'GBP',
        balance: 115.18,
      },
    ],
  },
};
