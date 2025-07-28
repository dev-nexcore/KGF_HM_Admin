"use client";

import { useState } from "react";

export default function TicketsSection() {
  const [tickets, setTickets] = useState([
    {
      id: "#0001",
      subject: "Leaky Faucet in Room 101",
      raisedBy: "Student A",
      status: "Pending",
      dateRaised: "25-07-2025",
    },
    {
      id: "#0002",
      subject: "AC not working",
      raisedBy: "Student B",
      status: "Pending",
      dateRaised: "25-07-2025",
    },
  ]);

  const handleApprove = (index) => {
    const updated = [...tickets];
    updated[index].status = "Approved";
    setTickets(updated);
  };

  const handleReject = (index) => {
    const updated = tickets.filter((_, i) => i !== index);
    setTickets(updated);
  };

  return (
    <div className="px-6 py-10 space-y-10">
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-black border-l-4 border-red-600 pl-3">
        Tickets & Queries
      </h2>

      {/* Open Tickets Section */}
      <div className="bg-[#A4B494] rounded-2xl p-6 shadow-md overflow-x-auto">
        <h2 className="text-xl font-semibold text-black mb-4">Open Tickets</h2>
        <div className="min-w-[800px]">
          <table className="w-full text-base text-left text-black border-separate border-spacing-y-3">
            <thead className="bg-white text-black">
              <tr className="font-semibold text-base border border-[#A4B494]">
                <th className="px-5 py-3 border-r border-[#A4B494] whitespace-nowrap">
                  Ticket ID
                </th>
                <th className="px-5 py-3 border-r border-[#A4B494] whitespace-nowrap">
                  Subject
                </th>
                <th className="px-5 py-3 border-r border-[#A4B494] whitespace-nowrap">
                  Raised By
                </th>
                <th className="px-5 py-3 border-r border-[#A4B494] whitespace-nowrap">
                  Status
                </th>
                <th className="px-5 py-3 border-r border-[#A4B494] whitespace-nowrap">
                  Date Raised
                </th>
                <th className="px-5 py-3 whitespace-nowrap">Actions</th>
              </tr>
            </thead>

            <tbody>
              {tickets.map((ticket, index) => (
                <tr key={ticket.id} className="e rounded-md">
                  <td className="px-5 py-3">{ticket.id}</td>
                  <td className="px-5 py-3">{ticket.subject}</td>
                  <td className="px-5 py-3">{ticket.raisedBy}</td>
                  <td
                    className={`px-5 py-3 font-bold ${
                      ticket.status === "Approved"
                        ? "text-green-600"
                        : "text-orange-500"
                    }`}
                  >
                    {ticket.status}
                  </td>
                  <td className="px-5 py-3">{ticket.dateRaised}</td>
                  <td className="px-5 py-3">
                    <div className="space-y-2 w-[110px]">
                      <button
                        className="bg-lime-500 text-black font-semibold w-full py-1 rounded-md hover:bg-lime-600"
                        onClick={() => handleApprove(index)}
                      >
                        Approve
                      </button>
                      <button
                        className="bg-red-600 text-white font-semibold w-full py-1 rounded-md hover:bg-red-700"
                        onClick={() => handleReject(index)}
                      >
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {tickets.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center text-gray-700 py-4">
                    No open tickets available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Resolved Tickets Section */}
      <div className="bg-[#A4B494] rounded-2xl p-6 shadow-md overflow-x-auto">
        <h3 className="text-xl font-semibold mb-4 text-black">
          Resolved Tickets
        </h3>
        <div className="min-w-[800px]">
          <table className="w-full text-base text-left text-black border-separate border-spacing-y-3">
            <thead className="bg-white text-black">
              <tr className="font-semibold text-base border border-[#A4B494]">
                <th className="px-5 py-3 border-r border-[#A4B494] whitespace-nowrap">
                  Ticket ID
                </th>
                <th className="px-5 py-3 border-r border-[#A4B494] whitespace-nowrap">
                  Subject
                </th>
                <th className="px-5 py-3 border-r border-[#A4B494] whitespace-nowrap">
                  Raised By
                </th>
                <th className="px-5 py-3 border-r border-[#A4B494] whitespace-nowrap">
                  Status
                </th>
                <th className="px-5 py-3 whitespace-nowrap">Date Raised</th>
              </tr>
            </thead>
            <tbody>
              <tr className=" rounded-md">
                <td className="px-5 py-3">#0003</td>
                <td className="px-5 py-3">Broken chair in Dining hall</td>
                <td className="px-5 py-3">Student A</td>
                <td className="px-5 py-3 text-green-600 font-semibold">
                  Resolved
                </td>
                <td className="px-5 py-3">25-07-2025</td>
              </tr>
              <tr className=" rounded-md">
                <td className="px-5 py-3">#0004</td>
                <td className="px-5 py-3">Leaky Faucet in Room 101</td>
                <td className="px-5 py-3">Warden A</td>
                <td className="px-5 py-3 text-green-600 font-semibold">
                  Resolved
                </td>
                <td className="px-5 py-3">25-07-2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
