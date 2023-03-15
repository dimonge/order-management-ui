import dynamic from 'next/dynamic'
import { ReactElement } from 'react'
import DashboardLayout from '@/containers/Layout/DashboardLayout'
import { GetStaticProps } from 'next'
import { loadTranslation } from '@/utils'
import { useRouter } from 'next/router'

function AdminCompanyCreate() {
  const router = useRouter()
  const CreateCompanyAddress = dynamic(
    () => import('@/containers/CompaniesApp/CreateCompanyAddress'),
    {
      ssr: false
    }
  )

  return <CreateCompanyAddress companyId={router.query.company_id} />
}

export const getStaticProps: GetStaticProps = async (ctx) => {
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

AdminCompanyCreate.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default AdminCompanyCreate
