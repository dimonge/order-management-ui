import React from 'react'
import BaseCard from '@/components/FrontOfficeComponents/BaseCard'
import BaseDivider from '@/components/BaseDivider'
import { List, ListItem, ListItemText, Typography } from '@mui/material'

interface AddressProps {
  data: any;
}
const Address = ({ data }: AddressProps) => {
  return (
    <BaseCard>
      <List sx={{ width: '100%', bgColor: 'background.paper' }}>
        <ListItem>
          <ListItemText primary="Name"></ListItemText>
          <ListItemText primary={data.name}></ListItemText>
        </ListItem>
        <BaseDivider />
        <ListItem>
          <ListItemText primary="Address"></ListItemText>
          <ListItemText primary={data.address}></ListItemText>
        </ListItem>
        <BaseDivider />
        <ListItem>
          <ListItemText primary="Apartment No"></ListItemText>
          <ListItemText primary={data.apartment_no}></ListItemText>
        </ListItem>
        <BaseDivider />
        <ListItem>
          <ListItemText primary="City"></ListItemText>
          <ListItemText primary={data.city}></ListItemText>
        </ListItem>
        <BaseDivider />
        <ListItem>
          <ListItemText primary="Postal code"></ListItemText>
          <ListItemText primary={data.postal_code}></ListItemText>
        </ListItem>
        <BaseDivider />
        <ListItem>
          <ListItemText primary="Is approved"></ListItemText>
          <ListItemText primary={data.is_approved ? "Yes" : 'No'}></ListItemText>
        </ListItem>
      </List>
    </BaseCard>
  )
}

export default Address
