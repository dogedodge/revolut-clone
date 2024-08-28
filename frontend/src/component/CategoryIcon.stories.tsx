import type { Meta, StoryObj } from '@storybook/react';
import CategoryIcon from './CategoryIcon';

const meta: Meta<typeof CategoryIcon> = {
  title: 'Component/CategoryIcon',
  component: CategoryIcon,
  tags: ['autodocs'],
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const General: Story = {
  args: {
    category: 'General',
  },
};

export const Restaurants: Story = {
  args: {
    category: 'Restaurants',
  },
};

export const Groceries: Story = {
  args: {
    category: 'Groceries',
  },
};

export const Shopping: Story = {
  args: {
    category: 'Shopping',
  },
};

export const Service: Story = {
  args: {
    category: 'Service',
  },
};

export const Transport: Story = {
  args: {
    category: 'Transport',
  },
};

export const Entertainment: Story = {
  args: {
    category: 'Entertainment',
  },
};

export const Cash: Story = {
  args: {
    category: 'Cash',
  },
};

export const Travel: Story = {
  args: {
    category: 'Travel',
  },
};

export const Health: Story = {
  args: {
    category: 'Health',
  },
};
