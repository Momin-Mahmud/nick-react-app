import Button from "../../../components/base/Button/Button";
import  Content  from "../../../assets/hero/image.png";
const Hero = () => {
  return (
    <div className="flex items-center w-full justify-between px-24">
      <div className="text-start max-w-[50%] grid gap-3.5">
        <div className="text-[#710BA3] font-bold">
          AI Co-pilots trained by the best sales leaders
        </div>
        <div className="font-extrabold text-6xl">
          10x Your Pipeline + Close Bigger Deals
        </div>
        <div className="text-[#374151]">
          Craft tailored messages for executives. Ask key questions to identify
          business challenges and create urgency for adopting your product or
          service.
        </div>
        <div>
          <Button
            size="large"
            type="primaryDark"
            innerText="Get 7 Day Free Trial"
          />
        </div>
      </div>

      <>
      <img src = {Content} height={400} width={500}/>
      </>
    </div>
  );
};

export default Hero;
