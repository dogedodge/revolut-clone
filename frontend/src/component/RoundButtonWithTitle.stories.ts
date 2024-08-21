import type { Meta, StoryObj } from '@storybook/react';
import RoundButtonWithTitle from './RoundButtonWithTitle';

const meta: Meta<typeof RoundButtonWithTitle> = {
  title: 'Component/RoundButtonWithTitle',
  component: RoundButtonWithTitle,
  tags: ['autodocs'],
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AddMoney: Story = {
  args: {
    variant: 'add-money',
  },
};

export const Exchange: Story = {
  args: {
    variant: 'exchange',
  },
};

export const Move: Story = {
  args: {
    variant: 'move',
  },
};

export const More: Story = {
  args: {
    variant: 'more',
  },
};
