import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ApplePayButton from './ApplePayButton';

const meta = {
  title: 'Component/Transfer/ApplePayButton',
  component: ApplePayButton,
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof ApplePayButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
