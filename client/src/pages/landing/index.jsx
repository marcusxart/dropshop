import hero from "../../assets/images/hero.png";
import { ArrowLeft } from "../../assets/svgs/arrow";
import { LineGradient } from "../../assets/svgs/line";
import Stars from "../../assets/svgs/stars";
import Button from "../../components/button";
import Card from "./components/card";
import driverPhone from "../../assets/images/driver-phone.png";
import delivery from "../../assets/images/delivery.png";
import mails from "../../assets/images/mails.png";
import holdingMail from "../../assets/images/holding-mail.png";
import app from "../../assets/images/app.png";
import guyWithPhone from "../../assets/images/guy-with-phone.jpg";
import MaxContainer from "../../components/maxContainer";
import AppleIcon from "../../assets/svgs/apple";
import GooglePlayIcon from "../../assets/svgs/googlePlay";
import TextField from "../../components/textField";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  const services = [
    {
      header: "Pickup",
      text: "Stress-free pickup & fulfillment: Dropshop, your one-stop logistics partner.",
      img: driverPhone,
    },
    {
      header: "Delivery",
      text: "Your brand, fast delivery: Dropshop gets your products where they need to be.",
      img: delivery,
    },
    {
      header: "Fast",
      text: "Quick pickups, Faster deliveries: Dropshop keeps your business moving.",
      img: mails,
    },
    {
      header: "Secure",
      text: "Secured pickup & delivery: trust Dropshop with your valuable products.",
      img: holdingMail,
    },
  ];
  return (
    <div className="flex gap-[80px] lg:gap-[140px] flex-col w-full">
      <MaxContainer>
        <section className="flex items-center gap-[40px] lg:min-h-[500px]">
          <div className="w-full lg:w-[60%] flex flex-col gap-[16px] lg:gap-[32px] text-center lg:text-left pt-[60px] lg:p-0">
            <h1 className="text-[32px] leading-[40px] lg:text-[60px] font-black lg:leading-[72px] gradient-grey">
              Stress-free fulfillment Dropshop{" "}
              <span className="gradient-yellow">delivers</span>
            </h1>
            <p className="text-[18px] lg:text-[20px] max-w-[732px]">
              Lorem ipsum dolor sit amet consectetur. Faucibus sit aliquam justo
              quis tortor. Elit cras amet nec scelerisque eu ut nibh eget
              venenatis.
            </p>
            <div className="pt-[12px] lg:pt-0">
              <div className="flex gap-[16px] justify-center lg:justify-start">
                <a
                  className="w-fit lg:w-[215px] inline-block"
                  href="https://dropshop-app.onrender.com/auth"
                  target="_blank"
                >
                  <Button icon={<ArrowLeft />} full text="Get started " />
                </a>
                <Button
                  styleType="secondary"
                  text="Learn more"
                  onClick={() => {
                    navigate("/about");
                  }}
                />
              </div>
              <div className="flex items-center gap-[12px] text-[14px] opacity-[80%] mt-[20px] justify-center lg:justify-start">
                <Stars /> <p>150+ reviews · 100k+ users</p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block w-[40%]">
            <img src={hero} alt="" className="w-full object-contain" />
          </div>
        </section>
      </MaxContainer>
      <MaxContainer>
        <section>
          <div className="text-center">
            <h2 className="text-[28px] leading-[32px] lg:leading-[48px] lg:text-[40px] font-black gradient-grey mb-[16px] lg:mb-[24px]">
              Fast & secure delivery: focus on what matters
            </h2>

            <div className="w-full flex items-center justify-center lg:gap-[24px] [&_span]:hidden lg:[&_span]:inline">
              <span>
                <LineGradient />
              </span>
              <div>
                <p className="lg:text-[20px] text-[10px] text-[#FFC727] lg:leading-[20px]  leading-[12px] mb-[8px]">
                  Effortless pickup & delivery
                </p>
                <p className="text-[#6A6B6C] text-[10px]  leading-[12px] lg:text-[16px] lg:leading-[20px]">
                  One logistics, solves many problems.
                </p>
              </div>
              <span className="rotate-180">
                <LineGradient />
              </span>
            </div>
          </div>
          <div className="grid grid-cols-auto-fit-100  gap-[16px] lg:gap-[36px] mt-[32px] lg:mt-[52px]">
            {services?.map((item, idx) => (
              <Card
                hover
                key={idx}
                header={item.header}
                img={item.img}
                content={item.text}
              />
            ))}
          </div>
        </section>
      </MaxContainer>
      <section>
        <MaxContainer>
          <h2 className="text-center text-[28px] leading-[32px] lg:leading-[48px] md:text-[40px] font-black gradient-grey mb-[32px] md:mb-[52px] ">
            Your rider is a few clicks away to your{" "}
            <span className="gradient-yellow">doorstep</span>
          </h2>
        </MaxContainer>
        <div className="relative py-[32px] md:h-[480px] w-full flex items-center  box-gradient">
          <img
            src={guyWithPhone}
            alt=""
            className="top-0 bottom-0 absolute w-full h-full object-cover left-0 right-0 z-[-1]"
          />
          <MaxContainer>
            <div className="relative z-[2] w-full md:w-[40%] mx-auto lg:mx-0 flex flex-col items-center lg:items-start text-center ;lg:text-left">
              <h3 className="text-[#EBEBEB] text-[24px] lg:text-[36px] ;lg:leading-[36px] leading-[24px] font-black">
                Lorem ipsum dolor sit
              </h3>
              <p className="text-[14px] lg:text-[16px] leading-[24px] my-[20px]">
                Lorem ipsum dolor sit amet consectetur. Ut id malesuada eget
                tempor turpis et id maecenas. Semper adipiscing morbi aliquam
                mauris tincidunt congue magna. Tristique tortor eu tellus sit
                dictum id nulla et. Amet ultrices aenean nibh facilisis augue
                ipsum tempor scelerisque.
              </p>
              <Button text="Get started for free" styleType="secondary" />
            </div>
          </MaxContainer>
        </div>
      </section>
      <section>
        <MaxContainer>
          <div className="flex items-center w-full flex-col-reverse sm:flex-row gap-[40px]">
            <div className="w-full ms:w-[50%]">
              <div className="w-full  flex flex-col gap-[40px] max-w-[470px]">
                <div className="flex flex-col gap-[15px] w-full">
                  <h2 className="text-[28px] leading-[32px] lg:leading-[48px] lg:text-[40px] font-black gradient-grey ">
                    Mobile app{" "}
                    <span className="gradient-yellow">coming soon</span>
                  </h2>
                  <p className="text-[16px] lg:text-[20px]">
                    Lorem ipsum dolor sit amet consectetur. Quis etiam sem est
                    penatibus aliquam. Mauris ornare nisi egestas nam.
                  </p>
                  <div className="[&_span]:inline-flex [&_span]:border-[2px]  [&_span]:h-[48px] [&_span]:items-center [&_span]:gap-[8px] [&_span]:px-[20px] [&_span]:rounded-[12px] flex gap-[20px] items-center [&_svg]:w-[30px] [&_svg]:h-[30px] pt-[12px] [&_span]:text-[13px] lg:[&_span]:text-[16px] ">
                    <span>
                      <AppleIcon fill="#FFFFFFE5" />
                      App store
                    </span>
                    <span>
                      <GooglePlayIcon />
                      Google play
                    </span>
                  </div>
                </div>
                <div className="flex w-full flex-col gap-[16px] lg:gap-[20px]">
                  <div>
                    <h3 className="text-[16px] lg:text-[18px] font-bold">
                      Subscribe to our newsletter.
                    </h3>
                    <p className="text-[#9C9C9D] font-medium text-[12px] lg:text-[14px] mt-[8px]">
                      Get product updates and news in your inbox. No spam.
                    </p>
                  </div>
                  <form className="flex w-full items-center gap-[18px]">
                    <TextField placeholder="ada@lovelace.co.uk" />
                    <Button styleType="secondary" text="Subscribe" />
                  </form>
                  <p className="opacity-60 text-[12px] leading-[20px]">
                    By submitting your email address, you agree to receive
                    paycast&rsquo;s monthly newsletter. For more information,
                    please read our privacy policy. You can always withdraw your
                    consent.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-[50%] h-[430px] md:h-[600px] grid place-items-center">
              <img src={app} alt="" className="w-full h-full object-contain" />
            </div>
          </div>
        </MaxContainer>
      </section>
      <Footer />
    </div>
  );
};

export default Landing;
