import { Outlet } from "react-router-dom";

import Sidebar from "../../components/Sidebar";

import AdminNav from "../../components/ButtomNav/adminNav";
import AdminHeader from "../../components/Header/adminheader";

const Adminlayout = () => {
  return (
    <div className=" flex h-screen ">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full">
        {/* Header */}
        <AdminHeader />

        {/* Page Content */}
        <div className="flex-1  overflow-auto scrollbar-hide">
          <Outlet />
        </div>
      </div>

      {/* Bottom Navigation: Visible on small screens, hidden on large screens */}
      <div className="lg:hidden fixed bottom-0 w-full">
        <AdminNav />
      </div>
    </div>
  );
};

export default Adminlayout;