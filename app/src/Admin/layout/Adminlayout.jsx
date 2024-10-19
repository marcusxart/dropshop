import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import ButtomNav from "../../components/ButtomNav";

const Adminlayout = () => {
  return (
    <div className=" flex h-screen ">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <div className="flex-1  overflow-auto scrollbar-hide">
          <Outlet />
        </div>
      </div>

      {/* Bottom Navigation: Visible on small screens, hidden on large screens */}
      <div className="lg:hidden fixed bottom-0 w-full">
        <ButtomNav />
      </div>
    </div>
  );
};

export default Adminlayout;
