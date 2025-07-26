'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const menuItems = [
    { icon: "/photos/dashboard.png", label: "Dashboard" },
    { icon: "/photos/inventory.png", label: "Inventory Management" },
    { icon: "/photos/student.png", label: "Student Management" },
    { icon: "/photos/notice.png", label: "Notices" },
    { icon: "/photos/invoice.png", label: "Invoices" },
    { icon: "/photos/inspection.png", label: "Inspection" },
    { icon: "/photos/leave.png", label: "Leave Requests" },
    { icon: "/photos/staff.png", label: "Staff Allotment" },
    { icon: "/photos/salary.png", label: "Staff Salary & Deductions" },
    { icon: "/photos/tickets.png", label: "Tickets and Queries" },
    { icon: "/photos/audit.png", label: "Audit Logs" },
    { icon: "/photos/refund.png", label: "Refunds" },
  ];

  // Handle logout confirmation
  function handleLogout() {
    alert("Logged out!");
    setShowLogoutConfirm(false);
  }

  return (
    <div className="
      h-screen w-72 bg-[#A4B494] flex flex-col justify-between py-10 px-2 shadow-lg rounded-r-4xl relative
      sm:w-64 sm:py-8 sm:px-4
      xs:w-full xs:h-auto xs:flex-row xs:items-center xs:justify-between xs:rounded-none
    ">

      {/* Logo */}
<div className="flex items-center justify-center 
                xs:hidden ">
  <Image
    src="/photos/logo.png"
    alt="Logo"
    width={150}
    height={150}
    className="rounded-full object-contain -mt-5"
  />
</div>


      {/* Menu Items */}
      <ul className="
        space-y-1
        xs:flex xs:space-y-0 xs:space-x-2 xs:flex-1 xs:overflow-x-auto text-lg
      ">
        {menuItems.map((item) => {
          const isActive = active === item.label;

          return (
            <li
              key={item.label}
              onClick={() => setActive(item.label)}
              className={`
                flex items-center gap-3 px-4 py-2 rounded-full cursor-pointer
                ${isActive
                  ? 'bg-white text-black font-semibold shadow'
                  : 'text-black hover:bg-white hover:text-black'}
                xs:px-2 xs:py-1 xs:text-sm
              `}
            >
              <Image
                src={item.icon}
                alt={item.label}
                width={20}
                height={20}
                className="object-contain"
              />
              {/* Hide label on extra small screens */}
              <span className={`text-md font-semibold ${isActive ? 'font-semibold' : ''} xs:hidden`}>
                {item.label}
              </span>
            </li>
          );
        })}
      </ul>

      {/* Divider Line before Logout */}
<hr className="border-t border-black/40 my-4 mx-3 xs:hidden" />

<button
  onClick={() => setShowLogoutConfirm(true)}
  className="flex items-center gap-2 text-black font-medium hover:bg-white hover:text-black px-3 py-1 rounded-full text-sm"
>
  <Image
    src="/photos/logout.png"
    alt="Logout Icon"
    width={20}
    height={20}
    className="rounded-full p-1 shadow-md"
  />
  Logout
</button>



      {/* Logout Confirmation Popup */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-[#A4B494]/60 z-50">
          <div className="bg-[#A4B494] p-6 rounded-xl shadow-lg w-80 max-w-full text-black flex flex-col items-center">
            <p className="mb-4 text-center text-lg font-semibold">
              Are you sure you want to logout?
            </p>
            <div className="flex gap-4">
              <button
                onClick={handleLogout}
                className="bg-white text-[#4A633E] font-semibold px-5 py-2 rounded-full hover:bg-[#D7E3C8]"
              >
                Yes
              </button>
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="bg-[#4A633E] text-white font-semibold px-5 py-2 rounded-full hover:bg-[#3E522D]"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
