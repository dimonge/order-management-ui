export type TaskItemProps = {
  status: string
  pickupTime: string
  courier: string
  pickupAddress: string
  dropoffAddress: string
  pickupPlace: string
  dropoffPlace: string
  trackingCode: string
  pickupPhoneNumber: string
  dropoffPhoneNumber: string
  courierPhoneNumber: string
  deliveryCost: string
}

export const TASK_STATUS_LABEL = {
  PICKUP: 'Pickup in',
  DELIVERY: 'Delivery in'
}
