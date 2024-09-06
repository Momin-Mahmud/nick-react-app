import React from "react";
import TestimonialCard from "../../base/TestimonialCard/TestimonialCard";
import Button from "../../base/Button/Button";
import meta from "../../../assets/Testimonials/OLO1.png";
import cognizant from "../../../assets/Testimonials/Cognizant_logo_20221.png";
import chubb from "../../../assets/Testimonials/Chubb-Limited-logo1.png";
import wellsfargo from "../../../assets/Testimonials/wellsfargo1.png";
import rippling from "../../../assets/Testimonials/rippling-logo1.png";
import gecko from "../../../assets/Testimonials/gecko.png";

import veriz from "../../../assets/Testimonials/veriz.png";

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="font-bold text-3xl">
        Our CoPilots Strategies Have Booked Meetings and Deals With
      </div>
      <div className="flex items-center justify-center my-8">
        <div className="flex overflow-x-auto space-x-6 p-4 scrollbar-hide">
          <TestimonialCard img={meta} />
          <TestimonialCard img={cognizant} />
          <TestimonialCard img={wellsfargo} />
          <TestimonialCard img={rippling} />
          <TestimonialCard img={gecko} />
          <TestimonialCard img={veriz} />
          <TestimonialCard img={rippling} />
          <TestimonialCard img={meta} />
          <TestimonialCard img={cognizant} />
          {/* Add more TestimonialCards as needed */}
        </div>
      </div>

      <div className="flex justify-center">
        <Button type="primary" innerText="Get 7 Day Free Trial" />
      </div>
    </div>
  );
};

export default Testimonials;
