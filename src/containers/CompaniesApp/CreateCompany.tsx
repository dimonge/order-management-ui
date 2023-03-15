
import { useState } from 'react'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  TextField
} from '@mui/material'
import { useRouter } from 'next/router'
import { COMPANY } from '@/api'

const type = [
  {
    value: 'fleets_manager',
    label: 'Fleets manager'
  },
  {
    value: 'delivery_manager',
    label: 'Delivery manager'
  },
]


const business_domain = [
  {
    value: 'grocery',
    label: 'Grocery'
  },
  {
    value: 'catering',
    label: 'Catering'
  },
  {
    value: 'electronics',
    label: "Electronics"
  }
]

const CreateCompany = (props: any) => {
  const router = useRouter()

  const [values, setValues] = useState({
    name: '',
    phone_number: '',
    address: '',
    postal_code: '',
    city: '',
    country: '',
    type: '',
    business_domain: ''
  })

  const handleChange = (event: any) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })  
  }

  const handleSaveCompany = () => {
    COMPANY.createCompany(values).then((company) => {
      router.push(`/admins/companies/${company.id}`)
    })
  }
  return (
    <Container>
      <form autoComplete="off" noValidate {...props}>
        <Card>
          <CardHeader
            subheader="Add the company information and save"
            title="New Company form"
          />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Please specify the company name"
                  label="Company name"
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
                  label="Phone Number"
                  name="phone_number"
                  onChange={handleChange}
                  required
                  value={values.phone_number}
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
                  label="Type"
                  name="type"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.type}
                  variant="outlined"
                >
                  {type.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Business domain"
                  name="business_domain"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.business_domain}
                  variant="outlined"
                >
                  {business_domain.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
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