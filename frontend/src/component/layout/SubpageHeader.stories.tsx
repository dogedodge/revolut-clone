import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import SubpageHeader from './SubpageHeader';

const meta = {
  title: 'Component/Layout/SubpageHeader',
  component: SubpageHeader,
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof SubpageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Test',
  },
};

export const HideTitle: Story = {
  args: {
    title: 'Test',
    hideTitle: true,
  },
};
