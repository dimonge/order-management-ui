import React, { ReactElement } from 'react'
import dynamic from 'next/dynamic'

import AccountPanel from '../../../partials/settings/AccountPanel'
import { GetServerSideProps } from 'next'
import { loadTranslation } from '../../../utils'
import Layout from '../../../containers/Layout/Layout'

const AccountPage = () => {
  const SettingsSidebar = dynamic(
    () => import('../../../partials/settings/SettingsSidebar'),
    {
      ssr: false
    }
  )
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
      {/* Page header */}
      <div className="mb-8">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl text-gray-800 font-bold">
          Account Settings
        </h1>
      </div>

      {/* Content */}
      <div className="bg-white shadow-lg rounded-sm mb-8">
        <div className="flex flex-col md:flex-row md:-mr-px">
          <SettingsSidebar />
          <AccountPanel />
        </div>
      </div>
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

AccountPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
export default AccountPage
