import React from 'react'
import { Input, Label } from '@modeliver/eli-ui'

type FieldInputProps = {
  title: string
  register: any
  name: any
}

const FieldInput = ({ register, name, title, ...rest }: any) => {
  return <input {...register(name)} {...rest} />
}

export default FieldInput
