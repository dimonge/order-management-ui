
export const API_FIELD_ID = "id";
export const API_FIELD_NAME = "name";
export const API_FIELD_ADDRESS = "address";
export const API_FIELD_CITY = "city";
export const API_FIELD_POSTAL_CODE = "postal_code";
export const API_FIELD_COUNTRY = "addressCountry";
export const API_FIELD_IS_APPROVED = "is_approved";

export const API_FIELD_COMPANY_ID = "company_id";

interface PickupAddressProps {
  id: string;
  name: string;
  address: string;
  city: string;
  postal_code: string;
  country: string;
  is_approved: boolean;

  created_at: Date;
  modified_at: Date;
  deleted_at?: Date;

  created_by: string;
  modified_by: string;
  deleted_by?: string;

  company_id: string;

}
export const getFullAddress = (pickupAddress: PickupAddressProps) => {
  if (!!pickupAddress) {
    const address = `${pickupAddress.address}, `;
    const postal_code = pickupAddress.postal_code;
    const city = pickupAddress.city
    return `${address}${postal_code}${city}`;
  } else {
    return "";
  }
};

export const selectAddressOption = (pickupAddress: PickupAddressProps) => {
  return {
    label: `${pickupAddress.name} (${getFullAddress(pickupAddress)})`,
    value: pickupAddress.id
  };
};
export const selectAddressOptions = (addresses: Array<PickupAddressProps>) => {
  if (addresses && addresses.length > 0) {
    return addresses.map(selectAddressOption);
  }
  return [];
};
