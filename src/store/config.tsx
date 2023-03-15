import * as React from "react"

import { TASK } from "@/models/helper"
import {
  COMPANIES_API_SUCCESS,
  CREATED_COMPANY,
  CREATING_COMPANY,
  TCompaniesAction
} from './modules/companies'


export interface IState {
  tasksById?: Record<string, TASK.TaskProps>
  loadingTasks?: boolean
  customersById?: any
  loadingCustomers?: boolean
  pickupAddressesById?: any
  loadingPickupAddresses?: boolean
  company: any
  loadingCompany: boolean
  user: any
  loadingUser: boolean
  error: any

  adminCompaniesById?: any
  isCreatingCompany: boolean;
  adminUsersById?: any
  adminInvoicesById?: any
  adminBillingsById?: any
  accounts: any
}

const initialState: IState = {
  // dispatch platform
  tasksById: {},
  loadingTasks: false,
  customersById: {},
  loadingCustomers: false,
  pickupAddressesById: {},
  loadingPickupAddresses: false,
  company: {},
  loadingCompany: false,
  user: {},
  loadingUser: false,
  error: null,

  // admin companies
  adminCompaniesById: {},
  isCreatingCompany: false,
  //loadingAdminCompanies: false,

  // admin users
  adminUsersById: {},
  //isloadingAdminUsers: false,

  // admin invoices
  adminInvoicesById: {},
  //loadingAdminInvoices: false,

  adminBillingsById: {},

  // user account
  accounts: {}
}

// tasks types
export const TASKS_API_REQUEST = 'TASKS_API_REQUEST'
export type TASKS_API_REQUEST = typeof TASKS_API_REQUEST

export const TASKS_API_SUCCESS = 'TASKS_API_SUCCESS'
export type TASKS_API_SUCCESS = typeof TASKS_API_SUCCESS

export const TASKS_API_FAILED = 'TASKS_API_FAILED'
export type TASKS_API_FAILED = typeof TASKS_API_FAILED

// tasks action

export interface ITasksApiRequest {
  type: TASKS_API_REQUEST
}

export interface ITasksApiSuccess {
  type: TASKS_API_SUCCESS
  payload: Record<string, TASK.TaskProps>
}

export interface ITasksApiFailed {
  type: TASKS_API_FAILED
  payload: Array<any>
}

export const tasksApiRequest = (): ITasksApiRequest => ({
  type: TASKS_API_REQUEST
})

export const tasksApiSuccess = (payload: Record<string, TASK.TaskProps>): any => ({
  payload,
  type: TASKS_API_SUCCESS
})

export const taskApiFailed = (payload: any): ITasksApiFailed => ({
  payload,
  type: TASKS_API_FAILED
})

type TAction =
  | TCompaniesAction
  | ITasksApiRequest
  | ITasksApiSuccess
  | ITasksApiFailed

export const withData = (
  WrappedComponent: React.ComponentType<
    React.PropsWithChildren<{ initialState: IState }>
  >
) => {
  return ({ children }: React.PropsWithChildren<{}>) => {
    return (
      <WrappedComponent initialState={{} as IState}>
        {children}
      </WrappedComponent>
    )
  }
}

interface AppStateContextProps {
  state: IState;
  dispatch: React.Dispatch<any>
}

const AppStateContext = React.createContext<AppStateContextProps>(
  {
    state: initialState,
    dispatch: () => {},
  } as AppStateContextProps
)

export const reducer = (state: IState, action: TAction): IState => {
  switch (action.type) {
    case TASKS_API_REQUEST:
      return { ...state, loadingTasks: true }
    case TASKS_API_SUCCESS:
      return { ...state, loadingTasks: false, tasksById: action.payload }
    case TASKS_API_FAILED:
      return { ...state, loadingTasks: false, error: action.payload }
    
    // admin stores
    case COMPANIES_API_SUCCESS:
      return {...state, adminCompaniesById: action.payload}
    case CREATING_COMPANY: 
      return {...state, isCreatingCompany: true}
    case CREATED_COMPANY:
      return {
        ...state, 
        adminCompaniesById: {
          ...state.adminCompaniesById,
          [action.payload.id]: action.payload
        }
      }
    default:
      return state
  }
}

export const useAppState = () => {
  return React.useContext(AppStateContext)
}

export const AppStateProvider = ({ children }: React.PropsWithChildren<{initialState?: IState}>) => {
  const [state, dispatch] = React.useReducer(reducer, {} as any)
  
  React.useEffect(() => {
    console.log(state)
  }, [state])
  
  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      { children }
    </AppStateContext.Provider>
  )
}

