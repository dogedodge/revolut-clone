import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import PlainScroller from './PlainScroller';
import testImg from '../../assets/purple-waves.jpg';

const meta = {
  title: 'Component/Scroller/PlainScroller',
  component: PlainScroller,
  tags: ['autodocs'],
  args: { onScroll: fn() },
} satisfies Meta<typeof PlainScroller>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    className: 'h-80',
    children: <img src={testImg}></img>,
  },
};
