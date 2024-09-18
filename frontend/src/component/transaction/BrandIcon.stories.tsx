import type { Meta, StoryObj } from '@storybook/react';
import BrandIcon from './BrandIcon';

const meta: Meta<typeof BrandIcon> = {
  title: 'Component/Transaction/BrandIcon',
  component: BrandIcon,
  tags: ['autodocs'],
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Mcdonalds: Story = {
  args: {
    brand: 'Mcdonalds',
    category: 'Restaurants',
  },
};

export const KFC: Story = {
  args: {
    brand: 'KFC',
    category: 'Restaurants',
  },
};

export const Starbucks: Story = {
  args: {
    brand: 'Starbucks',
    category: 'Restaurants',
  },
};

export const Tesco: Story = {
  args: {
    brand: 'Tesco',
    category: 'Groceries',
  },
};

export const Sainsburys: Story = {
  args: {
    brand: 'Sainsburys',
    category: 'Groceries',
  },
};

export const Waitrose: Story = {
  args: {
    brand: 'Waitrose',
    category: 'Groceries',
  },
};

export const Fallback: Story = {
  args: {
    brand: 'Shaxian',
    category: 'Restaurants',
  },
};
