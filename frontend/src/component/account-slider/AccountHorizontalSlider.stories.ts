import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import AccountHorizontalSlider from './AccountHorizontalSlider';

const meta: Meta<typeof AccountHorizontalSlider> = {
  title: 'Component/AccountSlider/AccountHorizontalSlider',
  component: AccountHorizontalSlider,
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    slideData: [
      {
        accountId: 5,
        currency: 'HKD',
        balance: 215.18,
      },
      {
        accountId: 6,
        currency: 'GBP',
        balance: 115.18,
      },
    ],
  },
};
