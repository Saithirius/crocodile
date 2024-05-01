import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  // args: { onClick: fn() },
}

export default meta
type Story = StoryObj<typeof Button>

export const Normal: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Описание ...',
      },
    },
  },
  args: {
    children: 'Button',
  },
}

export const Ghost: Story = {
  args: {
    children: 'Ghost',
  },
}
