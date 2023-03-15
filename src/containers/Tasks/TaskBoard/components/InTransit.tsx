import React from 'react'
import {
  LocationMarkerIcon,
  PhoneOutgoingIcon,
} from '@heroicons/react/outline'
import ItemContainer from './ItemContainer'
import { ProgressBar, SIZE } from 'baseui/progress-bar'
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid'
import { TASK } from '@/models/helper'
import BaseCard from '@/components/FrontOfficeComponents/BaseCard'
import { Avatar, Chip, Grid, Typography } from '@mui/material'

import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
export interface InTransitProps {
  item: TASK.TaskProps
}

const itemProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}


const HeaderLabel = () => (
  <Typography
    color="textSecondary"
    display="inline"
    sx={{ pl: 1 }}
    variant="body2"
  >
    Delivery partner details
  </Typography>
)


type CourierImageProps = {
  imageUrl: string;
  name?: string;
}
const sampleImage = "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"

const CourierImage = ({ imageUrl, name }: CourierImageProps) => (
  <Avatar src={imageUrl} alt={name} sx={{ width: 56, height: 56 }} />
)

const sampleName = "Peter"

type CourierMessageProps = {
  name: string;
}
const CourierMessage = ({ name }: CourierMessageProps) => (
  <p className="text-md text-primary-800">{name} is on the way</p>
)

type TaskTrackingProps = {
  link: string;
}
const sampleLink = 'app/home?view=map'

const TaskTracking = ({ link }: TaskTrackingProps) => (
  <div className="flex items-center py-0">
    <LocationMarkerIcon
      className="flex-shrink-0 h-5 w-5 text-gray-400"
      aria-hidden="true"
    />
    <a href={link}>
      <span className="text-lg text-primary-700 py-1 px-1">Track</span>
    </a>
  </div>
)
type CallCourierProps = {
  mobile: number | string;
}
const Styles = {
  item: {
    display: 'flex',
    alignItems: 'center',
    margin: '5px'
  }
}
const sampleMobile = '+354-359-343034'
const CallCourier = ({ mobile }: CallCourierProps) => (
  <div className="flex items-center py-1 px-3">
    <PhoneOutgoingIcon
      className="flex-shrink-0 h-5 w-5 text-gray-400"
      aria-hidden="true"
    />
    <span className="text-lg text-primary-700 py-2 px-2">Call</span>
  </div>
)
const InTransit = ({ item }: InTransitProps) => {
  const content = (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <HeaderLabel />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Grid item sx={Styles.item}>
            <Grid item xs={4}>
              <CourierImage imageUrl={sampleImage} name={item?.name} />
            </Grid>
            <Grid item xs={8} spacing={2}>
              <Grid item spacing={2}>
                <Typography
                  color="textSecondary"
                  display="inline"
                  sx={{ pl: 1 }}
                  variant="body1"
                >
                  is on his way
                </Typography>
              </Grid>
              <Grid item justifyContent="space-around" display="flex">
                <Chip
                  label="Track"
                  icon={<LocationOnIcon />}
                  onClick={() => console.log('clickable')}
                />
                <Chip
                  label="Call"
                  icon={<LocalPhoneIcon />}
                  onClick={() => console.log('clickable')}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid>
            <Typography variant="h5" component="div">
              #78456
            </Typography>
          </Grid>
          <Grid>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              € 7.40
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          style={{ margin: '0 1rem' }}
          display="flex"
          direction="row"
        >
          <Grid item xs={6}>
            Arriving in
          </Grid>
          <Grid item xs={6} justifyContent="flex-end">
            8mins
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <ProgressBar value={20} size={SIZE.large} />
        </Grid>
      </Grid>
    </React.Fragment>
  )
  return (
    <BaseCard
      cardProps={{
        style: {
          margin: '0.5rem 0'
        }
      }}
    >
      {content}
    </BaseCard>
  )
}

export default InTransit
