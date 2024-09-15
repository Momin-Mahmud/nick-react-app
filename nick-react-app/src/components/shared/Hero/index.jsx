/* eslint-disable react/no-unescaped-entities */
import Button from "../../../components/base/Button/Button";
import Content from "../../../assets/hero/Content.png";
const Hero = () => {
  return (
    <div className="flex items-center w-full justify-center px-24">
      <div className="text-start max-w-[50%] grid gap-3.5">
        <div className="text-[#710BA3] text-[16px]">It’s Finally Here...</div>
        <div className="text-[#710BA3] text-[24px]">
          1,000-person salesforce at the tap of a button.
        </div>
        <div className="font-extrabold text-6xl">
          10x Your Pipeline + Close Bigger Deals
        </div>
        <div className="text-[#374151]">
          The world's first AI-powered sales copilot platform. Boost your
          response rates with deep research on your prospects, relevant messages
          at scale based on your value proposition, and follow-up message
          built—all with just one click.
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
        <img src={Content} height={400} width={500} />
      </>
    </div>
  );
};

export default Hero;
