import BaseButton from '@/components/FrontOfficeComponents/BaseButton';
import { useRouter } from 'next/router';
import React from 'react'

import Address from './Address';

interface AddressesProps {
  items: Array<any>;
}
const Addresses = ({ items }: AddressesProps) => {
  const router = useRouter()
  const { id } = router.query;
  const onAddAddressClick = () => {
    router.push({
      pathname: `/admins/companies/address/new`,
      query: { company_id: id }
    })
  }
  return (
    <React.Fragment>
      <BaseButton onClick={onAddAddressClick}>Add Address</BaseButton>
      {items.map((item: any) => <Address data={item} />)}
    </React.Fragment>
  )
}

export default Addresses
