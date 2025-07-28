"use client"
import { useState } from "react"
import { Edit2, Trash2, Clock } from "lucide-react"

const StaffAllotment = () => {
  const [formData, setFormData] = useState({
    wardenName: "",
    contactNumber: "",
    emailId: "",
    designation: "",
    password: "",
    confirmPassword: "",
    shiftStart: "",
    shiftEnd: "",
  })

  const [wardens, setWardens] = useState([
    {
      id: 1,
      name: "Chinmay Gawade",
      email: "skyy@gmail.com",
      designation: "Warden",
      currentShift: "Morning (08AM - 12PM)",
    },
    {
      id: 2,
      name: "Chinmay Gawade",
      email: "skyy@gmail.com",
      designation: "Asst. Warden",
      currentShift: "Evening (04AM - 12PM)",
    },
  ])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleRegisterWarden = () => {
    console.log("Registering warden:", formData)
  }

  const handleEditWarden = (id) => {
    console.log("Edit warden:", id)
  }

  const handleDeleteWarden = (id) => {
    setWardens((prev) => prev.filter((warden) => warden.id !== id))
  }

  return (
    <div className="flex-1 p-6 mt-5">
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <div className="w-[3px] h-8 bg-red-600 mr-3" />
          <h1 className="text-2xl font-semibold text-gray-900">Staff Allotment</h1>
        </div>
      </div>

      {/* Register New Warden Section */}
      <div className="bg-[#BEC5AD] rounded-xl p-6 mb-6" 
      style={{ boxShadow: "0px 4px 20px 0px #00000040 inset"}}>
        <h2 className="text-2xl font-semibold text-black mb-6">Register New Warden</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-lg text-black font-bold mb-1">Warden Name</label>
            <input
              type="text"
              name="wardenName"
              value={formData.wardenName}
              onChange={handleInputChange}
              placeholder="Enter warden's Full name"
              className="w-full p-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-lg text-black font-bold mb-1">Contact Number</label>
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              placeholder="Enter Contact No."
              className="w-full p-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-lg text-black font-bold mb-1">Email ID</label>
            <input
              type="email"
              name="emailId"
              value={formData.emailId}
              onChange={handleInputChange}
              placeholder="Enter Email Address"
              className="w-full p-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-lg text-black font-bold mb-1">Designation</label>
            <select
              name="designation"
              value={formData.designation}
              onChange={handleInputChange}
              className="w-full p-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Designation</option>
              <option value="warden">Warden</option>
              <option value="assistant-warden">Assistant Warden</option>
              <option value="senior-warden">Senior Warden</option>
            </select>
          </div>
          <div>
            <label className="block text-lg text-black font-bold mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter Password"
              className="w-full p-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-lg text-black font-bold mb-1">Shift Timing</label>
            <div className="flex items-center space-x-3">
              <Clock className="w-4 h-4 text-gray-600" />
              <input
                type="time"
                name="shiftStart"
                value={formData.shiftStart}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-sm text-black font-bold">TO</span>
              <input
                type="time"
                name="shiftEnd"
                value={formData.shiftEnd}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Clock className="w-4 h-4 text-gray-600" />
            </div>
          </div>
          <div className="md:col-start-1">
            <label className="block text-lg text-black font-bold mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm password"
              className="w-full p-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="mt-6 text-center">
          <button
            onClick={handleRegisterWarden}
            className="bg-white border border-gray-300 py-2 px-6 rounded-md font-bold hover:bg-gray-50 transition-colors shadow-sm"
          >
            Register Warden
          </button>
        </div>
      </div>

      {/* Manage Warden Shifts Section */}
      <div className="bg-[#BEC5AD] rounded-xl p-6"
      style={{ boxShadow: "0px 4px 20px 0px #00000040 inset"}}>

        <h2 className="text-lg font-semibold text-black mb-4">Manage Warden Shifts</h2>

        <div className="w-full overflow-x-auto text-sm">
          {/* Table Header */}
          <div className="grid min-w-[600px] grid-cols-5 bg-white rounded-t-md font-semibold text-black text-left px-4 py-2 border-b border-gray-300">
            <div className="pl-2 border-r border-gray-300">Warden Name</div>
            <div className="pl-2 pr-4 border-r border-gray-300">Email</div>
            <div className="pl-2 pr-4 border-r border-gray-300">Designation</div>
            <div className="pl-2 pr-4 border-r border-gray-300">Current Shift</div>
            <div className="text-center">Actions</div>
          </div>

          {/* Table Rows */}
          {wardens.map((warden, index) => (
            <div
              key={warden.id}
              className={`grid min-w-[600px] grid-cols-5 items-center px-4 py-3 bg-[#cbd0bb] ${
                index !== wardens.length - 1 ? 'border-b border-gray-400' : ''
              }`}
            >
              <div className="pr-4 border-r border-gray-300 text-black font-medium">
                {warden.name}
              </div>
              <div className="pr-4 border-r border-gray-300 text-black">
                {warden.email}
              </div>
              <div className="pr-4 border-r border-gray-300 text-black font-medium">
                {warden.designation}
              </div>
              <div className="pr-4 border-r border-gray-300 text-black text-sm leading-tight">
                <div className="font-semibold">
                  {warden.currentShift.includes('Morning') ? 'Morning' : 'Evening'}
                </div>
                <div className="text-xs text-gray-700">
                  {warden.currentShift.includes('Morning')
                    ? '(08AM - 12PM)'
                    : '(04AM - 12PM)'}
                </div>
              </div>
              <div className="flex justify-center space-x-2 sm:space-x-4">
                <button
                  onClick={() => handleEditWarden(warden.id)}
                  className="text-black hover:text-gray-700"
                >
                  <Edit2 className="w-5 h-5 font-bold" />
                </button>
                <button
                  onClick={() => handleDeleteWarden(warden.id)}
                  className="text-black hover:text-gray-700"
                >
                  <Trash2 className="w-5 h-5 font-bold" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StaffAllotment
