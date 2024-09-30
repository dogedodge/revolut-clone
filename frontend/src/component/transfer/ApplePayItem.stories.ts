import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
import ApplePayItem from './ApplePayItem';

const meta = {
  title: 'Component/Transfer/ApplePayItem',
  component: ApplePayItem,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof ApplePayItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
