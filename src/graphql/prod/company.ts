import gql from "graphql-tag";

// ADMIN API
export const CREATE_COMPANY = gql`
  mutation createCompany ($data: any){
    insert_modeliver_test_db_companies_one(object: $data) {
      address
      business_domain
      city
      country
      created_at
      created_by
      latitude
      id
      longitude
      name
      phone_number
      postal_code
      type
      updated_by
    }
  }
`
/*export const GET_COMPANIES = gql``

export const UPDATE_COMPANY_BY_ID = gql``
*/