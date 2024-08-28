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
