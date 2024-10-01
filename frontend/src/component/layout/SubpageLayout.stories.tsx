import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import SubpageLayout from './SubpageLayout';

const meta = {
  title: 'Component/Layout/SubpageLayout',
  component: SubpageLayout,
  tags: ['autodocs'],
  args: { onDismiss: fn() },
} satisfies Meta<typeof SubpageLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Test',
    children: <div>Hello world!</div>,
  },
};
