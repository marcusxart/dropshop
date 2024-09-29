import MaxContainer from "../../components/maxContainer";
import hero from "../../assets/images/about-hero.jpg";
import cardIng from "../../assets/images/card-wrap-1.png";
import lagos from "../../assets/images/lagos.png";
import lagos2 from "../../assets/images/lagos-2.png";
import Footer from "../../components/Footer";

const About = () => {
  return (
    <div className="flex gap-[80px] lg:gap-[140px] flex-col w-full">
      <div className="relative">
        <img
          src={hero}
          alt=""
          className="w-full h-full object-cover object-center absolute inset-0"
        />
        <div className="relative z-[2] bg-[#00000080]">
          <MaxContainer>
            <div className="flex flex-col justify-center items-center w-full lg:h-[400px] h-[300px] text-center">
              <h1 className="text-[32px] leading-[40px] lg:text-[60px] font-black lg:leading-[72px] gradient-grey">
                <span className="gradient-yellow">Dropshop</span> who are we?
              </h1>
              <p className="text-[16px] lg:text-[18px] max-w-[500px] lg:max-w-[750px] mt-[8px]">
                Lorem ipsum dolor sit amet consectetur. Faucibus sit aliquam
                justo quis tortor. Elit cras amet nec scelerisque eu ut nibh
                eget venenatis.
              </p>
            </div>
          </MaxContainer>
        </div>
      </div>
      <MaxContainer>
        <div className="w-full relative flex gap-[60px] h-auto lg:h-[600px]">
          <img
            src={cardIng}
            alt=""
            className="w-full h-full  object-center absolute inset-0"
          />
          <div className="w-full relative z-[2] p-[32px] lg:p-[56px] flex-1">
            <div>
              <h2 className="gradient-grey text-[32px] leading-[40px] font-black">
                Lorem ipsum dolor sit amet
              </h2>
              <p className="mt-[12px]">
                Lorem ipsum dolor sit amet consectetur. Mauris enim amet sed
                adipiscing nibh. Feugiat nascetur integer pellentesque tincidunt
                nibh nulla suscipit eu. Condimentum dolor dictumst augue auctor.
                Pellentesque faucibus ullamcorper orci eu nunc cum vel non nisl.
                Sed lacus erat cursus malesuada dolor ligula faucibus mi varius.
                Interdum in cum turpis risus pulvinar nunc. Habitasse in
                volutpat adipiscing facilisis euismod tincidunt neque tincidunt.
                Sed magna scelerisque mauris parturient at sit a nullam urna. Ut
                eu eget bibendum nec blandit metus.Lorem ipsum dolor sit amet
                consectetur. Mauris enim amet sed adipiscing nibh. Feugiat
                nascetur integer pellentesque tincidunt nibh nulla suscipit eu.
                Condimentum dolor dictumst augue auctor. Pellentesque faucibus
                ullamcorper orci eu nunc cum vel non nisl. Sed lacus erat cursus
                malesuada dolor{" "}
              </p>
            </div>
          </div>
          <div className="w-full h-full relative z-[2] flex-1 p-[56px] rounded-[4px] overflow-hidden lg:block hidden">
            <img src={lagos} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </MaxContainer>
      <MaxContainer>
        <div className="h-550px w-full">
          <img
            src={lagos2}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
      </MaxContainer>
      <Footer />
    </div>
  );
};

export default About;
