import React from 'react'
import BaseTable from '@/components/BaseTable'
import { useDemoData } from '@mui/x-data-grid-generator'

export default {
  title: 'DataTable',
  component: BaseTable
}

const Template = () => {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 10,
    maxColumns: 6
  })
  console.log("data: ", data)
  return (
    <div style={{ height: "80vh", width: "100%" }}>
      <BaseTable rows={data.rows} columns={data.columns} {...data}/>
    </div>
  )
}

export const Table = () => <Template />
