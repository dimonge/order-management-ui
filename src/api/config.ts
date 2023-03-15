import { ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client"
import { setContext } from '@apollo/client/link/context';

const uri = process.env.NEXT_PUBLIC_PARTNER_APP_URL;

const httpLink = createHttpLink({
  uri
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      'x-hasura-admin-secret': process.env.NEXT_PUBLIC_X_HASURA_ADMIN_SECRET
    }
  }
});


const apiClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()  
})


export const TEST_DB_NAME = "modeliver_test_db"
export const PROD_DB_NAME = "modeliver_prod_db"

export const getDBName = () => {
  if (process.env.NODE_ENV !== "production") {
    return TEST_DB_NAME
  }
  return PROD_DB_NAME
}

export const DB_FIELDS = {
  ADDRESSES: "addresses",
  BILLINGS: "billings",
  COMPANIES: "companies",
  CUSTOMERS: "customers",
  INVOICES: "invoices",
  PRICES: "prices",
  TASKS: "tasks",
  USERS: "users"
}
export const getResponse = (response: any, fieldName: string) => {
  const { errors, data } = response;
  if (errors) throw errors;
  const field = `${getDBName()}_${fieldName}`
  console.log("data: ", field, response)
  return data[field]
}

export default apiClient;
