import gql from "graphql-tag";

// ADMIN API

export const CREATE_COMPANY = gql`
  mutation createCompany($data: modeliver_test_db_companies_insert_input!) {
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

export const GET_COMPANIES = gql`
  query getCompanies {
    modeliver_test_db_companies {
      address
      business_domain
      city
      country
      created_at
      created_by
      id
      latitude
      longitude
      name
      phone_number
      postal_code
      type
      updated_at
      updated_by
    }
  }
`

export const GET_COMPANY_BY_ID = gql`
  query getCompanyById($id: Int!) {
    modeliver_test_db_companies_by_pk(id: $id) {
      address
      business_domain
      city
      country
      id
      latitude
      longitude
      name
      phone_number
      postal_code
      type
      addresses {
        address
        apartment_no
        city
        company_id
        country
        created_at
        created_by
        is_approved
        id
        postal_code
        name
        latitude
        longitude
      }      
    }
  }
`

export const UPDATE_COMPANY_BY_ID = gql`
  mutation MyMutation($id: Int!, $data: any) {
    update_modeliver_test_db_companies(where: {id: {_eq: $id}}, _set: $data) {
      returning {
        address
        business_domain
        city
        country
        created_at
        created_by
        id
        latitude
        longitude
        name
        phone_number
        postal_code
        type
        updated_at
      }
    }
  }
`

export const CREATE_COMPANY_ADDRESS_ID = gql`
  mutation MyMutation($data: modeliver_test_db_addresses_insert_input!) {
    insert_modeliver_test_db_addresses_one(object: $data) {
      address
      apartment_no
      city
      country
      company_id
      created_at
      created_by
      customer_id
      id
      is_approved
      latitude
      longitude
      name
      postal_code
      updated_at
      updated_by
    }
  }

`

export const GET_COMPANY_ADDRESSES = gql`
  query getCompanyAddresses($companyId: any) {
    modeliver_test_db_addresses(where: {company_id: {_eq: $companyId}}) {
      address
      apartment_no
      city
      company_id
      country
      created_at
      created_by
      deleted_at
      deleted_by
      id
      is_approved
      latitude
      longitude
      name
      postal_code
    }
  }
`