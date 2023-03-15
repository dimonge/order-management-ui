import type { GetServerSideProps } from 'next'
import React, { ReactElement } from 'react'
import dynamic from 'next/dynamic'

import DashboardLayout from '@/containers/Layout/DashboardLayout'
import { loadTranslation } from '@/utils'
import { COMPANY } from '@/api'

function CompaniesPage({ companies }: any) {
  const CompaniesApp = dynamic(() => import('@/containers/CompaniesApp'), {
    ssr: false
  })

  return <CompaniesApp items={companies} />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const translation = await loadTranslation(
    ctx.locale!,
    process.env.NODE_ENV === 'production'
  )
  try {
    const companies = await COMPANY.getCompanies()
    return {
      props: {
        translation,
        companies,
        error: null,
      }
    }
  }catch(error) {
    return {
      props: {
        companies: null,
        translation,
        error
      }
    }
  }
}
// fetch data using SSR
CompaniesPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default CompaniesPage
