import { ReactElement, useState } from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import { loadTranslation } from '../utils'

import Sidebar from '../partials/Sidebar'
import Header from '../partials/Header'
import WelcomeBanner from '../partials/dashboard/WelcomeBanner'
import DashboardAvatars from '../partials/dashboard/DashboardAvatars'
import FilterButton from '../components/DropdownFilter'
import Datepicker from '../components/Datepicker'
import DashboardCard01 from '../partials/dashboard/DashboardCard01'
import DashboardCard02 from '../partials/dashboard/DashboardCard02'
import DashboardCard03 from '../partials/dashboard/DashboardCard03'
import DashboardCard04 from '../partials/dashboard/DashboardCard04'
import DashboardCard05 from '../partials/dashboard/DashboardCard05'
import DashboardCard06 from '../partials/dashboard/DashboardCard06'
import DashboardCard07 from '../partials/dashboard/DashboardCard07'
import DashboardCard08 from '../partials/dashboard/DashboardCard08'
import DashboardCard09 from '../partials/dashboard/DashboardCard09'
import DashboardCard10 from '../partials/dashboard/DashboardCard10'
import DashboardCard11 from '../partials/dashboard/DashboardCard11'
import Layout from '../containers/Layout/Layout'
import { PlusIcon } from '@heroicons/react/outline'

const Home: NextPage = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
      {/* Welcome banner */}
      <WelcomeBanner />

      {/* Dashboard actions */}
      <div className="sm:flex sm:justify-between sm:items-center mb-8">
        {/* Left: Avatars <DashboardAvatars />*/}

        {/* Right: Actions */}
        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
          {/* Filter button <FilterButton align="right" /> */}

          {/* Datepicker built with flatpickr <Datepicker align="right" /> */}

          {/* Add view button */}
          <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
            <PlusIcon className="h-5 w-5 text-white-500" />
            <span className="hidden xs:block ml-2">Add delivery</span>
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-12 gap-6">
        {/* Line chart (Delivery) */}
        <DashboardCard01 />
        {/* Line chart (Total distance) */}
        <DashboardCard02 />
        {/* Line chart (Acme Professional) <DashboardCard03 /> */}

        {/* Bar chart (Direct vs Indirect) <DashboardCard04 /> */}

        {/* Line chart (Real Time Value)<DashboardCard05 />  */}

        {/* Doughnut chart (Top region)<DashboardCard06 /> */}

        {/* Table (Top Channels)  <DashboardCard07 /> */}

        {/* Line chart (Sales Over Time) <DashboardCard08 />*/}

        {/* Stacked bar chart (Sales VS Refunds)  <DashboardCard09 /> */}

        {/* Card (Recent Activity) */}
        <DashboardCard10 />
        {/* Card (Income/Expenses) */}
        <DashboardCard11 />
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

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
export default Home
