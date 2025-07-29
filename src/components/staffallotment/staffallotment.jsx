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
    <div className="flex-1 bg-white p-4 sm:p-6 mt-5">
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <div className="w-[4px] h-6 bg-[#FF0000] mr-3" />
          <h1 className="text-2xl font-semibold text-gray-900">Staff Allotment</h1>
        </div>
      </div>

      {/* Register New Warden Section */}
      <div className="bg-[#BEC5AD] rounded-xl p-4 sm:p-6 mb-6" style={{ boxShadow: "0px 4px 20px 0px #00000040 inset" }}>
        <h2 className="text-2xl font-semibold text-black mb-6">Register New Warden</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:ml-10">
          <div>
            <label className="block text-lg text-black font-bold mb-1">Warden Name</label>
            <input
              type="text"
              name="wardenName"
              value={formData.wardenName}
              onChange={handleInputChange}
              placeholder="Enter warden's Full name"
              className="w-full max-w-[440px] p-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#8a9079]"
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
              className="w-full max-w-[440px] p-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#8a9079]"
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
              className="w-full max-w-[440px] p-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#8a9079]"
            />
          </div>
          <div>
            <label className="block text-lg text-black font-bold mb-1">Designation</label>
            <select
              name="designation"
              value={formData.designation}
              onChange={handleInputChange}
              className="w-full max-w-[440px] p-3 rounded-md border text-gray-400 border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#8a9079]"
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
              className="w-full max-w-[440px] p-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#8a9079]"
            />
          </div>
          <div>
            <label className="block text-lg text-black font-bold mb-1">Shift Timing</label>
            <div className="w-full max-w-[440px] flex flex-wrap sm:flex-nowrap items-center justify-between space-y-2 sm:space-y-0 sm:space-x-2">
              <div className="flex items-center space-x-1">
                <input
                  type="time"
                  name="shiftStart"
                  value={formData.shiftStart}
                  onChange={handleInputChange}
                  className="w-[110px] p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#8a9079]"
                />
                <Clock className="w-4 h-4 text-gray-800" />
              </div>
              <span className="text-sm text-black font-bold">TO</span>
              <div className="flex items-center space-x-1">
                <input
                  type="time"
                  name="shiftEnd"
                  value={formData.shiftEnd}
                  onChange={handleInputChange}
                  className="w-[110px] p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#8a9079]"
                />
                <Clock className="w-4 h-4 text-gray-800" />
              </div>
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
              className="w-full max-w-[440px] p-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#8a9079]"
            />
          </div>
        </div>
        <div className="mt-7 text-center">
          <button
            onClick={handleRegisterWarden}
            className="bg-white border border-gray-300 py-3 px-9 cursor-pointer rounded-2xl font-bold hover:bg-gray-50 transition-colors shadow-sm"
          >
            Register Warden
          </button>
        </div>
      </div>

      {/* Manage Warden Shifts Section */}
      <div className="bg-[#BEC5AD] rounded-xl p-4 sm:p-6" style={{ boxShadow: "inset 0px 4px 20px 0px #00000040" }}>
        <h2 className="text-2xl font-bold text-black mb-6">Manage Warden Shifts</h2>

        <div className="w-full overflow-x-auto text-[15px] font-medium">
          {/* Table Header */}
          <div className="grid min-w-[650px] grid-cols-5 bg-white rounded-t-md text-black text-left px-5 py-3">
            <div className="pl-2 border-r text-lg font-bold border-black flex items-center">Warden Name</div>
            <div className="pl-6 border-r text-lg font-bold border-black flex items-center justify-start">Email</div>
            <div className="pl-4 border-r text-lg font-bold border-black flex items-center justify-start">Designation</div>
            <div className="pl-4 border-r text-lg font-bold border-black flex items-center justify-start">Current Shift</div>
            <div className="text-lg font-bold text-center">Actions</div>
          </div>

          {/* Table Rows */}
          {wardens.map((warden, index) => (
            <div
              key={warden.id}
              className={`grid min-w-[650px] grid-cols-5 items-center px-5 py-4 text-[16px] text-black ${
                index !== wardens.length - 1 ? 'border-b border-black' : ''
              }`}
            >
              <div className="pl-2">{warden.name}</div>
              <div className="pl-4">{warden.email}</div>
              <div className="pl-4">{warden.designation}</div>
              <div className="pl-10 leading-tight">
                <div className="pl-5 text-lg">
                  {warden.currentShift.includes("Morning") ? "Morning" : "Evening"}
                </div>
                <div className="text-md text-gray-900">
                  {warden.currentShift.includes("Morning")
                    ? "(08AM - 12PM)"
                    : "(04AM - 12PM)"}
                </div>
              </div>
              <div className="flex justify-center items-center space-x-4">
                <button
                  onClick={() => handleEditWarden(warden.id)}
                  className="text-black hover:text-gray-700"
                >
                  <Edit2 className="w-5 h-5" strokeWidth={2.2} />
                </button>
                <div className="h-6 w-[1px] bg-black" />
                <button
                  onClick={() => handleDeleteWarden(warden.id)}
                  className="text-black hover:text-gray-700"
                >
                  <Trash2 className="w-5 h-5" strokeWidth={2.2} />
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