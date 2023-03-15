import * as React from 'react'

import {
  GoogleMap as Map,
  useJsApiLoader
} from '@react-google-maps/api'

export type MapViewProps = {
  children?: React.ReactNode
}

const API_KEY = process.env.NEXT_PUBLIC_MAP_API_KEY;
const MapView = ({ children, ...props }: MapViewProps) => {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY || "",
    libraries: ['places']
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds()
    map.fitBounds(bounds)
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const [zoom, setZoom] = React.useState(10) // initial zoom
  const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
    lat: 0,
    lng: 0
  })

  return (
    <div id="_next">
      {isLoaded ? (
        <Map
          mapContainerStyle={{ flexGrow: '1', height: '100%' }}
          center={center}
          zoom={zoom}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {children}
        </Map>
      ) : (
        <></>
      )}
    </div>
  )
}

export default React.memo(MapView)
