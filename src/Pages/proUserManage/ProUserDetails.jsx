import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const ProUserDetails = () => {
  const Navigate = useNavigate()
  return (
    <div>
      <h1
        className="text-xl font-semibold  py-5 px-2 cursor-pointer"
        onClick={() => Navigate(-1)}
      >
        ← User Details
      </h1>
      <div className="  bg-white shadow-lg rounded-lg  p-10">
        <div className="flex items-center space-x-6">
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="User"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h1 className="text-3xl font-semibold">Slade Wilson</h1>
            <p className="text-gray-500">binhan628@gmail.com</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-8">
          <div>
            <h2 className="text-xl font-medium text-gray-700">
              Personal Info:
            </h2>
            <div className="mt-4">
              <p>
                <strong>User Name:</strong> Slade Wilson
              </p>
              <p>
                <strong>Year business started:</strong> 2 years
              </p>
              <p>
                <strong>Phone Number:</strong> +99 2586 1458 24
              </p>
              <p>
                <strong>Vat Number:</strong> 145256541 54596524 245987624
              </p>
              <p>
                <strong>Registration Number:</strong> 145256541 54596524
                245987624
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-medium text-gray-700">
              Location Info:
            </h2>
            <div className="mt-4">
              <p>
                <strong>Area:</strong> Temporary shelter
              </p>
              <p>
                <strong>Building:</strong> Redwoods C
              </p>
              <p>
                <strong>Address:</strong> 09 Arnulfo Crossing, Botsfordborough
              </p>
              <p>
                <strong>Postal code:</strong> 415
              </p>
              <p>
                <strong>Radius:</strong> 50 KM
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-medium text-gray-700">Services Info:</h2>
          <div className="mt-4">
            <p>
              <strong>Business Name:</strong> Slade Wilson
            </p>
            <div className="flex space-x-2 mt-2 mb-2 items-center ">
              <strong>Business Provider:</strong>
              <Button className="bg-black text-white">Graphics Designer</Button>
              <Button className="bg-black text-white">Plumber</Button>
              <Button className="bg-black text-white">Mechanical</Button>
            </div>
            <p>
              <strong>Business Phone Number:</strong> 0199878855
            </p>
          </div>

          <div className="mt-4">
            <h3 className="font-medium text-gray-700">Description:</h3>
            <p className="text-gray-600">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here',
              making it look like readable English. Many desktop publishing
              packages and web page editors now use Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProUserDetails
