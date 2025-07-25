import Sidebar from "./home/sidebar";
import Navbar from "./home/navbar";

export default function LayoutWrapper({ children }) {
  return (
    <div className="flex">
      {/* Sidebar - on top of Navbar */}
      <div className="fixed top-0 left-0 h-screen w-60 z-50 bg-[#8A9774]">
        <Sidebar />
      </div>

      {/* Main Area */}
      <div className="flex-1 min-h-screen bg-white ml-60">
        {/* Navbar - below sidebar */}
        <div className="fixed top-0 left-0 right-0 h-20 z-40 bg-[#C0C8A4]">
          <Navbar />
        </div>

        {/* Content Area */}
        <div className="pt-20 px-6">
          {children}
        </div>
      </div>
    </div>
  );
}
