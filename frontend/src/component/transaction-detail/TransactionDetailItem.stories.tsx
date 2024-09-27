import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import TransactionDetailItem from './TransactionDetailItem';

const meta = {
  title: 'Component/TransactionDetail/TransactionDetailItem',
  component: TransactionDetailItem,
  tags: ['autodocs'],
  args: { onClick: fn() },
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

export const SolidTitle: Story = {
  args: {
    title: 'Test',
    solidTitle: true,
    children: <div>Hello world!</div>,
  },
};
