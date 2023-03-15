import { COMPANY } from "@/api"

// companies types
export const COMPANIES_API_REQUEST = 'COMPANIES_API_REQUEST'
export type COMPANIES_API_REQUEST = typeof COMPANIES_API_REQUEST

export const COMPANIES_API_SUCCESS = 'COMPANIES_API_SUCCESS'
export type COMPANIES_API_SUCCESS = typeof COMPANIES_API_SUCCESS

export const COMPANIES_API_FAILED = 'COMPANIES_API_FAILED'
export type COMPANIES_API_FAILED = typeof COMPANIES_API_FAILED

export const CREATING_COMPANY = 'CREATING_COMPANY'
export type CREATING_COMPANY = typeof CREATING_COMPANY

export const CREATED_COMPANY = "CREATE_COMPANY"
export type CREATED_COMPANY = typeof CREATED_COMPANY

// companies action

export interface ICompaniesApiRequest {
  type: COMPANIES_API_REQUEST
}

export interface ICompaniesApiSuccess {
  type: COMPANIES_API_SUCCESS;
  payload: any;
}

export interface ICreatingCompany {
  type: CREATING_COMPANY;
}

export interface ICreatedCompany {
  type: CREATED_COMPANY,
  payload: any;
}

export interface ICompaniesApiFailed {
  type: COMPANIES_API_FAILED
}

export const companiesApiRequest = (): ICompaniesApiRequest => ({
  type: COMPANIES_API_REQUEST
})

export const companiesApiSuccess = (payload: any): ICompaniesApiSuccess => ({
  type: COMPANIES_API_SUCCESS,
  payload
})

export const companiesApiFailed = (): ICompaniesApiFailed => ({
  type: COMPANIES_API_FAILED
})

export const creatingCompany = (): ICreatingCompany => ({
  type: CREATING_COMPANY,
})

export const createdCompany = (payload: any): ICreatedCompany => ({
  type: CREATED_COMPANY,
  payload
})

export type TCompaniesAction = | ICompaniesApiRequest | ICompaniesApiSuccess 
| ICompaniesApiFailed | ICreatingCompany | ICreatedCompany


export const postCompany = (payload: any) =>  async(dispatch: any, getState: any) => {
  try {
    dispatch({ type: 'CREATING_COMPANY' })
    console.log("payload: ", payload)
    const company = await COMPANY.createCompany(payload)
    console.log("company: ", company)
    dispatch({ type: CREATED_COMPANY, payload: company })
    return company;
  }catch(error) {
    dispatch({ type: "ERROR", error })
  }
}