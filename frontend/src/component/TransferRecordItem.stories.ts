import type { Meta, StoryObj } from '@storybook/react';
import TransferRecordItem from './TransferRecordItem';

const meta: Meta<typeof TransferRecordItem> = {
  title: 'Component/TransferRecordItem',
  component: TransferRecordItem,
  tags: ['autodocs'],
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    transferId: 101,
    brand: 'Mcdonalds',
    category: 'Restaurants',
  },
};
