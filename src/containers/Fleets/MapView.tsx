import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

type MapViewProps = {
  style?: any
}

const MapView = (props: MapViewProps) => {
  const url =
    'https://api.mapbox.com/styles/v1/petershodeinde/ckalqegjn42m51io0w93j2vid/tiles/256/{z}/{x}/{y}@2x?access_token=' +
    process.env.NEXT_PUBLIC_MAPBOX_API_KEY
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: '100vh', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url={url}
      />
    </MapContainer>
  )
}

export default MapView
