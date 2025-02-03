import { useState } from 'react'
import { Table, Button, Input, Space, message } from 'antd'
import { EyeOutlined, SearchOutlined } from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom'
import { FaFilePdf } from 'react-icons/fa'
import { MdBlock } from 'react-icons/md'

const UserManagement = () => {
  const navigate = useNavigate()

  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(9)
  const [searchQuery, setSearchQuery] = useState('')
  const [data, setData] = useState([
    {
      key: '1',
      userName: 'Abdullah Al Shaikb',
      email: 'mstkhushaiter1@gmail.com',
      phone: '01911111111',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      location: 'Dhaka',
    },
    {
      key: '2',
      userName: 'Rashed Al Mamun',
      email: 'mstkhushaiter2@gmail.com',
      phone: '01911111112',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      location: 'Chittagong',
    },
    {
      key: '3',
      userName: 'Mahmudul Hasan',
      email: 'mstkhushaiter3@gmail.com',
      phone: '01911111113',
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
      location: 'Sylhet',
    },
    {
      key: '4',
      userName: 'Al Amin',
      email: 'mstkhushaiter4@gmail.com',
      phone: '01911111114',
      image: 'https://randomuser.me/api/portraits/men/4.jpg',
      location: 'Rajshahi',
    },
    {
      key: '5',
      userName: 'Rasel Mia',
      email: 'mstkhushaiter5@gmail.com',
      phone: '01911111115',
      image: 'https://randomuser.me/api/portraits/men/5.jpg',
      location: 'Barisal',
    },
    {
      key: '6',
      userName: 'Sabbir Hossain',
      email: 'mstkhushaiter6@gmail.com',
      phone: '01911111116',
      image: 'https://randomuser.me/api/portraits/men/6.jpg',
      location: 'Khulna',
    },
    {
      key: '7',
      userName: 'Noman Chandra',
      email: 'mstkhushaiter7@gmail.com',
      phone: '01911111117',
      image: 'https://randomuser.me/api/portraits/men/7.jpg',
      location: 'Rangpur',
    },
    {
      key: '8',
      userName: 'Samiul Islam',
      email: 'mstkhushaiter8@gmail.com',
      phone: '01911111118',
      image: 'https://randomuser.me/api/portraits/men/8.jpg',
      location: 'Mymensingh',
    },
    {
      key: '9',
      userName: 'Jahidul Islam',
      email: 'mstkhushaiter9@gmail.com',
      phone: '01911111119',
      image: 'https://randomuser.me/api/portraits/men/9.jpg',
      location: 'Comilla',
    },
    {
      key: '10',
      userName: 'Hasanuzzaman',
      email: 'mstkhushaiter10@gmail.com',
      phone: '019111111110',
      image: 'https://randomuser.me/api/portraits/men/10.jpg',
      location: 'Dhaka',
    },
    {
      key: '11',
      userName: 'Abdul Alim',
      email: 'mstkhushaiter11@gmail.com',
      phone: '019111111111',
      image: 'https://randomuser.me/api/portraits/men/11.jpg',
      location: 'Chittagong',
    },
    {
      key: '12',
      userName: 'Abu Bakar',
      email: 'mstkhushaiter12@gmail.com',
      phone: '019111111112',
      image: 'https://randomuser.me/api/portraits/men/12.jpg',
      location: 'Sylhet',
    },
  ])

  const columns = [
    {
      title: 'Serial No.',
      dataIndex: 'key',
      key: 'key',
      render: (text, record, index) => <span>#{index + 1}</span>,
    },
    {
      title: 'User Name',
      dataIndex: 'userName',
      key: 'userName',
      render: (text, record) => (
        <div className="flex items-center space-x-3">
          <img
            src={record.image}
            alt={record.userName}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold">{record.userName}</h3>
            <p className="text-sm text-gray-500">{record.phone}</p>
          </div>
        </div>
      ),
    },

    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <space size="middle">
          <Link to={`/user-management/${record.key}`}>
            <Button
              icon={<EyeOutlined />}
              type="text"
              className="text-[#0d9276]"
              onClick={() =>
                message.info(`Viewing details of ${record.userName}`)
              }
            >
              View
            </Button>
          </Link>
          <Button
            icon={<MdBlock />}
            onClick={() => message.info(`Blocking ${record.userName}`)}
            className="text-[#0d9276] "
          />
        </space>
      ),
    },
  ]

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  const filteredData = data.filter((item) =>
    item.userName.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="mt-5 mb-10">
      <div className="flex justify-between items-center mb-4">
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <h1 className="text-xl font-semibold">← User Management</h1>
        </div>
        <div>
          <Input
            placeholder="Search User"
            prefix={<SearchOutlined />}
            value={searchQuery}
            onChange={handleSearch}
            className="w-64 p-3"
          />
        </div>
      </div>

      <Table
        columns={columns}
        dataSource={filteredData}
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          total: data.length,
          onChange: (page) => setCurrentPage(page),
          showSizeChanger: false,
          position: ['bottomCenter'],
        }}
        rowKey="key"
        bordered
      />
    </div>
  )
}

export default UserManagement
