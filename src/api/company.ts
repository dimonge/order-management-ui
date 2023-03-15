import apiEnv from "@/graphql"
import apiClient, { DB_FIELDS, getDBName, getResponse } from "./config"


const FIELD_NAME = DB_FIELDS.COMPANIES;
/**
 * Admin CreateCompany API
 * @param data 
 * @returns 
 */
export const createCompany = async (data: any) => {

  const response = await apiClient.mutate({
    mutation: apiEnv.COMPANY.CREATE_COMPANY,
    variables: { data }
  })
  if (response.errors) {
    throw response.errors;
  }
  
  return response.data[`insert_${getDBName()}_${FIELD_NAME}_one`]
}

/**
 * Admin Get Companies API
 * @param data 
 * @returns 
 */
 export const getCompanies = async () => {
  const response = await apiClient.query({
    query: apiEnv.COMPANY.GET_COMPANIES,
  })

  return getResponse(response, FIELD_NAME)
}

/**
 * Admin UpdateCompanies API
 * @returns 
 */
export const updateCompanyById = async(data: any) => {
  const response = await apiClient.mutate({
    mutation: apiEnv.COMPANY.UPDATE_COMPANY_BY_ID,
    variables: { id: data.id, data }
  })

  if (response.errors) {
    throw response.errors;
  }
  
  return response.data[`update_${getDBName()}_${FIELD_NAME}`]
}

/**
 * Admin Get company by id API
 */

export const getCompanyById = async(id: any) => {
  const response = await apiClient.query({
    query: apiEnv.COMPANY.GET_COMPANY_BY_ID,
    variables: { id }
  })
  console.log("RESPONSE: ", response)
  return response.data.modeliver_test_db_companies_by_pk;
}

export const createCompanyAddressId = async(data: any) => {
  const response = await apiClient.mutate({
    mutation: apiEnv.COMPANY.CREATE_COMPANY_ADDRESS_ID,
    variables: {data }
  })
  return response.data.insert_modeliver_test_db_addresses_one;
}

export const getCompanyAddresses = async(companyId: any) => {
  const response = await apiClient.query({
    query: apiEnv.COMPANY.GET_COMPANY_ADDRESSES,
    variables: { companyId }
  })
  return response.data.modeliver_test_db_addresses;
} 