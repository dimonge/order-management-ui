import React, { ReactElement } from 'react'
import type { GetServerSideProps, NextPage } from 'next'

import { loadTranslation } from '@/utils'
import dynamic from 'next/dynamic'
import DashboardLayout from '@/containers/Layout/DashboardLayout'

function TasksMapPage() {
  const Map = dynamic(
    () => import('@/containers/MapView/MapView'), // replace '@components/map' with your component's location
    {
      ssr: false
    } // This line is important. It's what prevents server-side render
  )
  return (
    <div>
      <Map apiKey={process.env.NEXT_PUBLIC_MAP_API_KEY} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const translation = await loadTranslation(
    ctx.locale!,
    process.env.NODE_ENV === 'production'
  )

  return {
    props: {
      translation
    }
  }
}
// fetch data using SSR
TasksMapPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default TasksMapPage
