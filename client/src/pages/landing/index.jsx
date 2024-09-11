import hero from "../../assets/images/hero.png";

const Landing = () => {
  return (
    <div>
      <section className="flex items-center gap-[40px]">
        <div className="w-[60%] flex flex-col gap-[32px]">
          <h1 className="text-[60px] font-black leading-[72px] ">
            Stress-Free Fulfillment Dropshop <span>Delivers</span>
          </h1>
          <p className="text-[20px] max-w-[732px]">
            Lorem ipsum dolor sit amet consectetur. Faucibus sit aliquam justo
            quis tortor. Elit cras amet nec scelerisque eu ut nibh eget
            venenatis.
          </p>
        </div>
        <div className="w-[40%]">
          <img src={hero} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Landing;
