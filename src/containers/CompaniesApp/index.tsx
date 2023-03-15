import CompanyTable from "./CompanyTable";

interface CompaniesAppProps {
  items: Array<any>;
}
const CompaniesApp = (props: CompaniesAppProps) => {
  return <CompanyTable data={props.items} />
}

export default CompaniesApp;