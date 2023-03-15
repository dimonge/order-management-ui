import type { GetServerSideProps, NextPage } from 'next'
import React, { ReactElement } from 'react'

import Layout from '@/containers/Layout/Layout'
import { loadTranslation } from '@/utils'
import DashboardLayout from '@/containers/Layout/DashboardLayout'
import dynamic from 'next/dynamic'

const NewTask: NextPage = () => {
  const TaskForm = dynamic(
    () => import('@/containers/TaskForm'), // replace '@components/map' with your component's location
    {
      ssr: false
    } // This line is important. It's what prevents server-side render
  )
  return <TaskForm customersOptionList={[]} companyAddressesOptionList={[]} />
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

NewTask.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}
export default NewTask
