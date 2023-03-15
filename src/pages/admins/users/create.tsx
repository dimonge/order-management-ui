import { GetServerSideProps, NextPage } from "next"
import { ReactElement } from "react"

const AdminCompanyCreate: NextPage = () => {
  return <div>Create company page</div>
}

AdminCompanyCreate.getLayout = function getLayout(page: ReactElement) {
  return page;
}

export default AdminCompanyCreate