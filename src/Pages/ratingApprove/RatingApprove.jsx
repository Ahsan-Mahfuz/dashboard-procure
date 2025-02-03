import React, { useState } from 'react'
import { Table, Button, Pagination, Input, Space, message } from 'antd'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Modal } from 'antd'

const RatingApprove = () => {
  const navigate = useNavigate()

  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(9)
  const [searchTerm, setSearchTerm] = useState('')

  const [data, setData] = useState([
    {
      key: '1',
      id: '#12333',
      name: 'John Doe',
      rating: 4.2,
      feedback:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      key: '2',
      id: '#12334',
      name: 'Jane Doe',
      rating: 4.8,
      feedback:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      key: '3',
      id: '#12335',
      name: 'John Smith',
      rating: 4.1,
      feedback:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      key: '4',
      id: '#12336',
      name: 'Emily Johnson',
      rating: 4.9,
      feedback:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      key: '5',
      id: '#12337',
      name: 'Robert Brown',
      rating: 4.4,
      feedback:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      key: '6',
      id: '#12338',
      name: 'Michael Davis',
      rating: 4.7,
      feedback:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      key: '7',
      id: '#12339',
      name: 'Sarah Taylor',
      rating: 4.6,
      feedback:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      key: '8',
      id: '#12340',
      name: 'Joseph Lee',
      rating: 4.3,
      feedback:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      key: '9',
      id: '#12341',
      name: 'Lisa Nguyen',
      rating: 4.0,
      feedback:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      key: '10',
      id: '#12342',
      name: 'Kevin White',
      rating: 4.5,
      feedback:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      key: '11',
      id: '#12343',
      name: 'Laura Martin',
      rating: 4.2,
      feedback:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      key: '12',
      id: '#12344',
      name: 'David Hall',
      rating: 4.9,
      feedback:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
  ])

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.includes(searchTerm)
  )

  const columns = [
    {
      title: 'Serial No.',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
      render: (text) => (
        <span>
          {text} <span className="text-yellow-400 text-xl">★</span>
        </span>
      ),
    },
    {
      title: 'Feedback',
      dataIndex: 'feedback',
      key: 'feedback',
      render: (text) => <span className="truncate w-64">{text}</span>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            className="bg-green-500 hover:bg-green-600"
            onClick={() => handleApprove(record.key)}
          >
            Approve
          </Button>
          <Button
            type="danger"
            className="bg-red-500 hover:bg-red-600"
            onClick={() => handleCancel(record.key)}
          >
            Cancel
          </Button>
        </Space>
      ),
    },
  ]

  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page)
    setPageSize(pageSize)
  }

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [modalType, setModalType] = useState('')
  const [modalKey, setModalKey] = useState('')

  const handleApprove = (key) => {
    setIsModalVisible(true)
    setModalType('approve')
    setModalKey(key)
  }

  const handleCancel = (key) => {
    setIsModalVisible(true)
    setModalType('cancel')
    setModalKey(key)
  }

  const handleOk = () => {
    setIsModalVisible(false)
    if (modalType === 'approve') {
      message.success(`Rating with ID ${modalKey} approved!`)
    } else {
      message.error(`Rating with ID ${modalKey} canceled!`)
    }
  }

  const handleCancelModal = () => {
    setIsModalVisible(false)
  }

  return (
    <div className="mt-5 mb-10">
      <div className="flex justify-between items-center mb-4">
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <h1 className="text-xl font-semibold">← Rating Approve</h1>
        </div>
        <div>
          <Input
            placeholder="Search"
            allowClear
            className="w-64 p-3"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <Table
        columns={columns}
        dataSource={filteredData}
        rowKey="key"
        bordered
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          total: filteredData.length,
          onChange: (page) => setCurrentPage(page),
          showSizeChanger: false,
          position: ['bottomCenter'],
        }}
      />

      <Modal
        title={modalType === 'approve' ? 'Approve' : 'Cancel'}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancelModal}
        centered
        okText="Yes"
        cancelText="No"
      >
        <p>
          Are you sure you want to{'  '}
          {modalType === 'approve' ? 'approve' : 'cancel'}
          {'  '}the rating with ID {modalKey}?
        </p>
      </Modal>
    </div>
  )
}

export default RatingApprove
