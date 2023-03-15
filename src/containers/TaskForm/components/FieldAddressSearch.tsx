import React, { useState } from 'react'
import { Controller } from 'react-hook-form'
import AsyncSelect from 'react-select/async'

const processOptions = (items: any) => {
  if (!items) return []

  if (items.features) {
    return items.features.map((item: any) => {
      return {
        label: item.place_name,
        value: item.place_name,
        location: item
      }
    })
  }
}

const token = process.env.NEXT_PUBLIC_MAPBOX_API_KEY

const FieldAddressSearch = ({ name, control }: any) => {
  const promiseOptions = async (inputValue: string) => {
    //TODO: pass country=fi params into the api to filter the data
    const api = `https://api.mapbox.com/geocoding/v5/mapbox.places/${inputValue}.json?types=place%2Cpostcode%2Caddress&access_token=${token}`
    try {
      const response = await fetch(api)
      const data = await response.json()

      return processOptions(data)
    } catch (error) {
      return []
    }
  }
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }: any) => (
        <AsyncSelect
          cacheOptions
          isClearable
          contentEditable
          defaultOptions
          loadOptions={promiseOptions}
          {...field}
        />
      )}
    />
  )
}

export default FieldAddressSearch
