import React from 'react'
import BaseButton from '@/components/BaseButton'

export default {
  title: 'Button',
  component: BaseButton
}

const Template = () => {
  return (
    <BaseButton onClick={() => console.log('Create task')}>
      Create Task
    </BaseButton>
  )
}

export const Button = () => <Template />
