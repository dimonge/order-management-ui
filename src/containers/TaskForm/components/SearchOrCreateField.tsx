import { Autocomplete, createFilterOptions, Dialog, TextField } from "@mui/material";
import * as React from "react"
import { Controller, useForm } from 'react-hook-form'
import PhoneInput from "react-phone-input-2";
import FieldAddressSearch from "./FieldAddressSearch";

interface OptionType {
  inputValue?: string;
  name: string;
}

const filter = createFilterOptions<OptionType>();
interface SearchOrCreateCustomerInterface {
  options: Array<any>;
  label: string;
}
const SearchOrCreateCustomer = ({
  options,
  label,
}: SearchOrCreateCustomerInterface) => {
  const [value, setValue] = React.useState<OptionType | null>(null)
  const [open, toggleOpen] = React.useState<boolean>(false)

  const handleClose = () => {
    setDialogValue({
      name: ''
    })
  }

  const [dialogValue, setDialogValue] = React.useState({
    name: ''
  })
  const { register, control, handleSubmit: reactHookFromHandleSubmit } = useForm()
  const onSubmit = (data: any) => console.log('form data: ', data)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setValue({
      name: dialogValue.name
    })
    handleClose()
  }

  return (
    <React.Fragment>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue == 'string') {
            setTimeout(() => {
              toggleOpen(true)
              setDialogValue({
                name: newValue
              })
            })
          } else if (newValue && newValue.inputValue) {
            toggleOpen(true)
            setDialogValue({
              name: newValue.inputValue
            })
          } else {
            setValue(newValue)
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params)

          if (params.inputValue !== '') {
            filtered.push({
              inputValue: params.inputValue,
              title: `Add "${params.inputValue}"`
            })
          }
          return filtered
        }}
        id="select-or-add-customer"
        options={options}
        getOptionLabel={(option) => {
          if (typeof option === 'string') {
            return option
          }
          if (option.inputValue) {
            return option.inputValue
          }
          return option.name
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(props, option) => <li {...props}>{option.title}</li>}
        sx={{ width: '100%' }}
        freeSolo
        renderInput={(params) => <TextField {...params} label={label} />}
      />
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={reactHookFromHandleSubmit(onSubmit)}>
          {/**
           * Name
           * Phone
           * Dropoff Location
           * Apt No
           * Email
           **/}

           <Controller
              name="name"
              control={control}
              render={({ field }) => (                  
                <TextField
                  {...field}                    
                />
              )}
            />
            <Controller
              name="phone"
              control={control}
              render={({ field }) => {
                return <PhoneInput country={'fi'} {...field} />
              }}
            />

            <FieldAddressSearch name="dropoff_location" control={control} />
            <Controller
              name="apt_no"
              control={control}
              render={({ field }) => <TextField {...field} />}
            />
        </form>
      </Dialog>
    </React.Fragment>
  )
}

export default SearchOrCreateCustomer;