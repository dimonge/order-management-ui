import React from 'react'
import { Avatar, Card, CardBody } from '@modeliver/eli-ui'
import MapView from './MapView'
import Drivers from './Drivers'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/outline'

export default function DeliveryMap() {
  const transit = Array(5)
    .fill(0)
    .map((item, index) => (
      <li key={index}>
        <div className="w-full">
          <div className="w-full max-w-md mx-auto bg-white">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left  rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <div className="py-4 flex">
                      <Avatar
                        className="h-10 w-10 rounded-full"
                        size="large"
                        src="avatar.png"
                        alt="avatar"
                      />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          #14334
                        </p>
                        <p className="text-sm text-gray-500">Marian Santiago</p>
                      </div>
                    </div>
                    <ChevronUpIcon
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    If you're unhappy with your purchase for any reason, email
                    us within 90 days and we'll refund you in full, no questions
                    asked.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </li>
    ))
  return (
    <div className="flex w-full">
      <div className="flex-none w-1/5 overflow-hidden">
        <ul role="list" className="divide-y divide-gray-200 overflow-y-scroll">
          {transit}
        </ul>
      </div>
      <div className="flex-grow h-16">
        <MapView />
      </div>
      <div className="flex-none w-1/10">
        <div className="flex-1 flex flex-col min-h-0 overflow-y-auto">
          <div className="flex-1">
            <nav
              aria-label="Sidebar"
              className="py-6 flex flex-col items-center space-y-3"
            >
              <Drivers />
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
