'use client';

import Image from 'next/image';

export default function AdminHeader() {
  return (
    <div className="bg-[#BEC5AD] w-full flex justify-between items-center px-10 py-4 shadow-sm pl-79">
      {/* Left: Welcome Text */}
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold text-black">Welcome Back, Admin</h2>
        <p className="text-lg italic text-gray-700">- have a great day</p>
      </div>

      {/* Right: Notification Icon + Avatar */}
      <div className="flex items-center space-x-6">
        {/* 🛎️ Bell image added */}
        <button className="hover:opacity-80">
          <Image
            src="/photos/bell1.png" // save your uploaded image here
            alt="Notifications"
            width={24}
            height={24}
          />
        </button>

        {/* Avatar placeholder */}
        <div className="w-10 h-10 bg-white rounded-full" />
      </div>
    </div>
  );
}
