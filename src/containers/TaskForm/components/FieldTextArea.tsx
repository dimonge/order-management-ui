import React from 'react'
import { Label, Textarea } from '@modeliver/eli-ui'

type FieldInputProps = {
  title: string
  labelProps: any
}

const FieldTextarea = ({ title, labelProps, ...props }: FieldInputProps) => {
  return (
    <div>
      <Label {...labelProps}>
        <span>{title}</span>
        <Textarea {...props} />
      </Label>
    </div>
  )
}

export default FieldTextarea
