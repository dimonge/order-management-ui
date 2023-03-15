import React from 'react'

import InTransit from '@/containers/Tasks/TaskBoard/components/InTransit'

export default {
  title: 'InTransit',
  component: InTransit
}
const sampleTask = {
  id: '2434e04f-d789-5e1c-bba0-44e6fe07c6cf',
  type: 'tasks',
  tracking_code: 'L@^tW',
  status: 'pending',
  currency: 'EUR',
  amount: 12.23,
  email: 'sokos@pek.cy',
  vat_in_percent: 22.4,
  distance_in_meter: 5331,
  pickup_location: '1975 Olater Street',
  dropoff_location: '1815 Lejiv Grove',
  pickup_time: '2076-04-04T05:10:46.877Z',
  drop_off_time: '2050-09-09T00:04:34.832Z',
  customer_signature_type: 's1SZ]l&o*ep&o9W0V',
  pickup_comments_for_courier:
    'Kig un uv ze nabitboc ezna pibeve oznucmor fenbad asjohzo egikugo gifuha jer nu apiju.',
  dropoff_comments_for_courier:
    'Zi cebmo vos habga ko vufiwa tormugon maino necdazaz otdob rommuok hup su bo.',
  created_at: '2105-02-15T15:42:20.774Z',
  modified_at: '2067-08-17T22:54:12.109Z',
  created_by: 123,
  modified_by: 123,
  customer: {
    id: '121b3243-1cf3-54f7-abcd-6a49348f7d85',
    email: 'ujid@kiv.ax',
    full_name: 'Clyde Hicks',
    apartment_no: '6063',
    phone_number: '(705) 544-6959',
    address: '805 Dipag Pass',
    city: 'Zosizizo',
    postal_code: 'WF2 3DF',
    country: 'Finland',
    latitude: 38.00366,
    longitude: 96.03986,
    company_id: '68180d40-0a1e-5df6-bfa2-810276ad4525'
  }
}

export const BaseInTransit = () => {
  return (
    <InTransit
      item={sampleTask}
      onClick={(item) => console.log('Item: ', item)}
    />
  )
}

