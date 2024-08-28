import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import SeeAllItem from './SeeAllItem';

const meta = {
  title: 'Component/SeeAllItem',
  component: SeeAllItem,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof SeeAllItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const User: Story = {
  args: {},
};
