import { Outlet } from "react-router-dom";
import RiderNav from "../../../components/ButtomNav/riderNav";
import Riderheader from "../../../components/Header/riderheader";

import RiderSidebar from "../../../components/Sidebar/ridersidebar";

const Riderlayout = () => {
  return (
    <div className=" flex h-screen ">
      <div className="hidden lg:block">
        {" "}
        <RiderSidebar />{" "}
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full">
        {/* Header */}
        <Riderheader />

        {/* Page Content */}
        <div className="flex-1  overflow-auto scrollbar-hide">
          <Outlet />
        </div>
      </div>

      {/* Bottom Navigation: Visible on small screens, hidden on large screens */}
      <div className="lg:hidden fixed bottom-0 w-full">
        <RiderNav />
      </div>
    </div>
  );
};

export default Riderlayout;
