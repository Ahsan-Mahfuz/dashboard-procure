import React, { useState } from 'react'
import {
  Table,
  Button,
  Pagination,
  Modal,
  Input,
  Upload,
  Image,
  message,
  Popconfirm,
} from 'antd'
import { EditOutlined, DeleteOutlined, UploadOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const CategoryManage = () => {
  const Navigate = useNavigate()

  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [newCategory, setNewCategory] = useState('')
  const [image, setImage] = useState(null)
  const [imageUrl, setImageUrl] = useState('')
  const [editCategory, setEditCategory] = useState(null)

  const [data, setData] = useState([
    {
      key: '1',
      categoryName: 'Singer',
      categoryImage: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      key: '2',
      categoryName: 'Rapper',
      categoryImage: 'https://randomuser.me/api/portraits/men/44.jpg',
    },
    {
      key: '3',
      categoryName: 'Producer',
      categoryImage: 'https://randomuser.me/api/portraits/men/45.jpg',
    },
    {
      key: '4',
      categoryName: 'Rapper',
      categoryImage: 'https://randomuser.me/api/portraits/women/45.jpg',
    },
    {
      key: '5',
      categoryName: 'DJ',
      categoryImage: 'https://randomuser.me/api/portraits/men/46.jpg',
    },
    {
      key: '6',
      categoryName: 'Pianist',
      categoryImage: 'https://randomuser.me/api/portraits/women/46.jpg',
    },
    {
      key: '7',
      categoryName: 'Guitarist',
      categoryImage: 'https://randomuser.me/api/portraits/men/47.jpg',
    },
    {
      key: '8',
      categoryName: 'Drummer',
      categoryImage: 'https://randomuser.me/api/portraits/men/48.jpg',
    },
    {
      key: '9',
      categoryName: 'Violinist',
      categoryImage: 'https://randomuser.me/api/portraits/women/48.jpg',
    },
    {
      key: '10',
      categoryName: 'Cellist',
      categoryImage: 'https://randomuser.me/api/portraits/men/49.jpg',
    },
    {
      key: '11',
      categoryName: 'Saxophonist',
      categoryImage: 'https://randomuser.me/api/portraits/women/49.jpg',
    },
  ])

  const columns = [
    {
      title: 'Serial No.',
      dataIndex: 'index',
      key: 'index',
      render: (text, record, index) => (
        <span className="text-gray-500">#{index + 1}.</span>
      ),
    },
    {
      title: 'Category Name',
      dataIndex: 'categoryName',
      key: 'categoryName',
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'Category Image',
      dataIndex: 'categoryImage',
      key: 'categoryImage',
      render: (text) => (
        <img src={text} alt="Category" className="w-12 h-12 rounded-full" />
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <div className="flex gap-3">
          <Button
            icon={<EditOutlined />}
            size="small"
            type="primary"
            onClick={() => handleEditCategory(record)}
            className="hover:text-[#0d9276] text-xl"
          />
          <Popconfirm
            title="Are you sure to delete this category?"
            onConfirm={() => handleDeleteCategory(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <DeleteOutlined
              className="text-red-500 cursor-pointer hover:text-red-700"
              style={{ fontSize: '18px' }}
            />
          </Popconfirm>
        </div>
      ),
    },
  ]

  const handleAddCategoryShowModal = () => {
    setEditCategory(null)
    setNewCategory('')
    setImage(null)
    setImageUrl('')
    setIsModalVisible(true)
  }

  const handleAddCategory = () => {
    if (!newCategory.trim()) {
      message.error('Category name cannot be empty')
      return
    }

    if (editCategory) {
      const updatedData = data.map((item) =>
        item.key === editCategory.key
          ? { ...item, categoryName: newCategory, categoryImage: imageUrl }
          : item
      )
      setData(updatedData)
      message.success('Category updated successfully')
    } else {
      const newCategoryData = {
        key: Date.now().toString(),
        categoryName: newCategory,
        categoryImage:
          imageUrl || 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
      }
      setData((prevData) => [...prevData, newCategoryData])
      message.success('Category added successfully')
    }

    setIsModalVisible(false)
    setNewCategory('')
    setImage(null)
    setImageUrl('')
    setEditCategory(null)
  }

  const handleEditCategory = (category) => {
    setEditCategory(category)
    setNewCategory(category.categoryName)
    setImageUrl(category.categoryImage)
    setIsModalVisible(true)
  }

  const handleDeleteCategory = (key) => {
    setData((prevData) => prevData.filter((item) => item.key !== key))
    message.success('Category deleted successfully')
  }

  const handleCategoryNameChange = (e) => {
    setNewCategory(e.target.value)
  }

  return (
    <div className="mb-10">
      <div className="flex justify-between items-center mt-2 mb-2">
        <h1
          className="text-xl font-semibold cursor-pointer"
          onClick={() => Navigate(-1)}
        >
          ← Category Manage
        </h1>
        <div className="mt-3">
          <Button
            type="primary"
            onClick={handleAddCategoryShowModal}
            className="mb-4"
          >
            + Add new category
          </Button>
        </div>
      </div>

      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          total: data.length,
          onChange: (page) => setCurrentPage(page),
          showSizeChanger: false,
          position: ['bottomCenter'],
        }}
        bordered
        rowClassName="text-sm"
      />

      <Modal
        title={editCategory ? 'Edit Category' : 'Add New Category'}
        visible={isModalVisible}
        onOk={handleAddCategory}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button key="back" onClick={() => setIsModalVisible(false)}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleAddCategory}>
            Save
          </Button>,
        ]}
        centered
      >
        <div className="mb-4">
          <label>Category Name</label>
          <Input
            placeholder="Enter category name"
            value={newCategory}
            onChange={handleCategoryNameChange}
          />
        </div>
        <div className="mb-4">
          <div>Category Image</div>
          <Upload
            showUploadList={false}
            beforeUpload={(file) => {
              const reader = new FileReader()
              reader.onload = () => {
                setImageUrl(reader.result)
              }
              reader.readAsDataURL(file)
              return false
            }}
          >
            <Button icon={<UploadOutlined />}>Upload Image</Button>
          </Upload>
        </div>

        {imageUrl && (
          <div className="mb-4">
            <Image src={imageUrl} alt="Uploaded Image" width={100} />
          </div>
        )}
      </Modal>
    </div>
  )
}

export default CategoryManage
