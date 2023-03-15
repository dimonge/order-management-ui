import type { GetServerSideProps, NextPage } from 'next'
import React, { ReactElement } from 'react'

import DeliveryBoard from '../../../containers/DeliveryBoard'
import Layout from '../../../containers/Layout/Layout'
import { loadTranslation } from '../../../utils'

type DeliveryBoardPage = {}

const DeliveryBoardPage: NextPage = () => {
  return <DeliveryBoard />
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
DeliveryBoardPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default DeliveryBoardPage
