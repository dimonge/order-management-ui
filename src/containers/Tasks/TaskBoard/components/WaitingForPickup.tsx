import React from 'react'

import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import BaseButton from '@/components/BaseButton'

import ItemContainer from './ItemContainer'
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid'
import { TASK } from '@/models/helper'
import BaseCard from '@/components/FrontOfficeComponents/BaseCard'
import { CardContent, Grid, Typography } from '@mui/material'

export type WaitingForPickupProps = {
  onClick: any
  item: TASK.TaskProps
}

const Styles = {
  item: {
    display: "flex",
    alignItems: "center",
    margin: '5px'
  }
}

const WaitingForPickup = ({ item, onClick }: WaitingForPickupProps) => {

  const content = (
    <React.Fragment>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h5" component="div">
              {item.tracking_code}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Peter S.
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Grid item sx={Styles.item}>
              <LocalShippingOutlinedIcon color="action" />
              <Typography
                color="textSecondary"
                display="inline"
                sx={{ pl: 1 }}
                variant="body2"
              >
                Tobi A.
              </Typography>
            </Grid>
            <Grid item sx={Styles.item}>
              <LocationOnOutlinedIcon color="action" />
              <Typography
                color="textSecondary"
                display="inline"
                sx={{ pl: 1 }}
                variant="body2"
              >
                Distance is 2.4 km
              </Typography>
            </Grid>
            <Grid item sx={Styles.item}>
              <AccessTimeIcon color="action" />
              <Typography
                color="textSecondary"
                display="inline"
                sx={{ pl: 1 }}
                variant="body2"
              >
                5 mins
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            Delivery to the doorstep. Door code is 1235.
          </Grid>
        </Grid>
    </React.Fragment>
  )
  return (
    <BaseCard
      cardActionsProps={{
        style: {
          display: 'flex',
          justifyContent: 'flex-end'
        }
      }}
      cardProps={{
        style: {
          margin: '0.5rem 0'
        }
      }}
      actions={
        <BaseButton onClick={onClick(item)}>Waiting for pickup</BaseButton>
      }
    >
      {content}
    </BaseCard>
  )
}

export default WaitingForPickup
