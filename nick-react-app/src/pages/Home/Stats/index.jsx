import React from "react";
import StatsCards from "../../../components/base/StatsCards/StatsCards";
import Rating from "../../../components/base/Rating/Rating";
import Button from "../../../components/base/Button/Button";

const Stats = () => {
  const stats = [
    {
      number: 12,
      symbol: "M+",
      percentage: "0.0",
      tagline: "Customers Worldwide",
    },
    {
      number: 400,
      symbol: "K",
      percentage: "0.0",
      tagline: "Business customers",
    },
    {
      number: 12,
      symbol: "M+",
      percentage: "0.0",
      tagline: "Countries supported",
    },
  ];
  return (
    <div className="bg-[#F9FAFB] py-16 px-24">
      <div className="text-4xl font-bold mb-8">A headline to make a big impact</div>
      <span className="flex">
        {stats.map((item, index) => (
          <span className={index==1?"mx-16":""}>
            <StatsCards
              key={index} // Adding a key is important when rendering lists in React
              number={item?.number}
              symbol={item?.symbol}
              percentage={item?.percentage}
              tagline={item?.tagline}
            />
          </span>
        ))}
      </span>

      <span className="flex mt-8 justify-between">
        <Button innerText="Primary Action"/>
        <Rating rating={5}/>
      </span>
    </div>
  );
};

export default Stats;