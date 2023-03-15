const fs = require('fs')
const Chance = require('chance')

var chance = new Chance()

const STATUS = ['not_started', 'pending', 'assigned', 'intransit', 'delivered']

const mockCompany = {
  id: chance.guid({ version: 5 }),
  name: chance.name(),
  phone_number: chance.phone(),
  address: chance.address(),
  city: chance.city(),
  postal_code: chance.postal(),
  country: 'Finland',
  latitude: chance.latitude(),
  longitude: chance.longitude(),
  type: 'delivery_manager',
  business_domain: 'Grocery'
}

const mockCustomer = () => {
  return {
    id: chance.guid({ version: 5 }),
    email: chance.email(),
    full_name: chance.name(),
    apartment_no: chance.string({ numeric: true, length: 4 }),
    phone_number: chance.phone(),
    address: chance.address(),
    city: chance.city(),
    postal_code: chance.postcode(),
    country: 'Finland',
    latitude: chance.latitude({ min: 28.7, max: 38.9 }),
    longitude: chance.longitude({ min: 28.7, max: 100.9 }),
    company_id: mockCompany.id
  }
}

const genCustomers = (count = 5) => {
  const data = []

  for (var i = 0; i <= count; i++) {
    data.push(mockCustomer())
  }
  return data
}

const mockPickupAddress = () => {
  return {
    id: chance.guid({ version: 5 }),
    name: chance.name(),
    address: chance.address(),
    city: chance.city(),
    postal_code: chance.postal(),
    country: 'Finland',
    is_approved: chance.bool(),
    company_id: mockCompany.id
  }
}

const genPickupAddress = (count = 2) => {
  const data = []

  for (var i = 0; i <= 2; i++) {
    data.push(mockPickupAddress())
  }
  return data
}
const mockTask = (customer) => {
  return {
    id: chance.guid({ version: 5 }),
    type: 'tasks',
    tracking_code: chance.string({ length: 5 }),
    status: STATUS[Math.floor(Math.random() * STATUS.length)],
    currency: 'EUR',
    amount: chance.floating({ min: 2, max: 30, fixed: 2 }),
    email: chance.email(),
    vat_in_percent: 22.4,
    distance_in_meter: chance.integer({ min: 2000, max: 15000 }),
    pickup_location: chance.address(),
    dropoff_location: chance.address(),
    pickup_time: chance.date(),
    //actual_pickup_time: chance.date(),
    drop_off_time: chance.date(),

    customer_signature_type: chance.string(),
    pickup_comments_for_courier: chance.sentence(),
    dropoff_comments_for_courier: chance.sentence(),
    created_at: chance.date(),
    modified_at: chance.date(),

    created_by: 123,
    modified_by: 123,
    customer_id: customer.id
  }
}

const genTasks = (customer, count = 10) => {
  const data = []

  for (var i = 0; i <= 2; i++) {
    data.push(mockTask(customer))
  }
  return data
}
function run() {
  const customers = genCustomers()
  const pickupAddresses = genPickupAddress()
  const tasks = genTasks(
    customers[Math.floor(Math.random() * customers.length)]
  )

  const payload = {
    customers: [
      ...customers,
      {
        id: ''
      }
    ],
    pickupAddresses,
    tasks: [
      ...tasks,
      {
        id: ''
      }
    ],
    company: [mockCompany]
  }
  fs.writeFile('db.json', JSON.stringify(payload), (err) => {
    if (err) {
      console.log('Error occurred: ', err)
      return
    }
    console.log('FIle successfully created')
  })
}

run()
