import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ScrollerComponent from './ScrollerComponent';
import testImg from '../../assets/purple-waves.jpg';

const meta = {
  title: 'Component/Scroller/ScrollerComponent',
  component: ScrollerComponent,
  tags: ['autodocs'],
  args: { onScroll: fn() },
} satisfies Meta<typeof ScrollerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    className: 'h-80',
    children: <img src={testImg}></img>,
  },
};
