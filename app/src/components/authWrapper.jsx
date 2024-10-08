import React from "react";
import { Outlet } from "react-router-dom";

const AuthWrapper = () => {
  return (
    <div className="min-h-[100dvh] flex flex-col w-full justify-between gap-[56px]">
      <div className="flex-1 pt-[90px]">
        <div className="max-w-[380px] w-full mx-auto pt-[48px] pb-[24px] flex flex-col gap-[32px] items-center">
          <div className="border-t border-[#23252A] w-full "></div>
          <div className="flex-1 w-full flex justify-center items-center">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthWrapper;
