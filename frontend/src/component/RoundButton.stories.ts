import type { Meta, StoryObj } from '@storybook/react';

import RoundButton from './RoundButton';

const meta = {
  title: 'Component/RoundButton',
  component: RoundButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof RoundButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const User: Story = {
  args: {
    variant: 'user',
  },
};

export const ChartBar: Story = {
  args: {
    variant: 'chart-bar',
  },
};

export const CreditCard: Story = {
  args: {
    variant: 'credit-card',
  },
};
