import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
import BrandIcon from './BrandIcon';

const meta: Meta<typeof BrandIcon> = {
  title: 'Component/BrandIcon',
  component: BrandIcon,
  tags: ['autodocs'],
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Starbucks: Story = {
  args: {
    brand: 'Starbucks',
    category: 'Restaurants',
  },
};

export const General: Story = {
  args: {
    brand: 'Whatever',
    category: 'General',
  },
};

export const Shaxian: Story = {
  args: {
    brand: 'Shaxian',
    category: 'Restaurants',
  },
};
