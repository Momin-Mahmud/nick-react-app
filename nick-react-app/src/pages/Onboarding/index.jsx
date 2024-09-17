import Icon from "../../utils/Icon";
import Visuals from "../../assets/hero/Visuals.png";
import Stepper from "./Stepper";

const Onboarding = () => {
  return (
    <div className=' bg-[#F3F4F6] flex w-full h-[100vh]'>
      <div className=' items-center justify-start w-[40vw]'>
        <div className='flex flex-col gap-6 justify-start items-start w-full'>
          <div className='flex items-start justify-start gap-2 mt-[12vh] px-20'>
            <Icon size='50' name='logo' className='' />
            <span className='text-black tracking-tight text-4xl font-medium'>salescopilots</span>
          </div>
          <div className="flex flex-col bg-[#F3F4F6] text-left items-start justify-start mx-20">
            <div className="text-black text-5xl  font-bold">
              Welcome to SalesCoPilot!
            </div>
            <div className="text-left font-normal mt-2 text-xl w-[80%]">
              Let's personalize and start training your copilot to enhance your
              experience
            </div>
          </div>
        </div>
          </div>
          <div className='flex w-[60vw] justify-center pt-20 items-center'>
              <Stepper/>
          </div>
      <div className='absolute left-0 z-0 mt-20 bottom-0'>
        <img src={Visuals} width={600} />
      </div>
    </div>
  );
};

export default Onboarding;
