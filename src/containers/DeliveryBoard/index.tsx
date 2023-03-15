import {
  LocationMarkerIcon,
  TruckIcon,
  PhoneOutgoingIcon
} from '@heroicons/react/outline'

import Header from './components/Header'
import ItemContainer from './components/ItemContainer'

export default function DeliveryBoard() {
  const waitingForPickup: Element[] = Array(5)
    .fill(0)
    .map((item) => (
      <ItemContainer>
        <div className="flex flex-1 px-4 flex-row items-start justify-between">
          <div className="flex-auto flex flex-col">
            <div>
              <p className="text-2xl text-gray-600 px-2">#78456</p>
              <p className="text-md text-gray-800 px-2">Peter S.</p>
            </div>
          </div>
          <div className="flex-auto flex flex-col items-start text-lg text-gray-500 py-1">
            <div className="flex-1 flex items-center py-1">
              <TruckIcon
                className="flex-shrink-0 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <span className="text-sm text-gray-700 py-2 px-2">Tobi A</span>
            </div>
            <div className="flex-1 flex items-center">
              <LocationMarkerIcon
                className="flex-shrink-0 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <p className="text-sm text-gray-700 py-2 px-2">Delivery 2.4 km</p>
            </div>
          </div>
        </div>
        <div className="flex flex-1 px-4 flex-row items-center justify-between">
          <div className="flex-1 flex flex-col">
            <p className="text-sm text-gray-700 py-3">
              Delivery to the doorstep. Door code is 1235.
            </p>
          </div>
          <div className="flex-1 flex justify-end">
            <button
              className="h-10 px-6 font-semibold rounded-md bg-waitingForPickup text-white"
              type="submit"
            >
              Waiting for pickup
            </button>
          </div>
        </div>
      </ItemContainer>
    ))

  const transit: Element[] = Array(5)
    .fill(0)
    .map((item) => (
      <ItemContainer>
        <div className="flex flex-1 px-4 flex-row items-start justify-between">
          <div className="flex-auto flex flex-col">
            <h1 className="text-sm text-primary-500">
              Delivery partner details
            </h1>
            <div className="flex flex-row item-start py-2">
              <div className="flex px-2">
                <img
                  className="h-12 w-12 rounded-full ring-4 ring-white sm:h-16 sm:w-16"
                  src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <div>
                  <p className="text-md text-primary-800">
                    Peter is on the way
                  </p>
                </div>
                <div className="flex flex-row">
                  <div className="flex items-center py-0">
                    <LocationMarkerIcon
                      className="flex-shrink-0 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="text-lg text-primary-700 py-1 px-1">
                      Track
                    </span>
                  </div>
                  <div className="flex items-center py-1 px-3">
                    <PhoneOutgoingIcon
                      className="flex-shrink-0 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="text-lg text-primary-700 py-2 px-2">
                      Call
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-auto flex items-start text-lg text-gray-500 py-1 justify-end">
            <div>
              <p className="text-2xl text-gray-600 px-2">#78456</p>
              <p className="text-md text-gray-600 px-2">€ 7.40</p>
            </div>
          </div>
        </div>
        <div className="flex-auto px-6">
          <div className="text-primary-800 flex justify-between text-sm">
            <div className="flex flex-1 flex-row justify-between">
              <div>Arriving in</div>
              <div>8mins</div>
            </div>
          </div>
          <div className="bg-gray-200 dark:bg-black rounded-full overflow-hidden my-3">
            <div
              className="bg-secondary-300 dark:bg-secondary-400 w-1/2 h-2.5"
              role="progressbar"
              aria-valuenow="1456"
              aria-valuemin="0"
              aria-valuemax="4550"
            />
          </div>
        </div>
      </ItemContainer>
    ))

  return (
    <div className="flex flex-row divide-x font-sans">
      <Header title="Waiting for pickup (7)">{waitingForPickup}</Header>
      <Header title="Transit (5)">{transit}</Header>
    </div>
  )
}
