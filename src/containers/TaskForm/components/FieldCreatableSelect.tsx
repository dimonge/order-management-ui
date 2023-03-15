import React from 'react'
import CreatableSelect from 'react-select/creatable'
import { ActionMeta, OnChangeValue } from 'react-select'
import { Input, Label } from '@modeliver/eli-ui'

type FieldCreatableSelectProps = {
  value: any
  options: any //Array<Record<string, string>>
  onChange: (value: any) => void
  title: string
  labelProps: any
}
const FieldCreatableSelect = ({
  title,
  options,
  onChange,
  labelProps,
  ...props
}: FieldCreatableSelectProps) => {
  console.log('xxxxxxx: ', props)
  const handleChange = (
    newValue: OnChangeValue<typeof options, false>,
    actionMeta: ActionMeta<typeof options>
  ) => {
    console.log('Value changed')
    console.log('newValue', newValue)
    console.log('action:', actionMeta.action)
    console.groupEnd()
    onChange(newValue)
  }

  const handleInputChange = (inputValue: any, actionMeta: any) => {
    console.log('Input Changed')
    console.log(inputValue)
    console.log('action:', actionMeta.action)
    console.groupEnd()
    onChange(inputValue)
  }
  return (
    <div>
      <Label {...labelProps}>
        <span>{title}</span>
        <CreatableSelect
          isClearable
          onChange={handleChange}
          onInputChange={handleInputChange}
          options={options}
          {...props}
        />
      </Label>
    </div>
  )
}

export default FieldCreatableSelect
