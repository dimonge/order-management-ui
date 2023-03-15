import gql from "graphql-tag";

// PARTNER API
export const GET_TASKS_BY_COMPANY_ID = gql`
  query MyQuery ($companyId: Int!){
    modeliver_test_db_tasks(where: {company_id: {_eq: $companyId}}) {
      actual_pickup_time
      courier {
        full_name
        id
        email
      }
      actual_dropoff_time
      amount
      comment_for_courier
      customer_signature_type
      distance_in_meter
      dropoff_location
      dropoff_time
      id
      pickup_location
      pickup_time
      status
      tracking_code
      type
      vat_in_percent
    }
  }    
`

export const CREATE_TASKS = gql`
  mutation createTasks($data: any) {
    insert_modeliver_test_db_tasks_one(object: $data) {
      actual_dropoff_time
      actual_pickup_time
      amount
      comment_for_courier
      company {
        address
        business_domain
        city
        id
        latitude
        longitude
        name
        phone_number
        postal_code
        type
        updated_at
        updated_by
        country
      }
      created_at
      created_by
      customer_signature_type
      distance_in_meter
      dropoff_location
      dropoff_time
      id
      pickup_location
      pickup_time
      status
      tracking_code
      type
      vat_in_percent
    }
  }
`