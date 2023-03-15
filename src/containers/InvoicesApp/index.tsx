import * as React from "react"

import { useAppState } from "@/store/config";
import { selectAdminCompanies } from "@/store/selectors/companies";
import CompanyTable from "./CompanyTable";


const CompaniesApp = () => {
  const { state } = useAppState()

  const items = selectAdminCompanies(state)

  return (    
    <CompanyTable data={items} />
  )
}

export default CompaniesApp;