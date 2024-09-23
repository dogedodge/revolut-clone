import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
import TransactionDetailItem from './TransactionDetailItem';

const meta = {
  title: 'Component/TransactionDetail/TransactionDetailItem',
  component: TransactionDetailItem,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof TransactionDetailItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Test',
    children: <div>Hello world!</div>,
  },
};

export const Highlight: Story = {
  args: {
    title: 'Test',
    highlight: true,
    children: <div>Hello world!</div>,
  },
};
