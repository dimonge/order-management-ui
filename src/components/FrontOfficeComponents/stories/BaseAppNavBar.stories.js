import BaseAppNavBar from '@/components/BaseAppNavBar'
import { ChevronDown, Delete, Overflow, Upload } from 'baseui/icon'
export default {
  name: 'BaseAppNavBar',
  component: BaseAppNavBar
}

const menuItems = [
  { label: 'Live' },
  {
    label: 'Map'
  }
]
const Template = () => {
  return (
    <BaseAppNavBar
      title="Modeliver"
      username="Peter Sho"
      userItems={[{ label: 'Profile' }, { label: 'Settings' }]}
      mainItems={menuItems}
    ></BaseAppNavBar>
  )
}

export const AppNavBar = () => <Template />
