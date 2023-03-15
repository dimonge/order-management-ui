import * as React from "react"
import BaseTable from "@/components/BaseTable";
import { GridColDef } from "@mui/x-data-grid";
import BaseCard from "@/components/FrontOfficeComponents/BaseCard";
import { Container, Grid, Typography } from "@mui/material";
import BaseButton from "@/components/FrontOfficeComponents/BaseButton";
import BaseDialog from "@/components/BaseDialog";
import CreateCompany from "./CreateCompany";
import { useRouter } from "next/router";

type CompanyTableProps = {
  data: any  
}

  const COLUMNS: GridColDef[] = [
    { field: 'id', hide: true },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'type', headerName: 'Business Type', width: 200 },
    { field: 'phone_number', headerName: 'Phone Number', width: 150 },
    { field: 'address', headerName: 'Address', width: 200 },
    { field: 'city', headerName: 'City', width: 100 },
    { field: 'postal_code', headerName: 'Postal Code', width: 100 },
    { field: 'country', headerName: 'Country', width: 100 },
    { field: 'business_domain', headerName: 'Business domain', width: 150 }
  ]


const CompanyTable = (props: CompanyTableProps) => {
  const route = useRouter()

  const onOpen = () => {
    route.push(`/admins/companies/new`)
  }

  const onRowClick = (params: any) => {    
    route.push(`/admins/companies/${params.id}`)
  }
  console.log("CompanyTable: ", props.data)
  return (
      <Container>
        <Grid container alignItems="center">
          <Grid item>
            <Typography sx={{ m: 1 }} variant="h4">
              Companies
            </Typography>
          </Grid>
          <Grid item>
            <BaseButton onClick={onOpen}>Create company</BaseButton>
          </Grid>
        </Grid>
        <BaseCard>
          <div style={{ height: '80vh', width: '100%' }}>
            <BaseTable rows={props.data} columns={COLUMNS} onRowClick={onRowClick} />
          </div>
        </BaseCard>
      </Container>
  )
}

export default CompanyTable