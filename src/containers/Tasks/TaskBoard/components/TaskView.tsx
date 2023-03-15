import * as React from "react"
import {
  DirectionsService,
  DirectionsRenderer,
  DistanceMatrixService
} from '@react-google-maps/api'

import { TASK } from "@/models/helper";

import MapView from "@/containers/MapView/MapView";

type TaskViewProps = {
  item: TASK.TaskProps;
  company: any;
}

const TaskView = ({ item, company }: TaskViewProps) => {
  const [totalTime, setTotalTime] = React.useState('')
  const [distance, setDistance] = React.useState('')

  const destination_coordinate = {
    lng: item.customer.longitude,
    lat: item.customer.latitude
  }

  const origin_coordinate = {
    lng: company.longitude,
    lat: company.latitude
  }
  
  const [response, setResponse] = React.useState(null)
  const { pickup_location: origin, dropoff_location: destination } = item;
  
  const directionsCallback = React.useCallback((res) => {
    console.log(res)

    if (res !== null) {
      if (res.status === 'OK') {
        setResponse(res)
      } else {
        console.log('response: ', res)
      }
    }
  }, [])

    const onMapClick = React.useCallback((...args) => {
      console.log('onClick args: ', args)
    }, [])

     const directionsServiceOptions = React.useMemo(() => {
       return {
         destination: [destination_coordinate],
         origin: [origin_coordinate],
         travelMode: 'DRIVING'
       }
     }, [])

  return (
    <div style={styles.container}>
      <div style={styles.content}>content</div>
      <div style={styles.map}>
        <MapView
          apiKey={process.env.NEXT_PUBLIC_MAP_API_KEY}
          onClick={onMapClick}
        >
          {destination !== '' && origin !== '' && (
            <>
              <DirectionsService
                options={directionsServiceOptions}
                callback={directionsCallback}
              />
              <DistanceMatrixService
                options={{
                  destinations: [destination_coordinate],
                  origins: [origin_coordinate],
                  travelMode: 'DRIVING'
                }}
                callback={(res) => {
                  console.log('RESPONSE', res)
                  if (res) {
                    setTotalTime(res.rows[0].elements[0].duration.text)
                    setDistance(res.rows[0].elements[0].distance.text)
                  }
                  
                }}
              />
            </>
          )}

          {response !== null && <DirectionsRenderer directions={response} />}
        </MapView>
      </div>
    </div>
  )
}

const styles: any = {
  container: {
    display: 'flex',
    flex: '1 0 auto',
    flexDirection: 'row',
    alignItems: 'space-between'
  },
  content: {
    width: '50%'
  },
  map: {
    width: '50%'
  }
}

export default TaskView