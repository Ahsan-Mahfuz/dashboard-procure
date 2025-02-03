import { useState } from 'react'
import { Table, Button, Input, Space, message } from 'antd'
import { EyeOutlined, SearchOutlined } from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom'
import { FaFilePdf } from 'react-icons/fa'
import { MdBlock } from 'react-icons/md'

const ProUserManage = () => {
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
      documentation: 'pdf',
    },
    {
      key: '2',
      userName: 'Rashed Al Mamun',
      email: 'mstkhushaiter2@gmail.com',
      phone: '01911111112',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      documentation: 'pdf',
    },
    {
      key: '3',
      userName: 'Mahmudul Hasan',
      email: 'mstkhushaiter3@gmail.com',
      phone: '01911111113',
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
      documentation: 'pdf',
    },
    {
      key: '4',
      userName: 'Al Amin',
      email: 'mstkhushaiter4@gmail.com',
      phone: '01911111114',
      image: 'https://randomuser.me/api/portraits/men/4.jpg',
      documentation: 'pdf',
    },
    {
      key: '5',
      userName: 'Rasel Mia',
      email: 'mstkhushaiter5@gmail.com',
      phone: '01911111115',
      image: 'https://randomuser.me/api/portraits/men/5.jpg',
      documentation: 'pdf',
    },
    {
      key: '6',
      userName: 'Sabbir Hossain',
      email: 'mstkhushaiter6@gmail.com',
      phone: '01911111116',
      image: 'https://randomuser.me/api/portraits/men/6.jpg',
      documentation: 'pdf',
    },
    {
      key: '7',
      userName: 'Noman Chandra',
      email: 'mstkhushaiter7@gmail.com',
      phone: '01911111117',
      image: 'https://randomuser.me/api/portraits/men/7.jpg',
      documentation: 'pdf',
    },
    {
      key: '8',
      userName: 'Samiul Islam',
      email: 'mstkhushaiter8@gmail.com',
      phone: '01911111118',
      image: 'https://randomuser.me/api/portraits/men/8.jpg',
      documentation: 'pdf',
    },
    {
      key: '9',
      userName: 'Jahidul Islam',
      email: 'mstkhushaiter9@gmail.com',
      phone: '01911111119',
      image: 'https://randomuser.me/api/portraits/men/9.jpg',
      documentation: 'pdf',
    },
    {
      key: '10',
      userName: 'Hasanuzzaman',
      email: 'mstkhushaiter10@gmail.com',
      phone: '019111111110',
      image: 'https://randomuser.me/api/portraits/men/10.jpg',
      documentation: 'pdf',
    },
    {
      key: '11',
      userName: 'Abdul Alim',
      email: 'mstkhushaiter11@gmail.com',
      phone: '019111111111',
      image: 'https://randomuser.me/api/portraits/men/11.jpg',
      documentation: 'pdf',
    },
    {
      key: '12',
      userName: 'Abu Bakar',
      email: 'mstkhushaiter12@gmail.com',
      phone: '019111111112',
      image: 'https://randomuser.me/api/portraits/men/12.jpg',
      documentation: 'pdf',
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
      title: 'Documentation',
      key: 'documentation',
      render: (text, record) => (
        <Button
          icon={<FaFilePdf />}
          type="text"
          className="text-red-500"
          onClick={() => message.info('Downloading PDF')}
        >
          {record.userName} PDF File
        </Button>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/pro-user-manage/${record.key}`}>
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
        </Space>
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
          <h1 className="text-xl font-semibold">← Pro User Manage</h1>
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

export default ProUserManage
