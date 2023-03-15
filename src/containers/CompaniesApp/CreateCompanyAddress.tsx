
import React, { useState } from 'react'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Switch,
  TextField
} from '@mui/material'

import { useRouter } from 'next/router'
import { COMPANY } from '@/api'

const CreateCompany = (props: any) => {
  const router = useRouter()

  const [values, setValues] = useState({
    company_id: props.companyId,
    name: '',
    address: '',
    apartment_no: "",
    postal_code: '',
    city: '',
    country: '',
    is_approved: false,
  })

  const handleChange = (event: any) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })  
  }

  const handleSaveCompany = () => {
    COMPANY.createCompanyAddressId(values).then((addresses) => {
      router.push(`/admins/companies/${props.companyId}`)
    })
  }
  return (
    <Container>
      <form autoComplete="off" noValidate {...props}>
        <Card>
          <CardHeader
            subheader="Add the company address"
            title="New Address form"
          />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Please specify the company name"
                  label="Name"
                  name="name"
                  onChange={handleChange}
                  required
                  value={values.name}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Address"
                  name="address"
                  onChange={handleChange}
                  required
                  value={values.address}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Apartment No"
                  name="apartment_no"
                  onChange={handleChange}
                  required
                  value={values.apartment_no}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Postal code"
                  name="postal_code"
                  onChange={handleChange}
                  type="number"
                  value={values.postal_code}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="City"
                  name="city"
                  onChange={handleChange}
                  required
                  value={values.city}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Country"
                  name="country"
                  onChange={handleChange}
                  required
                  value={values.country}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <label>Is approved?</label>
                <Switch
                  checked={values.is_approved}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setValues({...values, is_approved: event.target.checked })
                  }}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
                
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              p: 2
            }}
          >
            <Button
              color="primary"
              variant="contained"
              onClick={handleSaveCompany}
            >
              Create Company
            </Button>
          </Box>
        </Card>
      </form>
    </Container>
  )
}

export default CreateCompany;