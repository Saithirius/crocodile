import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Button>

export const Simple: Story = {
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
    type: 'ghost',
  },
}

export const Text: Story = {
  args: {
    children: 'Ghost',
    type: 'text',
  },
}
