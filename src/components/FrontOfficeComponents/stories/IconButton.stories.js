import React from 'react'
import { ViewGridIcon } from '@heroicons/react/solid'

import BaseIconButton from '@/components/IconButton'

export default {
  title: 'IconButton',
  component: BaseIconButton
}

const Template = () => {
  const ITEMS = [
    {
      label: 'Delivery',
      href: '/tasks',
      imgUrl: 'https://via.placeholder.com/60x60'
    },
    {
      label: 'Dashboard',
      href: '/dashboard',
      imgUrl: 'https://via.placeholder.com/60x60'
    },
    {
      label: 'Fleets',
      href: '/fleets',
      imgUrl: 'https://via.placeholder.com/60x60'
    }
  ]
  return (
    <BaseIconButton items={ITEMS}>
      <ViewGridIcon className="h-10 w-10 text-primary-500" />
    </BaseIconButton>
  )
}

export const IconButton = () => <Template />
