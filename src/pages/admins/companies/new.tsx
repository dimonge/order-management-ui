import dynamic from "next/dynamic"
import { ReactElement } from "react"
import DashboardLayout from '@/containers/Layout/DashboardLayout'
import { GetStaticProps } from "next"
import { loadTranslation } from "@/utils"

function AdminCompanyCreate() {
  const CreateCompany = dynamic(() => import("@/containers/CompaniesApp/CreateCompany"), {
    ssr: false
  })
  return <CreateCompany />
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = await loadTranslation(
    ctx.locale!,
    process.env.NODE_ENV === 'production'
  )
  return {
    props: {
      translation,
    }
  }
}

AdminCompanyCreate.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default AdminCompanyCreate