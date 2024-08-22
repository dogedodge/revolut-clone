import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import DropupItem from './DropupItem';

const meta: Meta<typeof DropupItem> = {
  title: 'Component/DropupItem',
  component: DropupItem,
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Details: Story = {
  args: {
    variant: 'details',
  },
};

export const Statement: Story = {
  args: {
    variant: 'statement',
  },
};

export const Converter: Story = {
  args: {
    variant: 'converter',
  },
};

export const Theme: Story = {
  args: {
    variant: 'theme',
  },
};

export const AddNewAccount: Story = {
  args: {
    variant: 'add-new-account',
  },
};
