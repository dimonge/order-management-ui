export const byId = (list?: Array<any>, idType="id") => {
  if (!list) return {}

  return list.reduce((acc: any, item: any) => {
    if (!item.id) return acc;
    return {
      ...acc, 
      [item?.id]: item
    }
  },{})
}