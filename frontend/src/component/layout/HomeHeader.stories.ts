import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import HomeHeader from './HomeHeader';

const meta = {
  title: 'Component/Layout/HomeHeader',
  component: HomeHeader,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof HomeHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
