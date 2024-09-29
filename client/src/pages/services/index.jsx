import MaxContainer from "../../components/maxContainer";
import driverPhone from "../../assets/images/driver-phone.png";
import cardIng from "../../assets/images/card-wrap.png";
import delivery from "../../assets/images/delivery.png";
import comingSoon from "../../assets/images/location-coming-soon.png";
import Card from "./components/card";
import classnames from "classnames";
import Footer from "../../components/Footer";
import TextField from "../../components/textField";
import Button from "../../components/button";

const Services = () => {
  const list = [
    {
      title: "Pickup",
      desc: "Stress-Free Pickup & Fulfillment: Dropshop, your one-stop logistics partner.",
      img: driverPhone,
    },
    {
      title: "Delivery",
      desc: "Stress-Free Pickup & Fulfillment: Dropshop, your one-stop logistics partner.",
      img: delivery,
      switch: true,
    },
  ];
  return (
    <div className="pt-[60px] flex gap-[80px] lg:gap-[140px] flex-col w-full">
      <MaxContainer>
        <div className="flex flex-col gap-[80px] w-full">
          {list?.map((i, idx) => (
            <div
              className={classnames(
                "flex w-full  items-center flex-col  gap-[32px]",
                {
                  "lg:flex-row-reverse": i.switch,
                  "lg:flex-row": !i.switch,
                }
              )}
              key={idx}
            >
              <div className="flex-1 grid place-items-center">
                {i.switch ? (
                  <Card
                    img={i.img}
                    header={i.title}
                    content={i.desc}
                    rightText
                  />
                ) : (
                  <Card img={i.img} header={i.title} content={i.desc} />
                )}
              </div>
              <div className="flex-1 w-full items-center grid place-items-center">
                {" "}
                <div className="w-full max-w-[464px] lg:max-w-fit lg:w-[500px] lg:h-[540px] h-auto relative">
                  <img
                    src={cardIng}
                    alt=""
                    className="w-full h-full absolute inset-0 "
                  />
                  <div
                    className={classnames(
                      "z-[2] relative p-[32px] lg:p-[40px]",
                      {
                        "lg:text-right": !i.switch,
                      }
                    )}
                  >
                    <h2 className="text-[24px] lg:text-[28px] font-bold text-[#EBEBEB] gradient-grey">
                      Lorem ipsum dolor sit amet
                    </h2>
                    <p className="text-[14px] leading-[24px] mt-[12px]">
                      Lorem ipsum dolor sit amet consectetur. Mauris enim amet
                      sed adipiscing nibh. Feugiat nascetur integer pellentesque
                      tincidunt nibh nulla suscipit eu. Condimentum dolor
                      dictumst augue auctor. Pellentesque faucibus ullamcorper
                      orci eu nunc cum vel non nisl. Sed lacus erat cursus
                      malesuada dolor ligula faucibus mi varius. Interdum in cum
                      turpis risus pulvinar nunc. Habitasse in volutpat
                      adipiscing facilisis euismod tincidunt neque tincidunt.
                      Sed magna scelerisque mauris parturient at sit a nullam
                      urna. Ut eu eget bibendum nec blandit metus.Lorem ipsum
                      dolor sit amet consectetur. Mauris enim amet sed
                      adipiscing nibh. Feugiat nascetur integer pellentesque
                      tincidunt nibh nulla suscipit eu. Condimentum dolor
                      dictumst augue auctor. Pellentesque faucibus ullamcorper
                      orci eu nunc cum vel non nisl. Sed lacus erat cursus
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MaxContainer>
      <MaxContainer>
        <h2 className="gradient-grey text-[28px] leading-[32px] lg:leading-[48px] lg:text-[40px] text-center font-black  ">
          More locations <span className="gradient-yellow">coming soon</span>
        </h2>
        <div className="flex w-full items-center flex-col-reverse lg:flex-row">
          <div className="w-full grid place-items-center">
            <div className="w-full  flex-shrink-0 flex flex-col gap-[40px] max-w-[470px]">
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
          <div className="w-full grid place-items-center h-[320px] lg:h-[520px]">
            <img
              src={comingSoon}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </MaxContainer>
      <Footer />
    </div>
  );
};

export default Services;
