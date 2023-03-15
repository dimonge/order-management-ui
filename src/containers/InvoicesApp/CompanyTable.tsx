import * as React from "react"
import BaseTable from "@/components/BaseTable";
import { GridColDef } from "@mui/x-data-grid";
import BaseCard from "@/components/FrontOfficeComponents/BaseCard";
import { Container, Grid, Typography } from "@mui/material";
import BaseButton from "@/components/FrontOfficeComponents/BaseButton";
import BaseDialog from "@/components/BaseDialog";
import CreateCompanyStepper from "./CreateCompanyStepper";
import CreateCompany from "./CreateCompany";

type CompanyTableProps = {
  data: any;
}

const COLUMNS: GridColDef[] = [
  { field: "id", hide: true },
  { field: "name", headerName: "Name", width: 150 },
  { field: "type", headerName: "Business Type", width: 200},
  { field: "phone_number", headerName: "Phone Number", width: 150 },
  { field: "address", headerName: "Address", width: 300 },
  { field: "city", headerName: "City", width: 150 },
  { field: "postal_code", headerName: "Postal Code", width: 100 },
  { field: "country", headerName: "Country", width: 100},
  { field: "business_domain", headerName: "Business domain", width: 250 }
];

const CompanyTable = (props: CompanyTableProps) => {
  const [isOpenCreateCompany, setIsOpenCreateCompany] = React.useState(false)
  const handleCreateCompany = () => {
    setIsOpenCreateCompany(!isOpenCreateCompany)
  }

  const onClose = () => {
    setIsOpenCreateCompany(false)
  }
  return (
    <React.Fragment>
      <Container>
        <Grid container alignItems="center">
          <Grid item>
            <Typography sx={{ m: 1 }} variant="h4">
              Companies
            </Typography>
          </Grid>
          <Grid item>
            <BaseButton onClick={handleCreateCompany}>
              Create company
            </BaseButton>
          </Grid>
        </Grid>
        <BaseCard>
          <div style={{ height: '80vh', width: '100%' }}>
            <BaseTable rows={props.data} columns={COLUMNS} />
          </div>
        </BaseCard>
      </Container>
      {isOpenCreateCompany && (
        <BaseDialog
          title="Create company"
          onClose={handleCreateCompany}
          actions={
            <React.Fragment>
              <BaseButton onClick={onClose}>Close</BaseButton>
            </React.Fragment>
          }
        >
          <CreateCompany onClick={handleCreateCompany} />
        </BaseDialog>
      )}
    </React.Fragment>
  )
}

export default CompanyTable