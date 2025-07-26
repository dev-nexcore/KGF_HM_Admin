'use client';

import { useState } from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa';

export default function AuditLogsSection() {
  const [logs] = useState([
    {
      timestamp: '25-10-2025\n14:00:30',
      user: 'Chinmay\nGawade',
      action: 'Student Registered',
      description: 'Registered New Student Chinmay Gawade(ID:101)',
      ip: '192.168.1.101',
    },
    {
      timestamp: '25-10-2025\n14:00:30',
      user: 'Chinmay\nGawade',
      action: 'Notice Issued',
      description: "Issued Notice ‘Hotel Maintenance Schedule’",
      ip: '192.168.1.101',
    },
    {
      timestamp: '25-10-2025\n14:00:30',
      user: 'Chinmay\nGawade',
      action: 'Leave Approved',
      description: 'Approved Leave Request For Warden C',
      ip: '192.168.1.101',
    },
  ]);

  // Word wise color mapping for action type
  const getColorForWord = (word) => {
    if (word === 'Student' || word === 'Registered') return 'text-[#1109FF]';
    if (word === 'Notice' || word === 'Issued') return 'text-[#FF7700]';
    if (word === 'Leave' || word === 'Approved') return 'text-[#36FF09]';
    return '';
  };

  return (
    <div className="px-6 py-10 max-w-full">
      <h2 className="text-2xl font-bold text-black border-l-4 border-red-600 pl-2 mb-4">
        Audit Logs
      </h2>

      <div className="bg-[#A4B494] rounded-xl p-6 shadow-md overflow-x-auto max-w-full">
        {/* Header with Title, Search and Filter */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-6 gap-4">
          <h3 className="text-2xl font-semibold text-black">Audit Log Enteries</h3>

          <div className="flex gap-1 w-full sm:w-auto items-center">
            <div className="relative flex-1 sm:flex-none sm:mr-4">
              <input
                type="text"
                placeholder="Search Logs……"
                className="w-full rounded-md border border-white bg-white pr-10 pl-4 py-2 text-sm text-black"
              />
              <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
            </div>

            <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md px-6 py-2 whitespace-nowrap shadow-md">
              <FaFilter />
              Filter
            </button>
          </div>
        </div>

        <div className="min-w-[800px]">
          <table className="w-full text-lg sm:text-base text-left text-black border-separate border-spacing-y-3">
            <thead>
              <tr className="bg-white text-black font-semibold border border-white">
                <th className="px-4 py-3 text-xl border-r border-white whitespace-nowrap">
                  TimeStamp
                </th>
                <th className="px-4 py-3 text-xl border-r border-white whitespace-nowrap">
                  User
                </th>
                <th className="px-4 py-3 text-xl border-r border-white whitespace-nowrap text-center">
                  Action Type
                </th>
                <th className="px-4 py-3 text-xl border-r border-white">Description</th>
                <th className="px-4 py-3 text-xl whitespace-nowrap">IP Address</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log, index) => (
                <tr key={index} className="bg-[#A4B494] rounded-md even:bg-opacity-90">
                  <td className="px-4 py-2 whitespace-pre-line font-semibold">{log.timestamp}</td>
                  <td className="px-4 py-2 whitespace-pre-line font-semibold">{log.user}</td>
                  <td className="px-4 py-2 text-center font-semibold align-middle">
                    <div className="flex flex-col items-center justify-center h-full space-y-0.5">
                      {log.action.split(' ').map((word, i) => (
                        <div key={i} className={getColorForWord(word)}>
                          {word}
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-2 font-semibold">{log.description}</td>
                  <td className="px-4 py-2 whitespace-nowrap font-semibold">{log.ip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
