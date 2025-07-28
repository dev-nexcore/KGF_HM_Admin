"use client"

import { useState } from "react"
import { Search, Filter } from "lucide-react"

const Refunds = () => {
  const [formData, setFormData] = useState({
    studentId: "",
    refundAmount: "",
    reason: "",
    paymentMethod: "",
  })

  const [searchTerm, setSearchTerm] = useState("")

  const refundHistory = [
    {
      date: "25-10-2025",
      recipientName: "Chinmay Gawade",
      amount: "₹500",
      reason: "Overpayment",
      status: "Completed",
      processedBy: "Admin A",
    },
    {
      date: "25-10-2025",
      recipientName: "Chinmay Gawade",
      amount: "₹500",
      reason: "Overpayment",
      status: "Pending",
      processedBy: "Admin A",
    },
    {
      date: "25-10-2025",
      recipientName: "Chinmay Gawade",
      amount: "₹500",
      reason: "Overpayment",
      status: "Rejected",
      processedBy: "Admin A",
    },
    {
      date: "25-10-2025",
      recipientName: "Chinmay Gawade",
      amount: "₹500",
      reason: "Overpayment",
      status: "Completed",
      processedBy: "Admin A",
    },
    {
      date: "25-10-2025",
      recipientName: "Chinmay Gawade",
      amount: "₹500",
      reason: "Overpayment",
      status: "Rejected",
      processedBy: "Admin A",
    },
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCancel = () => {
    setFormData({
      studentId: "",
      refundAmount: "",
      reason: "",
      paymentMethod: "",
    })
  }

  const handleProceedToPay = () => {
    console.log("Processing refund:", formData)
  }

  const getStatusBadge = (status) => {
    const baseClasses = "px-3 py-1 rounded-full text-xs font-medium"
    switch (status) {
      case "Completed":
        return `${baseClasses} bg-green-500 text-white`
      case "Pending":
        return `${baseClasses} bg-red-500 text-white`
      case "Rejected":
        return `${baseClasses} bg-orange-500 text-white`
      default:
        return `${baseClasses} bg-gray-500 text-white`
    }
  }

  return (
    <div className="flex-1 p-6 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Refunds</h1>
      </div>

      {/* Initiate New Refund Section */}
      <div className="bg-[#cbd0bb] rounded-lg p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Initiate New Refund</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Student/Resident ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Student / Resident ID</label>
            <input
              type="text"
              name="studentId"
              value={formData.studentId}
              onChange={handleInputChange}
              placeholder="Enter Student ID/ Resident ID"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Refund Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Refund Amount</label>
            <input
              type="text"
              name="refundAmount"
              value={formData.refundAmount}
              onChange={handleInputChange}
              placeholder="Enter Amount"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Reason For Refund */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Reason For Refund</label>
            <input
              type="text"
              name="reason"
              value={formData.reason}
              onChange={handleInputChange}
              placeholder="Enter Reason"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Payment Method */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">Select Method</option>
              <option value="bank_transfer">Bank Transfer</option>
              <option value="upi">UPI</option>
              <option value="cash">Cash</option>
              <option value="cheque">Cheque</option>
            </select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={handleCancel}
            className="px-6 py-2 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Cancel
          </button>
          <button
            onClick={handleProceedToPay}
            className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Proceed To Pay
          </button>
        </div>
      </div>

      {/* Refund History Section */}
      <div className="bg-white rounded-lg shadow-sm">
        {/* Header with Search */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Refund History</h2>
          </div>

          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search For Refunds"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                  Date
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                  Recipient Name
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                  Amount
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                  Reason
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Processed By
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {refundHistory.map((refund, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-200">{refund.date}</td>
                  <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-200">{refund.recipientName}</td>
                  <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-200">{refund.amount}</td>
                  <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-200">{refund.reason}</td>
                  <td className="px-4 py-3 text-sm border-r border-gray-200">
                    <span className={getStatusBadge(refund.status)}>{refund.status}</span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">{refund.processedBy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Refunds
