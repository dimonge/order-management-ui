import type { GetServerSideProps, NextPage } from 'next'
import React, { ReactElement } from 'react'

import DashboardLayout from '@/containers/Layout/DashboardLayout'

import { loadTranslation } from '@/utils'
import dynamic from 'next/dynamic'

type FleetPage = {}
function FleetPage() {
  const FleetApp = dynamic(() => import('@/containers/Fleets'),
    {
      ssr: false
    }
  )
  return <FleetApp />
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
FleetPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default FleetPage
