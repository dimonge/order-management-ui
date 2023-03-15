import dynamic from "next/dynamic";
import React, { ReactElement } from 'react'
import { useRouter } from "next/router";
import DashboardLayout from '@/containers/Layout/DashboardLayout'
import { GetServerSideProps, GetStaticProps } from "next";
import { loadTranslation } from "@/utils";
import { COMPANY } from "@/api";
import BaseProgress from "@/components/BaseProgress";

interface CompanyDetailsPageProps {
  data: any;
}
const CompanyDetailsPage = (props: CompanyDetailsPageProps) => {
  const CompanyDetails = dynamic(
    () => import('@/containers/CompaniesApp/CompanyDetails'),
    {
      ssr: false
    }
  )
  const router = useRouter()
  const { id } = router.query;
  const [data, setData] = React.useState<any>({
    loading: false,
    company: null,
    error: null
  })
  React.useEffect(() => {

    function getCompanyById() {
      setData({
        loading: true,
        company: null,
        error: null
      })
      COMPANY.getCompanyById(id).then((data) => {
        setData({
          loading: false,
          company: data,
          error: null
        })
        console.log('Xxxx: ', data)
      }).catch((error: any) => {
        setData({
          loading: false,
          company: null,
          error: `Something went wrong. Contact support`
        })
      }) 
    }
    getCompanyById()
  }, [])
  if (data.loading) return <BaseProgress />
  return <CompanyDetails data={data.company} />
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

CompanyDetailsPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default CompanyDetailsPage