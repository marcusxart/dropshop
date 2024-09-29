import { Link } from "react-router-dom";
import XIcon from "../assets/svgs/x";
import MaxContainer from "./maxContainer";
import InstagramIcon from "../assets/svgs/instagram";
import FacebookIcon from "../assets/svgs/facebook";
import LinkedinIcon from "../assets/svgs/linkedin";

const Footer = () => {
  const linkMain = [
    { text: "Terms", link: "/" },
    { text: "Privacy", link: "/" },
    { text: "Cookie Policy", link: "/" },
  ];
  const socials = [
    { icon: XIcon, link: "/" },
    { icon: InstagramIcon, link: "/" },
    { icon: FacebookIcon, link: "/" },
    { icon: LinkedinIcon, link: "/" },
  ];
  return (
    <footer>
      <MaxContainer>
        <div className="flex w-full justify-between items-center pb-[40px]">
          <ul className="flex gap-[14px]">
            {linkMain?.map((link) => (
              <li
                className="text-[#737373] text-[10px] lg:text-[14px]"
                key={link.text}
              >
                {link.text}
              </li>
            ))}
          </ul>
          <ul className="flex items-center  gap-[24px] lg:gap-[32px]">
            {socials?.map((link, idx) => (
              <li
                key={idx}
                className="[&_svg]:w-[16px] [&_svg]:h -[16px] lg:[&_svg]:w-[25px] lg:[&_svg]:h-[25px]"
              >
                <Link to={link.link} target="_blank">
                  <link.icon />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </MaxContainer>
    </footer>
  );
};

export default Footer;
