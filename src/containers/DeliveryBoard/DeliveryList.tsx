import React from 'react'
import DeliveryItem from '@/containers/DeliveryBoard/DeliveryItem'

type DeliveryListProps = {
  deliveries: Array<any>
}
const DeliveryList = (props: DeliveryListProps) => {
  const deliveries = props.deliveries.map((delivery) => {
    return (
      <li
        key={delivery.id}
        className="shadow overflow-hidden px-4 py-4 sm:px-6 sm-rounded-md"
      >
        <DeliveryItem {...delivery} />
      </li>
    )
  })
  return <ul>{deliveries}</ul>
}

export default DeliveryList
