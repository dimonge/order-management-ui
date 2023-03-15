/* This example requires Tailwind CSS v2.0+ */
import {
  CheckCircleIcon,
  ChevronRightIcon,
  MailIcon
} from '@heroicons/react/solid'
import { Avatar } from '@modeliver/eli-ui'

const applications = [
  {
    applicant: {
      name: 'Ricardo Cooper',
      email: 'ricardo.cooper@example.com',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    date: '2020-01-07',
    dateFull: 'January 7, 2020',
    stage: 'Completed phone screening',
    href: '#'
  },
  {
    applicant: {
      name: 'Kristen Ramos',
      email: 'kristen.ramos@example.com',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    date: '2020-01-07',
    dateFull: 'January 7, 2020',
    stage: 'Completed phone screening',
    href: '#'
  },
  {
    applicant: {
      name: 'Ted Fox',
      email: 'ted.fox@example.com',
      imageUrl:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    date: '2020-01-07',
    dateFull: 'January 7, 2020',
    stage: 'Completed phone screening',
    href: '#'
  }
]

export default function Drivers() {
  return (
    <ul role="list" className="flex flex-col justify-center items-center">
      {applications.map((application) => (
        <li key={application.applicant.email}>
          <a href={application.href} className="block hover:bg-gray-50">
            <div className="flex items-center px-4 py-4 sm:px-6">
              <div className="min-w-0 flex-1 flex items-center">
                <div className="flex-shrink-0">
                  <Avatar
                    className="h-12 w-12 rounded-full"
                    src={application.applicant.imageUrl}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </a>
        </li>
      ))}
    </ul>
  )
}
