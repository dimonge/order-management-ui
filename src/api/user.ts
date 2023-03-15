import apiEnv from "@/graphql"
import apiClient from "./config"

/**
 * Admin API
 * @param data 
 * @returns 
 */
export const createUsers = async (data: any) => {
  const response = await apiClient.mutate({
    mutation: apiEnv.USER.CREATE_USERS,
    variables: { objects: data}
  })
  return response
}

/**
 * Admin API
 * @param data 
 * @returns 
 */
export const getCompanies = async () => {
  const response = await apiClient.query({
    query: apiEnv.COMPANY.GET_COMPANIES,
  })
  return response;
}
