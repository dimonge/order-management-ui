import BaseMapView from '@/containers/MapView/MapView'

export default {
  title: 'MapView',
  component: BaseMapView
}

const Template = (args) => {
  return <BaseMapView {...args} />
}

export const MapView = Template.bind({})
MapView.args = {
  apiKey: process.env.NEXT_PUBLIC_MAP_API_KEY
}
