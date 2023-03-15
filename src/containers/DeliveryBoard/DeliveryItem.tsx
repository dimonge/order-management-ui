import React from 'react'

import { Card, CardBody } from '@modeliver/eli-ui'

export type DeliveryItemProps = {
  trackingCode: string
  fullName: string
  description: string
  driverName: string
  distanceInKm: number
}

const DeliveryItem = (props: DeliveryItemProps) => {
  return (
    <>
      <p className="mb-4 font-semibold bg-secondary-800">
        {props.trackingCode}
      </p>
      <Card>
        <>
          <CardBody>
            <>
              <p className="mb-4 font-bold bg-secondary-800">
                {props.trackingCode}
              </p>
              <p className="font-body bg-primary-300">{props.fullName}</p>
            </>
          </CardBody>
          <CardBody className="flex items-baseline">
            <div>
              <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                {props.driverName}
              </p>
              <p className="text-lg font-semibold text-gray-600 dark:text-cool-gray-200">
                {props.distanceInKm}
              </p>
            </div>
          </CardBody>
        </>
      </Card>
    </>
  )
}

export default DeliveryItem
