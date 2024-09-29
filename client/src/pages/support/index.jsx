import Button from "../../components/button";
import MaxContainer from "../../components/maxContainer";
import TextField from "../../components/textField";
import supportImg from "../../assets/images/support.png";

const Support = () => {
  return (
    <MaxContainer>
      <div className="min-h-[calc(100dvh-99px)] lg:min-h-[calc(100dvh-148px)] w-full flex items-center">
        <div className="w-full flex items-center">
          <div className="flex-1 grid place-items-center">
            <div>
              <h1 className="text-[32px] leading-[40px] lg:text-[48px] font-black lg:leading-[52px] gradient-grey mb-[24px] text-center lg:text-left">
                We’re here to help
              </h1>
              <form
                action=""
                className="flex flex-col gap-[16px] max-w-[480px] w-full items-center lg:items-start"
              >
                <TextField placeholder="Email address" />
                <TextField placeholder="How can we help" type="textarea" />
                <div className="w-full max-w-[160px]">
                  <Button text="Submit" styleType="secondary" full />
                </div>
              </form>
            </div>
          </div>
          <div className="flex-1 h-[550px] w-full pb-[50px] hidden lg:block">
            <img
              src={supportImg}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </MaxContainer>
  );
};

export default Support;
