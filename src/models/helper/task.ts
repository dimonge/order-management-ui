
export const API_FIELD_ID = "id";
export const API_FIELD_TYPE = "type"
export const API_FIELD_TRACKING_CODE = "tracking_code";
export const API_FIELD_STATUS = "status";
export const API_FIELD_CURRENCY = "currency"
export const API_FIELD_AMOUNT = "amount";

export const API_FIELD_EMAIL = "email"
export const API_FIELD_VAT_IN_PERCENT = "vat_in_percent"
export const API_FIELD_DISTANCE_IN_METER = "distance_in_meter"
export const API_FIELD_PICKUP_LOCATION = "pickup_location"
export const API_FIELD_DROPOFF_LOCATION = "dropoff_location"

export const API_FIELD_PICKUP_TIME = "pickup_time"
export const API_FIELD_ACTUAL_PICKUP_TIME = "actual_pickup_time"

export const API_FIELD_RETURNED_AT = "returned_at"

export const API_FIELD_DROPOFF_TIME = "dropoff_time"
export const API_FIELD_ACTUAL_DROPOFF_TIME = "actual_dropoff_time"

export const API_FIELD_CUSTOMER_SIGNATURE_TYPE = "customer_signature_type"
export const API_FIELD_PICKUP_COMMENTS_FOR_COURIER = "pickup_comments_for_courier"
export const API_FIELD_DROPOFF_COMMENTS_FOR_COURIER = "dropoff_comments_for_courier"

export type TaskProps = {
  id: string;
  type: string;
  tracking_code: string;
  status: string;
  currency: string;
  amount: number;
  email?: string;
  vat_in_percent: number;
  distance_in_meter: number;
  pickup_location: string;
  dropoff_location: string;
  custom_dropoff_location?: string;
  
  pickup_time: Date;
  actual_pickup_time?: Date;
  
  returned_at?: Date;

  dropoff_time: Date;
  actual_dropoff_time?: Date;

  customer_signature_type?: string;
  pickup_comments_for_courier?: string;
  dropoff_comments_for_courier?: string;

  courier_id?: number;
  order_id?: number;
  fleet_id?: number;

  created_at: Date;
  modified_at: Date;
  deleted_at?: Date;

  created_by: string;
  modified_by: string;
  deleted_by?: string;

  company_id?: string;
  customer_id?: string;
}

export const STATUS = {
  PENDING: "pending",
  CREATED: "created",
  ASSIGNED: "assigned",
  ON_WAY_TO_PICKUP: "on_way_to_pickup",
  IN_TRANSIT_TO_DELIVER: "in_transit_to_deliver",
  DELIVERED: "delivered",
  CANCELED: "canceled",
};


export const PENDING_STATUS = [STATUS.PENDING, STATUS.CREATED, STATUS.ASSIGNED]

const CUSTOMER_SIGNATURES_TYPE_ANY_SIGNATURE = "any_signature";
const CUSTOMER_SIGNATURES_TYPE_RECIPIENT_SIGNATURE = "recipient_signature";
const CUSTOMER_SIGNATURES_TYPE_LEAVE_AT_DOOR = "leave_at_door";

export const CUSTOMER_SIGNATURES_TYPE_MAP = {
  CUSTOMER_SIGNATURES_TYPE_ANY_SIGNATURE,
  CUSTOMER_SIGNATURES_TYPE_RECIPIENT_SIGNATURE,
  CUSTOMER_SIGNATURES_TYPE_LEAVE_AT_DOOR,
};

export const DELIVERY_TYPE_DELIVERY = "delivery";
export const DELIVERY_TYPE_DELIVERY_ESTIMATE = "delivery_estimate";
export const DELIVERY_TYPE_FETCH = "fetch";

export const DELIVERY_TYPE_MAP = {
  DELIVERY_TYPE_FETCH,
  DELIVERY_TYPE_DELIVERY,
  DELIVERY_TYPE_DELIVERY_ESTIMATE,
};

export const DELIVERY_TYPE_LIST = Object.values(DELIVERY_TYPE_MAP);

export const getSignatureType = (value: string) => {
  return value ? CUSTOMER_SIGNATURES_TYPE_LEAVE_AT_DOOR : CUSTOMER_SIGNATURES_TYPE_ANY_SIGNATURE;
};

export const isNoContactSignatureType = (value: string) => {
  return value === CUSTOMER_SIGNATURES_TYPE_LEAVE_AT_DOOR ? true : false
}

export const getTrackingCode = (task: TaskProps) => {
  const code = task.tracking_code
  if (!!code) {
    return code.toUpperCase();
  } else {
    return "";
  }
};

const COURIER_STATUS_MESSAGE_FOR_STORE: any = {
  assigned: 'has been assigned the task',
  on_way_to_pickup: 'is on the way to you',
  in_transit_to_deliver: 'is on the way to deliver',
}

export const getCourierMessageForStore = ({ status }: TaskProps) => {
  const message = COURIER_STATUS_MESSAGE_FOR_STORE[status]
  return message;
}

export const waitingForPickupFilter = (tasks: Array<TaskProps> | null | undefined) => {
  if (!tasks) return []
  return tasks.filter((item: TaskProps) =>
    item.status?.match(/pending|created|assigned|on_way_to_pickup/))
}

export const inTransitFilter = (tasks: Array<TaskProps> | undefined) => {
  if (!tasks) return []
  return tasks.filter((item: TaskProps) => 
    item.status?.match(/in_transit_to_deliver/)
  )
}

export const tasksById = (tasks: Array<TaskProps> | null) => {
  if (!tasks) {
    return {}
  }

  return tasks.reduce((byId, task) => {
    return {...byId, [task.id]: task}
  }, {})
}
