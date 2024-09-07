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
    <div className="bg-gray-100 py-12 overflow-hidden">
      <div className="font-bold text-3xl text-center mb-8">
        Our CoPilots Strategies Have Booked Meetings and Deals With
      </div>
      <div className="relative overflow-hidden">
        {/* Marquee container */}
        <div className="animate-marquee">
          <div className="marquee-inner">
            {/* Original set of cards */}
            <div className="flex space-x-6 p-4">
              <TestimonialCard img={meta} />
              <TestimonialCard img={cognizant} />
              <TestimonialCard img={wellsfargo} />
              <TestimonialCard img={rippling} />
              <TestimonialCard img={gecko} />
              <TestimonialCard img={veriz} />
            </div>
            {/* Duplicate set of cards for continuous effect */}
            <div className="flex space-x-6 p-4">
              <TestimonialCard img={meta} />
              <TestimonialCard img={cognizant} />
              <TestimonialCard img={wellsfargo} />
              <TestimonialCard img={rippling} />
              <TestimonialCard img={gecko} />
              <TestimonialCard img={veriz} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Button type="primary" innerText="Get 7 Day Free Trial" />
      </div>
    </div>
  );
};

export default Testimonials;
