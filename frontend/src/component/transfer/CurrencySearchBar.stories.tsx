import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import CurrencySearchBar, { CurrencySearchBarProps } from './CurrencySearchBar';
import { useState } from 'react';

const Template = (args: CurrencySearchBarProps) => {
  const [value, setValue] = useState(args.value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    args.onChange(event); // Call the passed in onChange handler
  };

  return <CurrencySearchBar {...args} value={value} onChange={handleChange} />;
};

const meta = {
  title: 'Component/Transfer/CurrencySearchBar',
  component: Template,
  tags: ['autodocs'],
  args: { onChange: fn(), onClickCancel: fn() },
} satisfies Meta<typeof CurrencySearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: '',
  },
};
