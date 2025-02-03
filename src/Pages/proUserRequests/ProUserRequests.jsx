import { Table } from 'antd'
import { FaArrowRight } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

const columns = [
  {
    title: 'Serial No.',
    dataIndex: 'id',
    key: 'id',
    render: (text, record, index) => <span>#{index + 1}.</span>,
  },
  {
    title: 'User Name',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => (
      <div className="flex items-center space-x-3">
        <img src={record.image} alt="User" className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-medium">{record.name}</p>
          <p className="text-xs text-gray-500">{record.phone}</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Services Need',
    dataIndex: 'service',
    key: 'service',
  },
  {
    title: 'Urgency',
    dataIndex: 'urgency',
    key: 'urgency',
    render: (text, record) => (
      <span className={`${record.urgencyColor} font-medium`}>{text}</span>
    ),
  },
  {
    title: 'Descriptions',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
  },
  {
    title: 'Status',
    key: 'status',
    render: (text, record) => (
      <Link
        to={`/job-request/${record.id}`}
        className="flex items-center space-x-1 bg-green-100 text-green-600 px-4 py-2 rounded-full"
      >
        <span>Details...</span>
        <FaArrowRight />
      </Link>
    ),
  },
]

const requests = [
  {
    id: 1,
    name: 'Abdullah Al Shakib',
    phone: '(+33)7 55 55 49 84',
    service: 'Pro User',
    urgency: 'Urgent',
    urgencyColor: 'text-orange-500',
    description:
      'It is a long established fact that a reader will be distract...',
    location: 'Elvia Elviaveien 1, 1234 Oslo',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 2,
    name: 'Abdullah Al Shakib',
    phone: '(+33)7 55 55 49 84',
    service: 'Pro User',
    urgency: 'Flexible',
    urgencyColor: 'text-green-500',
    description:
      'It is a long established fact that a reader will be distract...',
    location: 'Elvia Elviaveien 5, 1234 Oslo',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 3,
    name: 'Abdullah Al Shakib',
    phone: '(+33)7 55 55 49 84',
    service: 'Pro User',
    urgency: 'Any Time',
    urgencyColor: 'text-blue-500',
    description:
      'It is a long established fact that a reader will be distract...',
    location: 'Elviaveien 2, 1234 Oslo',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 4,
    name: 'Rashed Al Mamun',
    phone: '(+33)7 55 55 49 84',
    service: 'Pro User',
    urgency: 'Urgent',
    urgencyColor: 'text-orange-500',
    description:
      'It is a long established fact that a reader will be distract...',
    location: 'Elvia Elviaveien 1, 1234 Oslo',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    id: 5,
    name: 'Mahmudul Hasan',
    phone: '(+33)7 55 55 49 84',
    service: 'Pro User',
    urgency: 'Flexible',
    urgencyColor: 'text-green-500',
    description:
      'It is a long established fact that a reader will be distract...',
    location: 'Elvia Elviaveien 5, 1234 Oslo',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    id: 6,
    name: 'Mahmudul Hasan',
    phone: '(+33)7 55 55 49 84',
    service: 'Pro User',
    urgency: 'Any Time',
    urgencyColor: 'text-blue-500',
    description:
      'It is a long established fact that a reader will be distract...',
    location: 'Elviaveien 2, 1234 Oslo',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    id: 7,
    name: 'Abdullah Al Shakib',
    phone: '(+33)7 55 55 49 84',
    service: 'Pro User',
    urgency: 'Urgent',
    urgencyColor: 'text-orange-500',
    description:
      'It is a long established fact that a reader will be distract...',
    location: 'Elvia Elviaveien 1, 1234 Oslo',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    id: 8,
    name: 'Rashed Al Mamun',
    phone: '(+33)7 55 55 49 84',
    service: 'Pro User',
    urgency: 'Flexible',
    urgencyColor: 'text-green-500',
    description:
      'It is a long established fact that a reader will be distract...',
    location: 'Elvia Elviaveien 5, 1234 Oslo',
    image: 'https://randomuser.me/api/portraits/men/6.jpg',
  },
  {
    id: 9,
    name: 'Mahmudul Hasan',
    phone: '(+33)7 55 55 49 84',
    service: 'Pro User',
    urgency: 'Any Time',
    urgencyColor: 'text-blue-500',
    description:
      'It is a long established fact that a reader will be distract...',
    location: 'Elviaveien 2, 1234 Oslo',
    image: 'https://randomuser.me/api/portraits/men/7.jpg',
  },
  {
    id: 10,
    name: 'Abdullah Al Shakib',
    phone: '(+33)7 55 55 49 84',
    service: 'Pro User',
    urgency: 'Urgent',
    urgencyColor: 'text-orange-500',
    description:
      'It is a long established fact that a reader will be distract...',
    location: 'Elvia Elviaveien 1, 1234 Oslo',
    image: 'https://randomuser.me/api/portraits/men/8.jpg',
  },
  {
    id: 11,
    name: 'Rashed Al Mamun',
    phone: '(+33)7 55 55 49 84',
    service: 'Pro User',
    urgency: 'Flexible',
    urgencyColor: 'text-green-500',
    description:
      'It is a long established fact that a reader will be distract...',
    location: 'Elvia Elviaveien 5, 1234 Oslo',
    image: 'https://randomuser.me/api/portraits/men/9.jpg',
  },
  {
    id: 12,
    name: 'Mahmudul Hasan',
    phone: '(+33)7 55 55 49 84',
    service: 'Pro User',
    urgency: 'Any Time',
    urgencyColor: 'text-blue-500',
    description:
      'It is a long established fact that a reader will be distract...',
    location: 'Elviaveien 2, 1234 Oslo',
    image: 'https://randomuser.me/api/portraits/men/10.jpg',
  },
  {
    id: 13,
    name: 'Abdullah Al Shakib',
    phone: '(+33)7 55 55 49 84',
    service: 'Pro User',
    urgency: 'Urgent',
    urgencyColor: 'text-orange-500',
    description:
      'It is a long established fact that a reader will be distract...',
    location: 'Elvia Elviaveien 1, 1234 Oslo',
    image: 'https://randomuser.me/api/portraits/men/11.jpg',
  },
  {
    id: 14,
    name: 'Rashed Al Mamun',
    phone: '(+33)7 55 55 49 84',
    service: 'Pro User',
    urgency: 'Flexible',
    urgencyColor: 'text-green-500',
    description:
      'It is a long established fact that a reader will be distract...',
    location: 'Elvia Elviaveien 5, 1234 Oslo',
    image: 'https://randomuser.me/api/portraits/men/12.jpg',
  },
  {
    id: 15,
    name: 'Mahmudul Hasan',
    phone: '(+33)7 55 55 49 84',
    service: 'Pro User',
    urgency: 'Any Time',
    urgencyColor: 'text-blue-500',
    description:
      'It is a long established fact that a reader will be distract...',
    location: 'Elviaveien 2, 1234 Oslo',
    image: 'https://randomuser.me/api/portraits/men/13.jpg',
  },
]

const ProUserRequests = () => {
  const Navigate = useNavigate()
  return (
    <>
      <h1
        className="text-xl font-semibold  py-5 px-2 cursor-pointer"
        onClick={() => Navigate(-1)}
      >
        ← New Pro User Request
      </h1>
      <Table
        columns={columns}
        dataSource={requests}
        pagination={{ position: ['bottomCenter'], pageSize: 10 }}
        className="bg-gray-100 min-h-screen"
      />
    </>
  )
}

export default ProUserRequests
