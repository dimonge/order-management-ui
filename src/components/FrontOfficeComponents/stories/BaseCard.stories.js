import React from 'react'
import BaseCard from '@/components/BaseCard'

export default {
  title: 'Card',
  component: BaseCard
}

const Template = () => {
  return (
    <BaseCard>
      Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare
      faucibus ex, non facilisis nisl. Proin ut dui sed metus pharetra hend
      rerit vel non mi. Nulla ornare faucibus ex, non facilisis nisl.
    </BaseCard>
  )
}

export const Card = () => <Template />
