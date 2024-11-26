import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
import CurrencySelector from './CurrencySelector';

const meta = {
  title: 'Component/Transfer/CurrencySelector',
  component: CurrencySelector,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof CurrencySelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
