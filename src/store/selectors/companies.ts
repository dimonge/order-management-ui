import { IState } from "../config";

export const selectAdminCompaniesByIdList = (state?: IState) => {
  if (!state) return {}
  return state.adminCompaniesById
}


export const selectAdminCompanies = (state: IState) => {
  return Object.values(selectAdminCompaniesByIdList(state))
}