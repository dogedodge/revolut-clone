import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
import CurrencyIcon from './CurrencyIcon';

const meta = {
  title: 'Component/Account/CurrencyIcon',
  component: CurrencyIcon,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof CurrencyIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const USD: Story = {
  args: {
    currency: 'USD',
  },
};

export const Selected: Story = {
  args: {
    currency: 'USD',
    variant: 'selected',
  },
};

export const Mini: Story = {
  args: {
    currency: 'USD',
    variant: 'mini',
  },
};

export const EUR: Story = {
  args: {
    currency: 'EUR',
  },
};

export const GBP: Story = {
  args: {
    currency: 'GBP',
  },
};

export const CNY: Story = {
  args: {
    currency: 'CNY',
  },
};

export const HKD: Story = {
  args: {
    currency: 'HKD',
  },
};
