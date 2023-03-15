import type { GetServerSideProps, NextPage } from 'next'
import React, { ReactElement, useEffect } from 'react'
import dynamic from 'next/dynamic'

import DashboardLayout from '@/containers/Layout/DashboardLayout'
import { loadTranslation } from '@/utils'

import { TASK } from "@/api"
import { tasksApiSuccess, useAppState } from '@/store/config'

type Index = {}

const Index: NextPage = ({ tasks }: any) => {
  const TasksApp = dynamic(() => import('@/containers/Tasks/TasksApp'))

  const { dispatch } = useAppState()
  
  useEffect(() => {
    dispatch(tasksApiSuccess(tasks))
  }, [])

  return (    
    <TasksApp />    
  ) 
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const translation = await loadTranslation(
    ctx.locale!,
    process.env.NODE_ENV === 'production'
  )

  const tasks = await TASK.getTasksByCompanyId(1)
  return {
    props: {
      translation,
      tasks
    }
  }
}
// fetch data using SSR
Index.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default Index
