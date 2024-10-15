import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Primary: Story = {
  args: {
    title: 'Dropdown Example',
    rounded: false,
    filled: true,
    backgroungColor: '600',
    hoverColor: '700',
    options: [
      { id: '1', value: 'Option#1' },
      { id: '2', value: 'Option#2' },
    ],
    onClick: () => {},
  },
};
