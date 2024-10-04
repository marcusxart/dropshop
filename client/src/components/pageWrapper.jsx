import { Link, Outlet, useLocation } from "react-router-dom";
import AppleIcon from "../assets/svgs/apple";
import MenuIcon from "../assets/svgs/menu";
import MaxContainer from "./maxContainer";
import classnames from "classnames";
import { useState } from "react";
import OutsideClick from "./outsideClick";

const PageWrapper = () => {
  const [toggle, setToggle] = useState(false);
  const path = useLocation().pathname;
  const links = [
    { text: "Home", route: "/", active: path === "/" },
    { text: "Services", route: "/services", active: path.includes("services") },
    { text: "About us", route: "/about", active: path.includes("about") },
    { text: "Support", route: "/support", active: path.includes("support") },
  ];
  return (
    <>
      <OutsideClick handleClick={() => setToggle(false)}>
        <nav className=" max-w-[1440px] mx-auto lg:px-[36px] w-full  lg:py-[24px] fixed top-0 left-0 right-0 z-30">
          <MaxContainer>
            <div className="bg-[#111214BF] relative h-[75px] lg:border lg:border-[#464646] rounded-[16px] flex justify-between items-center px-[24px] lg:px-[32px]">
              <Link to="/">YOUR LOGO</Link>
              <ul className=" absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-[32px] font-medium text-[14px] text-[#9C9C9D]">
                {links?.map((i, idx) => (
                  <li key={idx}>
                    <Link
                      to={i.route}
                      className={classnames("hover:text-white duration-150", {
                        "gradient-yellow": i.active,
                      })}
                    >
                      {i.text}
                    </Link>
                  </li>
                ))}
              </ul>
              {toggle && (
                <ul className="lg:hidden absolute bg-[#000000B2] z-[20] left-0 right-0 px-[32px] py-[38px]  flex flex-col gap-[24px] top-[75px] rounded-[24px] justify-center items-center">
                  {links?.map((i, idx) => (
                    <li key={idx}>
                      <Link
                        onClick={() => setToggle(false)}
                        to={i.route}
                        className={classnames("hover:text-white duration-150", {
                          "gradient-yellow": i.active,
                        })}
                      >
                        {i.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex items-center gap-[20px] lg:gap-[32px] text-[14px]">
                <a
                  href="/"
                  target="_blank"
                  className="text-[#9C9C9D] hover:text-white duration-150"
                >
                  Get Started
                </a>
                <div className="hidden text-[#000] text-[11px] bg-white lg:flex items-center gap-[8px] px-[10px] h-[30px] rounded-[40px] hover:opacity-90 duration-150">
                  <AppleIcon />
                  Coming soon
                </div>
                <span
                  className="lg:hidden cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                >
                  <MenuIcon />
                </span>
              </div>
            </div>
          </MaxContainer>
        </nav>
      </OutsideClick>
      <main className="pb-[24px]  pt-[75px] lg:pt-[124px]">
        <Outlet />
      </main>
    </>
  );
};

export default PageWrapper;
