import React from 'react'
import { Label } from '@modeliver/eli-ui'
import { Select } from '@windmill/react-ui'

type OptionProps = {
  id: number | string
  label: string
  value: string | number
}

type FieldSelectProps = {
  item: OptionProps
  title: string
  options: OptionProps[]
  labelProps: any
  onChange: (value: OptionProps) => void
}
const FieldSelect = ({
  title,
  options,
  labelProps,
  ...props
}: FieldSelectProps) => {
  const selectOptions = options.map((option: OptionProps) => {
    return <option value={option.value}>{option.label}</option>
  })
  return (
    <div>
      <Label {...labelProps}>
        <span>{title}</span>
        <Select className="mt-1" {...props}>
          {selectOptions}
        </Select>
      </Label>
    </div>
  )
}

export default FieldSelect
