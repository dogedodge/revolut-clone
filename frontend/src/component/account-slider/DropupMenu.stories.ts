import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import DropupMenu from './DropupMenu';

const meta: Meta<typeof DropupMenu> = {
  title: 'Component/AccountSlider/DropupMenu',
  component: DropupMenu,
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // variant: 'details',
  },
};
