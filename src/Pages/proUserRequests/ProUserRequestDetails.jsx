import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Modal } from 'antd'

const ProUserRequestDetails = () => {
  const Navigate = useNavigate()

  //   reject model
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }
  const handleOk = () => {
    setIsModalVisible(false)
  }
  const handleCancel = () => {
    setIsModalVisible(false)
  }

  //   accept model

  const [isApproveModelVisible, setIsApproveModelVisible] = useState(false)

  const showApproveModel = () => {
    setIsApproveModelVisible(true)
  }

  const approveModelHandleOk = () => {
    setIsApproveModelVisible(false)
  }

  const approveModelHandleCancel = () => {
    setIsApproveModelVisible(false)
  }

  return (
    <>
      <h1
        className="text-xl font-semibold   py-5 px-2 cursor-pointer"
        onClick={() => Navigate(-1)}
      >
        ← New Pro User Details
      </h1>
      <div className=" p-5 bg-white shadow-md rounded-lg">
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="User Avatar"
            className="w-24 h-24 rounded-full shadow-md"
          />
          <h2 className="text-xl font-semibold mt-2">Hari Danang</h2>
          <p className="text-gray-600">Email: Tim.Jennings@example.com</p>
          <p className="text-gray-600">Contact: (+33)7 55 56 33 70</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-gray-700 font-medium">
              What Services You Need
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-md mt-1 outline-none bg-gray-200"
              value="Thuto Makhoane"
              readOnly
            />
          </div>
          <div>
            <label className="text-gray-700 font-medium">
              When Do You Need This Service
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-md mt-1 outline-none bg-gray-200"
              value="Urgent"
              readOnly
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="text-gray-700 font-medium">Description</label>
          <textarea
            className="w-full p-3 border rounded-md mt-1 h-28 outline-none bg-gray-200"
            readOnly
            value="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout..."
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="text-gray-700 font-medium">Location</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md mt-1 outline-none bg-gray-200"
              placeholder="Enter City"
              readOnly
            />
          </div>
          <div>
            <label className="text-gray-700 font-medium">Township</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md mt-1 outline-none bg-gray-200"
              placeholder="Township"
              readOnly
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="text-gray-700 font-medium">Phone Number</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md mt-1 outline-none bg-gray-200"
              value="Thuto Makhoane"
              readOnly
            />
          </div>
          <div>
            <label className="text-gray-700 font-medium">Email</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md mt-1 outline-none bg-gray-200"
              value="thutomakhoane123@gmail.com"
              readOnly
            />
          </div>
        </div>

        <div className="flex justify-center mt-6 gap-4">
          <button
            className="bg-[#0d9276] text-white px-6 py-2 rounded-md hover:bg-green-600"
            onClick={showApproveModel}
          >
            Approve
          </button>
          <button
            className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600"
            onClick={showModal}
          >
            Reject
          </button>
        </div>

        <Modal
          visible={isApproveModelVisible}
          onOk={approveModelHandleOk}
          onCancel={approveModelHandleCancel}
          okText="Yes"
          cancelText="No"
          centered
        >
          <p className="text-lg text-center">
            Are you sure you want to approve this request?
          </p>
        </Modal>

        
        <Modal
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="Send"
          cancelText="Close"
          centered
        >
          <p className="text-lg text-center">
            Please state the reason why you are rejecting it.
          </p>
          <div className="mt-5">
            <p className="font-semibold">Description</p>
            <textarea
              className="w-full p-3 border rounded-md mt-1 h-28 outline-none bg-gray-200"
              placeholder="Reason"
            />
          </div>
        </Modal>
      </div>
    </>
  )
}

export default ProUserRequestDetails
