import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import InfiniteScroller from './InfiniteScroller';
import testImg from '../../assets/purple-waves.jpg';

const meta = {
  title: 'Component/Scroller/InfiniteScroller',
  component: InfiniteScroller,
  tags: ['autodocs'],
  args: { loadMore: fn() },
} satisfies Meta<typeof InfiniteScroller>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    hasMore: true,
    isLoading: false,
    className: 'h-80',
    children: <img src={testImg}></img>,
  },
};
