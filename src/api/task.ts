import apiClient, { DB_FIELDS, getResponse } from "@/api/config"
import apiEnv from "@/graphql"

const FIELD_NAME = DB_FIELDS.TASKS
/**
 * Fetch Tasks by company id
 * Query for partner app
 * @returns tasks by company id
 */
export const getTasksByCompanyId = async (companyId: number) => {
  const response = await apiClient.query({
    query: apiEnv.TASK.GET_TASKS_BY_COMPANY_ID,
    variables: { companyId }
  })
  return getResponse(response, FIELD_NAME);
}

export const createTasks = async (data: any) => {
  const response = await apiClient.mutate({
    mutation: apiEnv.TASK.CREATE_TASKS,
    variables: { object: data }
  })

  return response;
}

export const updateTasks = async(data: any) => {
  const response = await {}
  return response;
}