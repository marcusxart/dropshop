import { Link, Outlet } from "react-router-dom";
import AppleIcon from "../assets/svgs/apple";
import MenuIcon from "../assets/svgs/menu";

const PageWrapper = () => {
  const links = [
    { text: "Home", route: "/" },
    { text: "Services", route: "/" },
    { text: "About us", route: "/" },
    { text: "Support", route: "/" },
  ];
  return (
    <>
      <nav className="lg:px-[96px] w-full  lg:py-[24px] fixed top-0 left-0 right-0">
        <div className="bg-[#111214BF] relative h-[75px] lg:border lg:border-[#464646] rounded-[16px] flex justify-between items-center px-[32px]">
          <Link to="/">YOUR LOGO</Link>
          <ul className=" absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-[32px] font-medium text-[14px] text-[#9C9C9D]">
            {links?.map((i, idx) => (
              <li key={idx}>
                <Link to={i.route}>{i.text}</Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-[20px] lg:gap-[32px] text-[14px]">
            <a href="/" target="_blank" className="text-[#9C9C9D]">
              Get Started
            </a>
            <div className="hidden text-[#000] text-[11px] bg-white lg:flex items-center gap-[8px] px-[10px] h-[30px] rounded-[40px]">
              <AppleIcon />
              Coming soon
            </div>
            <span className="lg:hidden cursor-pointer">
              <MenuIcon />
            </span>
          </div>
        </div>
      </nav>
      <main className="pb-[24px] lg:px-[60px] pt-[75px] lg:pt-[124px]">
        <Outlet />
      </main>
    </>
  );
};

export default PageWrapper;
