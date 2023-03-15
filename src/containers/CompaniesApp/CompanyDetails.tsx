import BaseTabs from "@/components/BaseTabs"
import { Container } from "@mui/material"
import CompanyUsers from "./CompanyUsers";
import Addresses from "./components/Addresses"
import Details from "./components/Details"

interface DetailsProps {
  data: any;
}

const CompanyDetails = ({ data }: DetailsProps) => {
  /**
   * Tabs 
   *  1. Details
   *  2. Addresses
   *  3. Users
   *  4. Invoices
   */
  const tabs = [
    {
      label: 'Details',
      render: <Details data={data} />
    },
    {
      label: 'Addresses',
      render: <Addresses items={data.addresses} />
    },
    {
      label: 'Users',
      render: <CompanyUsers data={data.users} />
    }
  ]
  return (
    <Container>
      <BaseTabs tabs={tabs} />
    </Container>
  )
}

export default CompanyDetails