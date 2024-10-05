import Icon from "../../utils/Icon";
import Visuals from "../../assets/hero/Visuals.png";
import Stepper from "./Stepper";

const Onboarding = () => {
  return (
    <div className=" bg-[#F3F4F6] flex w-full min-h-full relative">
      <div className=" items-center justify-start w-[40vw] relative z-10">
        <div className="flex flex-col gap-6 justify-start items-start w-full">
          <div className="flex items-start justify-start gap-2 mt-[12vh] px-20">
            <Icon size="50" name="logo" className="" />
            <span className="text-black tracking-tight text-4xl font-medium">
              salescopilots
            </span>
          </div>
          <div className="flex flex-col bg-[#F3F4F6] text-left items-start justify-start mx-20">
            <div className="text-black text-3xl font-bold">
              Welcome to SalesCoPilot!
            </div>
            <div className="text-left font-normal mt-2 text-xl w-[80%]">
              Let's personalize and start training your copilot to enhance your
              experience
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full mt-4 px-20">
          <video width="500" height="300" controls autoPlay muted loop>
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="flex w-[60vw] justify-center pt-20 items-center">
        <Stepper />
      </div>
      <div className="absolute left-0 bottom-0 z-0 mt-20">
        <img src={Visuals} width={600} className="object-cover" />
      </div>
    </div>
  );
};

export default Onboarding;
