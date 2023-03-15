import gql from "graphql-tag";

// ADMIN API

export const CREATE_USERS = gql`
  mutation MyMutation($data: any) {
    insert_modeliver_test_db_users(objects: $data) {
      returning {
        company_id
        created_at
        created_by
        email
        full_name
        id
        lang
        role_id
      }
    }
  }
`

export const GET_USERS = gql`
  query getTasksByCompanyId {
    modeliver_test_db_users {
      company_id
      created_at
      created_by
      deleted_at
      deleted_by
      email
      company {
        address
        id
        business_domain
        city
        country
        created_at
        created_by
        deleted_at
        deleted_by
        latitude
        longitude
        name
        phone_number
        postal_code
        type
        updated_at
      }
      full_name
      id
      lang
      role_id
    }
  }
`

export const UPDATE_USER_BY_ID = gql`
  mutation UpdateUserById($id: Int!, $data: any) {
    update_modeliver_test_db_users(where: {id: {_eq: $id}}, _set: $data) {
      returning {
        company {
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
        }
        created_by
        created_at
        email
        full_name
        id
        lang
        role_id
      }
    }
  }
`
