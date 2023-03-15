import type { GetServerSideProps, NextPage } from "next";
import React, { ReactElement } from "react"

import { useAppState } from "@/store/config";
import { loadTranslation } from "@/utils";
import { COMPANY } from "@/api"

const AdminUsersIndex: NextPage = ({ users }: any) => {
  const UserApp = () => <div>User App</div>
  const { dispatch } = useAppState()

  return <UserApp />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const translation = await loadTranslation(
    ctx.locale!,
    process.env.NODE_ENV === 'production'
  )
  const users = await COMPANY.getCompanies()
  return {
    props: {
      translation,
      users
    }
  }
}

AdminUsersIndex.getLayout = function getLayout(page: ReactElement) {
  return page
}

export default AdminUsersIndex
