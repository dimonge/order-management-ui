import DashboardLayout from '@/containers/Layout/DashboardLayout'

export default {
  name: 'DashboardLayout',
  component: DashboardLayout
}

const Template = () => {
  return (
    <DashboardLayout>
      <div>content</div>
    </DashboardLayout>
  )
}

export const DashboardLayoutView = () => <Template />
