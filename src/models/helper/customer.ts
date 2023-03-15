export const API_FIELD_ID = "id";
export const API_FIELD_EMAIL = "email";
export const API_FIELD_FULL_NAME = "full_name"
export const API_FIELD_APARTMENT_NO = "apartment_no";
export const API_FIELD_PHONE_NUMBER = "phone_number";
export const API_FIELD_ADDRESS = "address"
export const API_FIELD_CITY = "city"
export const API_FIELD_POSTAL_CODE = "postal_code"
export const API_FIELD_COUNTRY = "country"

export const API_FIELD_LONGITUDE = "longitude";
export const API_FIELD_LATITUDE = "latitude";

export const API_FIELD_COMPANY_ID = "company_id"

export const ADDRESS_TYPE = {
  BILLING_ADDRESS: "billing_address",
  SHIPPING_ADDRESS: "shipping_address",
  DEFAULT_ADDRESS: "default_address"
} 

type CustomerProps = {
  id: string;
  email: string;
  full_name: string;
  apartment_no: string;
  phone_number: string;
  address: string;
  city: string;
  postal_code: string;
  country: string;

  latitude: number; 
  longitude: number;

  created_at: Date;
  modified_at: Date;
  deleted_at: Date;

  created_by: string;
  modified_by: string;
  deleted_by: string;

  tasks: Array<any>;
  company_id: string;
}
export const selectCustomerOptions = (customers: Array<CustomerProps>) => {
  if (!!customers) {
    return customers
      .map((customer: CustomerProps) => {
        return {
          label: customer.full_name,
          value: customer.id
        };
      })
      .sort();
  } else {
    return [];
  }
};

export const getAddress = (customer: CustomerProps) => {
  if (!!customer) {
    return customer.address
  } else {
    return "";
  }
};

export const getFullAddress = (customer: CustomerProps) => {
  if (!!customer) {
    const address = customer.address;
    const postal_code = `${customer.postal_code}, `;
    const city = customer.city;
    return `${address}${postal_code}${city}`;
  } else {
    return "";
  }
};

export const selectCustomerAddressOption = (customer: CustomerProps) => {
  return {
    label: getFullAddress(customer),
    value: customer.id
  };
};

export const selectCustomerAddressOptions = (customers: Array<CustomerProps>) => {
  if (!!customers && customers.length > 0) {
    return customers.map(selectCustomerAddressOption);
  }
  return [];
};

export const hasId = (customer: CustomerProps) => {
  return !!customer.id;
};


export const prepareCustomerForm = (customer: CustomerProps) => {
  return {    
    [API_FIELD_EMAIL]: customer.email,
    [API_FIELD_APARTMENT_NO]: customer.apartment_no,
  };
};