import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ScrollerComponent from './ScrollerComponent';
import testImg from '../assets/purple-waves.jpg';

const meta = {
  title: 'Component/ScrollerComponent',
  component: ScrollerComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
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
